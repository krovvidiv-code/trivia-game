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
    { title: "Fetching Coffee...", threshold: 0, color: "#9CA3AF", icon: Terminal, description: "" },
    { title: "Copying from StackOverflow...", threshold: 1, color: "#3B82F6", icon: Code, description: "" },
    { title: "It Works on My Machine...", threshold: 3, color: "#06B6D4", icon: Cpu, description: "" },
    { title: "Optimizing Algorithms...", threshold: 6, color: "#22C55E", icon: Zap, description: "" },
    { title: "Seeing the Matrix...", threshold: 9, color: "#A855F7", icon: Brain, description: "" },
    { title: "Inventing the Future...", threshold: 11, color: "#F97316", icon: Rocket, description: "" },
    { title: "ONE WITH THE MACHINE", threshold: 12, color: "#D9F400", icon: Sparkles, description: "" },
];

export function RankIndicator({ score }: RankIndicatorProps) {
    const [currentRankIndex, setCurrentRankIndex] = useState(0);

    useEffect(() => {
        let newRankIndex = 0;
        for (let i = RANKS.length - 1; i >= 0; i--) {
            if (score >= RANKS[i].threshold) {
                newRankIndex = i;
                break;
            }
        }
        setCurrentRankIndex(newRankIndex);
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
        <div className="w-full flex items-center gap-3 bg-white/40 backdrop-blur-sm rounded-xl p-2 border border-brand-dark/5">
            <div
                className="p-1.5 rounded-lg transition-colors duration-500 shrink-0"
                style={{ backgroundColor: `${currentRank.color}20` }}
            >
                <Icon
                    className="w-4 h-4 transition-colors duration-500"
                    style={{ color: currentRank.color }}
                />
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode='wait'>
                    <motion.span
                        key={currentRank.title}
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        className="text-xs font-bold text-brand-dark uppercase tracking-wide mb-1 block"
                    >
                        {currentRank.title}
                    </motion.span>
                </AnimatePresence>

                {/* Compact Progress Bar */}
                <div className="h-1.5 bg-brand-dark/5 rounded-full overflow-hidden w-full">
                    <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: currentRank.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    />
                </div>
            </div>
        </div>
    );
}
