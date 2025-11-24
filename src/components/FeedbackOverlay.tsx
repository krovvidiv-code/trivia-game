import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

interface FeedbackOverlayProps {
    isVisible: boolean;
    isCorrect: boolean;
    points: number;
    breakdown?: {
        base: number;
        time: number;
        streak: number;
    };
    correctAnswerText?: string;
    explanation?: string;
    onComplete?: () => void;
    message?: string;
}

export function FeedbackOverlay({
    isVisible,
    isCorrect,
    points,
    breakdown,
    correctAnswerText,
    explanation,
    onComplete,
}: FeedbackOverlayProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                if (onComplete) onComplete();
            }, 2000); // 3 seconds to read
            return () => clearTimeout(timer);
        }
    }, [isVisible, onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl text-center space-y-6 relative overflow-hidden"
                    >
                        {/* Status Icon */}
                        <div className="flex justify-center">
                            {isCorrect ? (
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green"
                                >
                                    <CheckCircle className="w-12 h-12" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0, rotate: 180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red"
                                >
                                    <XCircle className="w-12 h-12" />
                                </motion.div>
                            )}
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-serif font-bold text-brand-dark">
                            {isCorrect ? 'Correct!' : 'Not Quite!'}
                        </h2>

                        {isCorrect && (
                            <div className="space-y-2">
                                <div className="text-5xl font-bold text-brand-olive flex items-center justify-center gap-2">
                                    +{points}
                                    <span className="text-lg font-medium text-brand-dark/50 self-end mb-1">pts</span>
                                </div>

                                <div className="flex justify-between text-sm text-brand-dark/60">
                                    <span>Base Points</span>
                                    <span className="font-mono">{breakdown?.base || 0}</span>
                                </div>
                                <div className="flex justify-between text-sm text-brand-dark/60">
                                    <span>Time Bonus</span>
                                    <span className="font-mono">+{breakdown?.time || 0}</span>
                                </div>
                                {breakdown?.streak ? (
                                    <div className="flex justify-between text-sm text-brand-orange font-medium">
                                        <span>Streak Bonus</span>
                                        <span className="font-mono">+{breakdown.streak}</span>
                                    </div>
                                ) : null}
                            </div>
                        )}

                        {/* Explanation / Correct Answer */}
                        <div className="bg-brand-cream rounded-xl p-4 text-left space-y-2">
                            {!isCorrect && (
                                <div className="mb-3">
                                    <p className="text-xs font-bold text-brand-dark/40 uppercase tracking-wide">Correct Answer</p>
                                    <p className="text-lg font-medium text-brand-dark">{correctAnswerText}</p>
                                </div>
                            )}
                            <div>
                                <p className="text-xs font-bold text-brand-dark/40 uppercase tracking-wide">Explanation</p>
                                <p className="text-brand-dark/80 leading-relaxed">{explanation}</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
