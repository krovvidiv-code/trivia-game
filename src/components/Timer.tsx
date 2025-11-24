import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimerProps {
    duration: number;
    onTimeUp: () => void;
    isActive: boolean;
    onTick: (remaining: number) => void;
}

export function Timer({ duration, onTimeUp, isActive, onTick }: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        setTimeLeft(duration);
    }, [duration]);

    useEffect(() => {
        if (!isActive) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                const next = Math.max(0, prev - 0.1);
                onTick(next);

                if (next <= 0) {
                    clearInterval(interval);
                    onTimeUp();
                    return 0;
                }
                return next;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isActive, duration, onTimeUp, onTick]);

    const percentage = (timeLeft / duration) * 100;

    // Color logic
    let color = 'text-brand-green';
    if (percentage < 50) color = 'text-yellow-500';
    if (percentage < 25) color = 'text-brand-red';

    return (
        <div className="relative w-24 h-24 flex items-center justify-center font-bold text-2xl">
            <svg className="w-full h-full transform -rotate-90">
                <circle
                    cx="48"
                    cy="48"
                    r="40"
                    className="stroke-current text-brand-dark/10"
                    strokeWidth="8"
                    fill="transparent"
                />
                <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    className={cn("stroke-current", color)}
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * percentage) / 100}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
                    transition={{ duration: 0.1, ease: "linear" }}
                />
            </svg>
            <span className={cn("absolute", color)}>{Math.ceil(timeLeft)}</span>
        </div>
    );
}
