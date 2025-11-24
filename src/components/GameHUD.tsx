import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameHUDProps {
    score: number;
    streak: number;
    currentQuestion: number;
    totalQuestions: number;
}

export function GameHUD({ score, streak, currentQuestion, totalQuestions }: GameHUDProps) {
    return (
        <div className="w-full max-w-5xl xl:max-w-7xl 2xl:max-w-[85vw] mx-auto flex items-center justify-between bg-white/50 backdrop-blur-md rounded-2xl p-4 border border-brand-dark/5 shadow-sm transition-all duration-500">
            {/* Score */}
            <div className="flex items-center gap-3">
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

            {/* Streak */}
            <AnimatePresence>
                {streak >= 2 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full"
                    >
                        <Flame className={cn("w-5 h-5 fill-current", streak >= 4 && "animate-pulse")} />
                        <span className="font-bold">{streak} Streak!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Progress */}
            <div className="text-right">
                <p className="text-xs font-bold text-brand-dark/40 uppercase tracking-wider">Question</p>
                <p className="text-xl font-bold font-serif">
                    {currentQuestion} <span className="text-brand-dark/30 text-base">/ {totalQuestions}</span>
                </p>
            </div>
        </div>
    );
}
