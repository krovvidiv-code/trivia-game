import { create } from 'zustand';
import type { GameState } from '@/types';
import { startNewGame, getRecoveryQuestion } from '@/services/questionService';
import { getContextualFeedback, type FeedbackContext } from '@/data/feedbackMessages';

interface GameStore extends GameState {
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

const initialState: Omit<GameStore, 'startGame' | 'submitAnswer' | 'nextQuestion' | 'resetGame' | 'isLoading'> = {
    currentQuestionIndex: 0,
    score: 0,
    streak: 0,
    longestStreak: 0,
    questions: [],
    isGameActive: false,
    isGameOver: false,
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

    startGame: async (name, email) => {
        set({ isLoading: true });

        try {
            // Generate 12 questions using the new service
            const questions = startNewGame();

            set({
                ...initialState,
                isGameActive: true,
                playerName: name,
                playerEmail: email,
                questions: questions,
                isLoading: false
            });
        } catch (error) {
            console.error("Failed to start game:", error);
            set({ isLoading: false });
        }
    },

    submitAnswer: async (questionId, answerId, timeRemaining) => {
        const state = get();

        // Determine which question we are answering
        let question = state.questions[state.currentQuestionIndex];
        let isRecovery = false;

        if (state.recoveryMode && state.recoveryQuestion) {
            if (state.recoveryQuestion.id === questionId) {
                question = state.recoveryQuestion;
                isRecovery = true;
            } else {
                // Fallback if IDs don't match, though shouldn't happen
                console.warn("Recovery question ID mismatch");
            }
        } else if (question.id !== questionId) {
            throw new Error('Question mismatch');
        }

        const selectedAnswer = question.answers.find(a => a.id === answerId);
        const isCorrect = selectedAnswer?.correct ?? false;
        const timeTaken = question.timer_seconds - timeRemaining;

        // --- SCORING LOGIC ---
        let pointsEarned = 0;
        let breakdown = { base: 0, time: 0, streak: 0 };

        if (isCorrect) {
            // Base Points
            const basePoints = {
                easy: 300,
                medium: 500,
                hard: 1000,
                expert: 1000,
                surprise: 2000, // Bonus for surprise
                recovery: 300
            }[question.difficulty] || 500;

            // Time Bonus
            const timeBonus = Math.floor((timeRemaining / question.timer_seconds) * 500);

            // Streak Bonus (only for main questions, or maybe recovery too? Spec implies streak is saved)
            // If recovery, we keep previous streak, so we use that.
            const streakBonus = state.streak * 100;

            breakdown = {
                base: basePoints,
                time: timeBonus,
                streak: streakBonus
            };
            pointsEarned = basePoints + timeBonus + streakBonus;
        }

        // --- STATE UPDATES ---

        // Update Category Stats
        const newCategoryStats = { ...state.categoryStats };
        const category = question.category;
        if (newCategoryStats[category]) {
            newCategoryStats[category].asked += 1;
            if (isCorrect) newCategoryStats[category].correct += 1;
        }

        // Update Speed Stats
        const newSpeedStats = {
            totalAnswerTime: state.speedStats.totalAnswerTime + timeTaken,
            fastestAnswer: Math.min(state.speedStats.fastestAnswer, timeTaken),
            slowestAnswer: Math.max(state.speedStats.slowestAnswer, timeTaken)
        };

        // Handle Recovery Mode Logic
        let newStreak = state.streak;
        let recoveryTriggered = false;
        let nextRecoveryQuestion = null;
        let newRecoveryMode = state.recoveryMode;
        let newRecoveryQuestionsUsed = state.recoveryQuestionsUsed;

        if (isRecovery) {
            // Answering a recovery question
            newRecoveryQuestionsUsed += 1;
            newRecoveryMode = false; // Exit recovery mode regardless of outcome

            if (isCorrect) {
                // Streak Saved! Keep previous streak.
                // Points are added.
                // Game continues to next question.
            } else {
                // Recovery Failed. Reset streak.
                newStreak = 0;
            }
        } else {
            // Answering a main question
            if (isCorrect) {
                newStreak += 1;
                // Check for special counters
                if (question.difficulty === 'surprise') {
                    set(s => ({ surpriseCorrect: s.surpriseCorrect + 1 }));
                }
                if (question.category === 'resolve_ai') {
                    set(s => ({ resolveAIQuestionsCorrect: s.resolveAIQuestionsCorrect + 1 }));
                }
            } else {
                // Wrong answer on main question
                // Trigger Recovery Mode?
                // Only if we haven't used too many? Or always? Spec says "Recovery wrong: No additional penalty".
                // Spec implies recovery is available.
                // Let's say we always offer recovery if not already in recovery.

                recoveryTriggered = true;
                newRecoveryMode = true;

                // Get a recovery question
                // Try to get one linked to the question, or random
                if (question.recovery_question_id) {
                    // In a real app we might look it up, but here we just get a random one 
                    // or we could implement lookup if we had a map.
                    // For now, just get a random one, maybe excluding previous?
                    nextRecoveryQuestion = getRecoveryQuestion();
                } else {
                    nextRecoveryQuestion = getRecoveryQuestion();
                }

                // Don't reset streak yet. Wait for recovery result.
            }
        }

        set(state => ({
            score: state.score + pointsEarned,
            streak: newStreak,
            longestStreak: Math.max(state.longestStreak, newStreak),
            answers: {
                ...state.answers,
                [questionId]: {
                    answerId,
                    correct: isCorrect,
                    timeRemaining,
                    questionId,
                    isRecovery
                }
            },
            totalTime: state.totalTime + timeTaken,
            categoryStats: newCategoryStats,
            speedStats: newSpeedStats,
            recoveryMode: newRecoveryMode,
            recoveryQuestion: nextRecoveryQuestion,
            recoveryQuestionsUsed: newRecoveryQuestionsUsed,
            // Update context tracking
            consecutiveWrong: isCorrect ? 0 : state.consecutiveWrong + 1,
            fastAnswerCount: (isCorrect && timeTaken < question.timer_seconds * 0.3) ? state.fastAnswerCount + 1 : state.fastAnswerCount,
            timeoutCount: timeRemaining === 0 ? state.timeoutCount + 1 : state.timeoutCount,
        }));

        // Determine feedback context
        let feedbackContext: FeedbackContext;

        if (timeRemaining === 0) {
            // Timeout
            feedbackContext = 'timeout';
        } else if (isCorrect) {
            // Correct answer - determine which positive context
            const isFast = timeTaken < question.timer_seconds * 0.3;
            const totalCorrect = Object.values(state.answers).filter(a => a.correct).length + 1;

            if (totalCorrect === 1) {
                feedbackContext = 'first_correct';
            } else if (newStreak >= 4) {
                feedbackContext = 'hot_streak';
            } else if (isFast) {
                feedbackContext = 'fast_correct';
            } else if (newStreak >= 2) {
                feedbackContext = 'streak_building';
            } else {
                feedbackContext = 'default_correct';
            }
        } else {
            // Wrong answer - determine which negative context
            const newConsecutiveWrong = state.consecutiveWrong + 1;
            const wasTricky = question.difficulty === 'hard' || question.difficulty === 'expert';
            const hadStreak = state.streak > 0;

            if (hadStreak) {
                feedbackContext = 'streak_broken';
            } else if (wasTricky) {
                feedbackContext = 'tricky_wrong';
            } else if (newConsecutiveWrong >= 2) {
                feedbackContext = 'multiple_wrong';
            } else {
                feedbackContext = 'default_wrong';
            }
        }

        const feedbackMessage = getContextualFeedback(feedbackContext);

        return {
            correct: isCorrect,
            points: pointsEarned,
            breakdown,
            recoveryTriggered,
            feedbackTitle: feedbackMessage.title,
            feedbackSubtitle: feedbackMessage.subtitle
        };
    },

    nextQuestion: async () => {
        const state = get();

        // If we were in recovery mode, we are now moving to the next MAIN question
        // (Recovery mode is cleared in submitAnswer)

        const nextIndex = state.currentQuestionIndex + 1;

        if (nextIndex >= state.questions.length) {
            set({ isGameOver: true, isGameActive: false });
            return;
        }

        set({
            currentQuestionIndex: nextIndex,
            recoveryMode: false, // Ensure we are out of recovery
            recoveryQuestion: null
        });
    },

    resetGame: () => {
        set({
            ...initialState,
            isLoading: false
        });
    },
}));
