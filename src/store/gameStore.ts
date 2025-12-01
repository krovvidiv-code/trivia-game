import { create } from 'zustand';
import type { GameState } from '@/types';
import { startNewGame, getRecoveryQuestion } from '@/services/questionService';
import { getContextualFeedback, type FeedbackContext } from '@/data/feedbackMessages';
import { createUserIfNotExists, saveGameSession, type GameSession } from '@/lib/firebase';

interface GameStore extends GameState {
    // Attract Mode
    isAttractModeActive: boolean;
    enterWelcomeScreen: () => void;

    // Email Validation
    emailValidationStatus: 'pending' | 'valid' | 'invalid' | 'unknown';
    updateEmailValidationStatus: (status: 'pending' | 'valid' | 'invalid' | 'unknown') => void;
    updateEmail: (newEmail: string) => Promise<void>;

    startGame: (name: string, email: string) => Promise<void>;
    submitAnswer: (questionId: string, answerId: string, timeRemaining: number) => Promise<{ correct: boolean; points: number; breakdown: any; recoveryTriggered?: boolean; feedbackTitle: string; feedbackSubtitle?: string }>;
    nextQuestion: () => Promise<void>;
    resetGame: () => void;
    isLoading: boolean;
    // Context tracking
    consecutiveWrong: number;
    fastAnswerCount: number;
    timeoutCount: number;
}

const initialState: Omit<GameStore, 'startGame' | 'submitAnswer' | 'nextQuestion' | 'resetGame' | 'isLoading' | 'enterWelcomeScreen' | 'emailValidationStatus' | 'updateEmailValidationStatus' | 'updateEmail'> = {
    currentQuestionIndex: 0,
    score: 0,
    streak: 0,
    longestStreak: 0,
    questions: [],
    isGameActive: false,
    isGameOver: false,
    isAttractModeActive: true,
    playerName: '',
    playerEmail: '',
    answers: {},

    // New State Fields
    recoveryMode: false,
    recoveryQuestion: null,
    consecutiveCorrect: 0,
    recoveryQuestionsUsed: 0,
    surpriseCorrect: 0,
    resolveAIQuestionsCorrect: 0,

    // Personality Metrics
    totalTime: 0,
    categoryStats: {
        history: { correct: 0, asked: 0 },
        production: { correct: 0, asked: 0 },
        resolve_ai: { correct: 0, asked: 0 },
        technical: { correct: 0, asked: 0 },
        distributed_systems: { correct: 0, asked: 0 },
        ai_agents: { correct: 0, asked: 0 },
        business: { correct: 0, asked: 0 },
        general: { correct: 0, asked: 0 },
        puzzle: { correct: 0, asked: 0 }
    },
    speedStats: {
        totalAnswerTime: 0,
        fastestAnswer: Infinity,
        slowestAnswer: 0
    },

    // Context tracking for feedback
    consecutiveWrong: 0,
    fastAnswerCount: 0,
    timeoutCount: 0
};

export const useGameStore = create<GameStore>((set, get) => ({
    ...initialState,
    isLoading: false,
    consecutiveWrong: 0,
    fastAnswerCount: 0,
    timeoutCount: 0,
    emailValidationStatus: 'pending',

    enterWelcomeScreen: () => set({ isAttractModeActive: false }),

    updateEmailValidationStatus: (status) => set({ emailValidationStatus: status }),

    updateEmail: async (newEmail) => {
        // FIRE AND FORGET: Update state immediately to unblock UI
        set({ playerEmail: newEmail, emailValidationStatus: 'valid' });

        // Background: Validate and Save if valid
        try {
            const { validateEmail } = await import('@/services/emailService');
            const validation = await validateEmail(newEmail);

            if (validation.isValid) {
                const state = get();
                // Only save if valid, but don't revert status to 'invalid' to avoid re-blocking user
                await createUserIfNotExists(newEmail, state.playerName);
            }
        } catch (error) {
            console.error('Background email update failed:', error);
        }
    },

    startGame: async (name, email) => {
        // OPTIMISTIC START: Start game immediately
        // We don't set isLoading: true because we want instant transition

        // Generate questions immediately
        const questions = startNewGame();

        set({
            ...initialState,
            isGameActive: true,
            isAttractModeActive: false,
            playerName: name,
            playerEmail: email,
            questions: questions,
            isLoading: false
        });

        // BACKGROUND PROCESS: Validate & Save User
        // We don't await this, so it runs in background
        (async () => {
            try {
                // 1. Validate Email with ZeroBounce
                const { validateEmail } = await import('@/services/emailService');
                const validation = await validateEmail(email);

                if (!validation.isValid) {
                    console.warn(`Invalid email detected (${validation.status}): ${email}`);
                    set({ emailValidationStatus: 'invalid' });
                    // Do NOT save to Firebase if email is invalid
                } else {
                    set({ emailValidationStatus: 'valid' });
                    // 2. Create or fetch user from Firebase (only if valid)
                    await createUserIfNotExists(email, name);
                }

                // Note: We can't easily filter questions *after* game starts without disrupting flow.
                // For optimistic UI, we accept that the first game might have repeats if history check is slow.
                // Future improvement: Prefetch history on email blur?
            } catch (error) {
                console.error("Background initialization failed:", error);
                set({ emailValidationStatus: 'unknown' });
            }
        })();
    },

    submitAnswer: async (questionId, answerId, timeRemaining) => {
        const state = get();

        // Determine which question we are answering
        const isRecovery = state.recoveryMode && state.recoveryQuestion?.id === questionId;
        const currentQuestion = isRecovery ? state.recoveryQuestion : state.questions[state.currentQuestionIndex];

        if (!currentQuestion) {
            throw new Error("Question not found");
        }

        const selectedAnswer = currentQuestion.answers.find(a => a.id === answerId);
        const isCorrect = selectedAnswer?.correct ?? false;

        // Calculate points
        let points = 0;
        if (isCorrect) {
            points = 10;
            if (timeRemaining > 25) points += 5;
            if (state.streak >= 2) points += 5;
        }

        // Update stats
        const newStreak = isCorrect ? state.streak + 1 : 0;
        const newLongestStreak = Math.max(state.longestStreak, newStreak);

        // Update category stats
        const category = currentQuestion.category;
        const currentCategoryStats = state.categoryStats[category] || { correct: 0, asked: 0 };
        const newCategoryStats = {
            ...state.categoryStats,
            [category]: {
                correct: currentCategoryStats.correct + (isCorrect ? 1 : 0),
                asked: currentCategoryStats.asked + 1
            }
        };

        // Update speed stats
        const answerTime = 30 - timeRemaining;
        const newSpeedStats = {
            totalAnswerTime: state.speedStats.totalAnswerTime + answerTime,
            fastestAnswer: Math.min(state.speedStats.fastestAnswer, answerTime),
            slowestAnswer: Math.max(state.speedStats.slowestAnswer, answerTime)
        };

        // Context tracking
        const newConsecutiveWrong = isCorrect ? 0 : state.consecutiveWrong + 1;
        const newFastAnswerCount = answerTime < 5 ? state.fastAnswerCount + 1 : state.fastAnswerCount;
        const newTimeoutCount = timeRemaining === 0 ? state.timeoutCount + 1 : state.timeoutCount;

        // Determine Context for Feedback
        let feedbackContext: FeedbackContext = 'default_correct'; // Default fallback
        if (timeRemaining === 0) feedbackContext = 'timeout';
        else if (isCorrect) {
            if (newStreak >= 4) feedbackContext = 'hot_streak';
            else if (newStreak >= 2) feedbackContext = 'streak_building';
            else if (answerTime < 3) feedbackContext = 'fast_correct';
            else feedbackContext = 'default_correct';
        } else {
            if (newConsecutiveWrong >= 2) feedbackContext = 'multiple_wrong';
            else if (state.streak > 0) feedbackContext = 'streak_broken';
            else feedbackContext = 'default_wrong';
        }

        const { title: feedbackTitle, subtitle: feedbackSubtitle } = getContextualFeedback(feedbackContext);

        // Recovery Mode Logic
        let recoveryTriggered = false;
        let nextRecoveryQuestion = null;
        let nextRecoveryMode = state.recoveryMode;
        let nextRecoveryQuestionsUsed = state.recoveryQuestionsUsed;

        if (!isCorrect && !state.recoveryMode && state.recoveryQuestionsUsed < 2) {
            // 20% chance to trigger recovery on wrong answer
            if (Math.random() < 0.2) {
                nextRecoveryQuestion = getRecoveryQuestion();
                if (nextRecoveryQuestion) {
                    recoveryTriggered = true;
                    nextRecoveryMode = true;
                    nextRecoveryQuestionsUsed += 1;
                }
            }
        } else if (state.recoveryMode) {
            // Exit recovery mode after answering
            nextRecoveryMode = false;
        }

        // Update State
        set({
            score: state.score + points,
            streak: newStreak,
            longestStreak: newLongestStreak,
            categoryStats: newCategoryStats,
            speedStats: newSpeedStats,
            answers: {
                ...state.answers,
                [questionId]: {
                    answerId,
                    correct: isCorrect,
                    timeRemaining,
                    questionId,
                    isRecovery: !!isRecovery
                }
            },
            recoveryMode: nextRecoveryMode,
            recoveryQuestion: nextRecoveryQuestion,
            recoveryQuestionsUsed: nextRecoveryQuestionsUsed,
            consecutiveWrong: newConsecutiveWrong,
            fastAnswerCount: newFastAnswerCount,
            timeoutCount: newTimeoutCount
        });

        // Check for Game Over
        if (state.currentQuestionIndex >= state.questions.length - 1 && !nextRecoveryMode) {
            set({ isGameOver: true });

            // Save Game Session to Firebase
            const finalState = get();
            const session: GameSession = {
                userEmail: state.playerEmail,
                score: finalState.score,
                personality: "Calculated in UI", // Placeholder
                completedAt: null,
                answers: finalState.answers
            };
            saveGameSession(session);
        }

        return {
            correct: isCorrect,
            points,
            breakdown: {
                base: isCorrect ? 10 : 0,
                speed: (isCorrect && timeRemaining > 25) ? 5 : 0,
                streak: (isCorrect && state.streak >= 2) ? 5 : 0
            },
            recoveryTriggered,
            feedbackTitle,
            feedbackSubtitle
        };
    },

    nextQuestion: async () => {
        const state = get();
        const nextIndex = state.currentQuestionIndex + 1;

        if (nextIndex >= state.questions.length) {
            set({ isGameOver: true });
            return;
        }

        set({
            currentQuestionIndex: nextIndex,
            recoveryMode: false,
            recoveryQuestion: null
        });
    },

    resetGame: () => {
        set({
            ...initialState,
            isLoading: false,
            // Preserve attract mode state if needed, but usually reset goes to Attract or Welcome?
            // If we want to go back to Attract Mode:
            isAttractModeActive: true
        });
    }
}));
