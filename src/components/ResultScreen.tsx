import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { RotateCcw, Target, Zap, Flame, Trophy } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { determinePersonality } from '@/utils/personalityLogic';
import { PersonalityReveal } from './PersonalityReveal';
import { StatsBreakdown } from './StatsBreakdown';
import { SocialShare } from './SocialShare';
import { type PersonalityProfile } from '@/types';

export function ResultScreen() {
    const resetGame = useGameStore(state => state.resetGame);
    const { questions, answers, totalTime, longestStreak, playerName } = useGameStore();
    const [personality, setPersonality] = useState<PersonalityProfile | null>(null);

    useEffect(() => {
        // Re-fetch the entire state for determinePersonality as it expects the full state object
        const currentGameState = useGameStore.getState();
        const result = determinePersonality(currentGameState);
        setPersonality(result);
    }, []); // Run once on mount

    if (!personality) return null;

    // Calculate Stats for Display
    const totalQuestions = questions.length;
    // Count correct answers (excluding recovery questions from the count if we want strict accuracy, 
    // but for "Accuracy" usually we count main questions. 
    // Let's count main questions correct.)
    const mainQuestionsCorrect = Object.values(answers).filter(a => a.correct && !a.isRecovery).length;
    const accuracy = Math.round((mainQuestionsCorrect / totalQuestions) * 100);

    const avgSpeed = totalQuestions > 0 ? (totalTime / totalQuestions) : 0;
    const speedDisplay = Math.round(avgSpeed * 10) / 10;

    const stats = [
        {
            icon: <Target className="w-6 h-6 text-brand-blue" />,
            label: "Accuracy",
            value: `${accuracy}%`
        },
        {
            icon: <Zap className="w-6 h-6 text-brand-yellow" />,
            label: "Avg Speed",
            value: `${speedDisplay}s`
        },
        {
            icon: <Flame className="w-6 h-6 text-brand-orange" />,
            label: "Best Streak",
            value: longestStreak
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-brand-light to-brand-extra-light p-4 text-brand-dark overflow-y-auto"
        >
            <div className="w-full max-w-4xl mx-auto py-12">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl font-extrabold text-brand-dark mb-2">Your AI Personality</h1>
                    <p className="text-lg text-brand-dark/70">Discover your unique AI persona based on your quiz results!</p>
                </motion.div>

                <PersonalityReveal
                    personality={personality}
                    playerName={playerName}
                />

                {/* Secret Employee Banner */}
                {personality.id === 'SECRET_EMPLOYEE' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-8 bg-brand-dark text-white p-6 rounded-xl text-center border-2 border-brand-orange animate-pulse"
                    >
                        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                            <Trophy className="text-brand-orange" />
                            RECRUITING ALERT
                            <Trophy className="text-brand-orange" />
                        </h3>
                        <p className="text-lg mb-4">
                            You answered every Resolve AI question correctly. You clearly know your stuff.
                        </p>
                        <Button
                            size="lg"
                            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold"
                            onClick={() => window.open('https://resolve.ai/careers', '_blank')}
                        >
                            Join The Team
                        </Button>
                    </motion.div>
                )}

                <div className="my-8 w-full">
                    <StatsBreakdown stats={stats} />
                </div>

                {/* Social Share */}
                <div className="mb-8 w-full">
                    <SocialShare
                        twitterText={personality.shareText}
                        linkedinText="" // Not used for now
                    />
                </div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pb-12"
                >
                    <Button onClick={resetGame} size="lg" className="w-full sm:w-auto">
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Play Again
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://resolve.ai/book-a-demo', '_blank')}>
                        Book a Demo
                    </Button>
                </motion.div>

                {/* Footer Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0 }}
                    className="flex items-center justify-center gap-6 text-brand-dark/40 pb-8"
                >
                    <a
                        href="https://www.linkedin.com/company/resolveai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-dark transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="https://x.com/resolveai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-dark transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        X (Twitter)
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
}
