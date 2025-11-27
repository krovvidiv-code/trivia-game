import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RankIndicator } from './RankIndicator';

interface GameHUDProps {
    score: number;
    streak: number;
    currentQuestion: number;
    totalQuestions: number;
    questionsCorrect: number;
}

export function GameHUD({ score, streak, currentQuestion, totalQuestions, questionsCorrect }: GameHUDProps) {
    return (
        <div className="w-full max-w-5xl xl:max-w-7xl 2xl:max-w-[85vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 bg-white/50 backdrop-blur-md rounded-2xl p-4 border border-brand-dark/5 shadow-sm transition-all duration-500">
            {/* Score */}
            <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="bg-brand-olive/10 p-2 rounded-xl">
                    <Trophy className="w-6 h-6 text-brand-olive" />
                </div>
                <div>
                    <p className="text-xs font-bold text-brand-dark/40 uppercase tracking-wider">Score</p>
                    <motion.p
                        key={score}
                        initial={{ scale: 1.2, color: '#657220' }}
                        animate={{ scale: 1, color: '#222222' }}
                        className="text-2xl font-bold font-serif tabular-nums"
                    >
                        {score.toLocaleString()}
                    </motion.p>
                </div>
            </div>

            {/* Rank Indicator (Center) */}
            <div className="w-full md:max-w-md order-3 md:order-2">
                <RankIndicator score={questionsCorrect} />
            </div>

            {/* Right Side: Streak & Progress */}
            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end order-2 md:order-3">
                {/* Streak */}
                <AnimatePresence>
                    {streak >= 2 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1.5 rounded-full"
                        >
                            <Flame className={cn("w-4 h-4 fill-current", streak >= 4 && "animate-pulse")} />
                            <span className="font-bold text-sm">{streak} Streak</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Progress */}
                <div className="text-right">
                    <p className="text-xs font-bold text-brand-dark/40 uppercase tracking-wider">Question</p>
                    <p className="text-xl font-bold font-serif tabular-nums">
                        {currentQuestion} <span className="text-brand-dark/30 text-base">/ {totalQuestions}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
