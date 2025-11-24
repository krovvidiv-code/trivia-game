import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { QuestionCard } from './QuestionCard';
import { GameHUD } from './GameHUD';
import { FeedbackOverlay } from './FeedbackOverlay';
import { Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function GameScreen() {
    const gameState = useGameStore();
    const { questions, currentQuestionIndex, submitAnswer, nextQuestion, isLoading, recoveryMode, recoveryQuestion } = gameState;

    // Determine which question to show
    // If in recovery mode and we have a recovery question, show that.
    // Otherwise show the current question from the list.
    // Note: The store's submitAnswer logic handles "which question is being answered" based on ID,
    // but for display we need to be careful.
    // In our store implementation, `recoveryQuestion` is set when recovery is triggered.
    // But `recoveryMode` might be true.
    // If `recoveryMode` is true, we should display `recoveryQuestion`.

    const activeQuestion = (recoveryMode && recoveryQuestion) ? recoveryQuestion : questions[currentQuestionIndex];

    const [feedback, setFeedback] = useState<{
        isVisible: boolean;
        isCorrect: boolean;
        points: number;
        streak: number;
        message?: string;
        breakdown?: {
            base: number;
            time: number;
            streak: number;
        };
        correctAnswerText?: string;
        explanation?: string;
    }>({
        isVisible: false,
        isCorrect: false,
        points: 0,
        streak: 0
    });

    const handleAnswer = async (answerId: string, timeRemaining: number) => {
        if (!activeQuestion) return;

        const result = await submitAnswer(activeQuestion.id, answerId, timeRemaining);

        // Trigger confetti if correct
        if (result.correct) {
            const colors = activeQuestion.difficulty === 'surprise'
                ? ['#8B5CF6', '#EC4899', '#F59E0B'] // Special colors for surprise
                : ['#22C55E', '#10B981', '#34D399']; // Green for normal

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: colors
            });
        }

        // Determine message
        let message = result.correct ? "Great job!" : "Keep going!";
        if (result.recoveryTriggered) {
            message = "Don't worry! Here's a chance to redeem yourself!";
        } else if (recoveryMode) {
            // We just answered a recovery question
            message = result.correct ? "Recovery Successful! Streak Saved!" : "Recovery Failed. Moving on...";
        }

        // Find correct answer text for feedback
        const correctAnswer = activeQuestion.answers.find(a => a.correct);

        setFeedback({
            isVisible: true,
            isCorrect: result.correct,
            points: result.points,
            streak: gameState.streak, // Updated streak from store
            message: message,
            breakdown: result.breakdown,
            correctAnswerText: correctAnswer?.text,
            explanation: activeQuestion.explanation
        });

        // Wait for feedback animation then load next question
        // If recovery triggered, we don't call nextQuestion(), we just hide feedback and the UI will update to show recovery question
        // If we were in recovery mode, we call nextQuestion() to go back to main flow (or next main question)

        setTimeout(async () => {
            setFeedback(prev => ({ ...prev, isVisible: false }));

            if (result.recoveryTriggered) {
                // Do nothing, just hide feedback. 
                // The state `recoveryMode` is true, so `activeQuestion` will switch to `recoveryQuestion`.
            } else {
                // Advance to next question (or finish game)
                await nextQuestion();
            }
        }, 2500); // Slightly longer to read explanation
    };

    const handleTimeUp = () => {
        // Handle timeout as a wrong answer
        // We need to find a wrong answer ID to pass, or just fail it.
        // Since we don't have a "timeout" mechanism in store yet, we'll just pick the first wrong answer.
        // Or better, just pass a non-existent ID which will count as wrong.
        handleAnswer("timeout", 0);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-cream">
                <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-brand-orange mx-auto" />
                    <p className="text-brand-dark font-medium text-lg animate-pulse">
                        Preparing your challenge...
                    </p>
                </div>
            </div>
        );
    }

    if (!activeQuestion) return null;

    return (
        <div className="min-h-screen bg-brand-cream relative font-sans selection:bg-brand-lime selection:text-brand-dark overflow-x-hidden">
            {/* Background Pattern */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#657220 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Gradient Glow */}
            <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-lime/20 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
            <div className="fixed bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

            <GameHUD
                score={gameState.score}
                streak={gameState.streak}
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={12}
            />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-12 relative z-10 min-h-[calc(100vh-80px)] flex flex-col justify-center">
                {/* Recovery Mode Banner */}
                {recoveryMode && (
                    <div className="max-w-2xl mx-auto mb-8 bg-brand-orange/10 border-2 border-brand-orange rounded-xl p-4 text-center animate-bounce-in shadow-lg backdrop-blur-sm">
                        <p className="text-brand-orange font-bold text-lg flex items-center justify-center gap-2">
                            <span>⚠️</span> RECOVERY MODE ACTIVE <span>⚠️</span>
                        </p>
                        <p className="text-brand-dark/70 font-medium">
                            Answer correctly to save your streak!
                        </p>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    <QuestionCard
                        key={activeQuestion.id}
                        question={activeQuestion}
                        onAnswer={handleAnswer}
                        onTimeUp={handleTimeUp}
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={12}
                    />
                </AnimatePresence>
            </main>

            <AnimatePresence>
                {feedback.isVisible && (
                    <FeedbackOverlay
                        isVisible={feedback.isVisible}
                        isCorrect={feedback.isCorrect}
                        points={feedback.points}
                        breakdown={feedback.breakdown}
                        message={feedback.message}
                        correctAnswerText={feedback.correctAnswerText}
                        explanation={feedback.explanation}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
