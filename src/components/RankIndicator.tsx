import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Zap, Brain, Code, Terminal, Cpu, Sparkles, Rocket } from 'lucide-react';

interface RankIndicatorProps {
    score: number;
}

type Rank = {
    title: string;
    threshold: number;
    color: string;
    icon: React.ElementType;
    description: string;
};

const RANKS: Rank[] = [
    { title: "Intern", threshold: 0, color: "#9CA3AF", icon: Terminal, description: "Just getting coffee..." },
    { title: "Script Kiddie", threshold: 1, color: "#3B82F6", icon: Code, description: "Copy-pasting from StackOverflow" },
    { title: "Junior Dev", threshold: 3, color: "#06B6D4", icon: Cpu, description: "Writing code that mostly works" },
    { title: "Senior Engineer", threshold: 6, color: "#22C55E", icon: Zap, description: "Optimizing everything" },
    { title: "Principal Architect", threshold: 9, color: "#A855F7", icon: Brain, description: "Seeing the matrix" },
    { title: "Visionary", threshold: 11, color: "#F97316", icon: Rocket, description: "Inventing the future" },
    { title: "Singularity", threshold: 12, color: "#D9F400", icon: Sparkles, description: "One with the machine" },
];

export function RankIndicator({ score }: RankIndicatorProps) {
    const [currentRankIndex, setCurrentRankIndex] = useState(0);
    const [prevRankIndex, setPrevRankIndex] = useState(0);

    useEffect(() => {
        let newRankIndex = 0;
        for (let i = RANKS.length - 1; i >= 0; i--) {
            if (score >= RANKS[i].threshold) {
                newRankIndex = i;
                break;
            }
        }

        if (newRankIndex !== currentRankIndex) {
            setPrevRankIndex(currentRankIndex);
            setCurrentRankIndex(newRankIndex);
        }
    }, [score]);

    const currentRank = RANKS[currentRankIndex];
    const nextRank = RANKS[currentRankIndex + 1];

    // Calculate progress to next rank
    let progress = 0;
    if (nextRank) {
        const currentThreshold = currentRank.threshold;
        const nextThreshold = nextRank.threshold;
        const range = nextThreshold - currentThreshold;
        const currentProgress = score - currentThreshold;
        progress = (currentProgress / range) * 100;
    } else {
        progress = 100; // Max rank
    }

    const Icon = currentRank.icon;

    return (
        <div className="w-full max-w-md mx-auto mb-6">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 border border-brand-dark/5 shadow-sm relative overflow-hidden">
                {/* Background Glow */}
                <div
                    className="absolute inset-0 opacity-10 transition-colors duration-500"
                    style={{ backgroundColor: currentRank.color }}
                />

                <div className="flex items-center justify-between mb-2 relative z-10">
                    <div className="flex items-center gap-2">
                        <div
                            className="p-1.5 rounded-lg transition-colors duration-500"
                            style={{ backgroundColor: `${currentRank.color}20` }}
                        >
                            <Icon
                                className="w-4 h-4 transition-colors duration-500"
                                style={{ color: currentRank.color }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-brand-dark/50 uppercase tracking-wider">Neural Sync</span>
                            <AnimatePresence mode='wait'>
                                <motion.span
                                    key={currentRank.title}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    className="text-sm font-bold text-brand-dark"
                                >
                                    {currentRank.title}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="text-right">
                        <AnimatePresence mode='wait'>
                            <motion.span
                                key={currentRank.description}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-xs font-medium text-brand-dark/60 italic"
                            >
                                {currentRank.description}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-brand-dark/5 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{ backgroundColor: currentRank.color }}
                        initial={{ width: `${(prevRankIndex / (RANKS.length - 1)) * 100}%` }}
                        animate={{ width: `${progress}%` }}
                        transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    />

                    {/* Segment Markers */}
                    {/* We could add markers here if we wanted to show the steps */}
                </div>
            </div>
        </div>
    );
}
