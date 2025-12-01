import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { type Question } from '@/types';
import { Timer } from './Timer';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
    question: Question;
    onAnswer: (answerId: string, timeRemaining: number) => void;
    onTimeUp: () => void;
    currentQuestionIndex: number;
    totalQuestions: number;
}

export function QuestionCard({
    question,
    onAnswer,
    onTimeUp,
    currentQuestionIndex,
    totalQuestions
}: QuestionCardProps) {
    // Track time locally to pass to onAnswer
    const [timeLeft, setTimeLeft] = useState(question.timer_seconds);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);

    // Reset timer when question changes
    useEffect(() => {
        setTimeLeft(question.timer_seconds);
        setIsTimerActive(true);
        setSelectedAnswerId(null);
    }, [question.id, question.timer_seconds]);

    const handleAnswer = (answerId: string) => {
        if (selectedAnswerId) return; // Prevent multiple clicks
        setSelectedAnswerId(answerId);
        setIsTimerActive(false);
        // Small delay to show selection state before submitting
        setTimeout(() => {
            onAnswer(answerId, timeLeft);
        }, 300);
    };

    const handleTick = (t: number) => {
        setTimeLeft(t);
    };

    const handleTimeUp = () => {
        setIsTimerActive(false);
        onTimeUp();
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto transition-all duration-500">
            {/* Offset Background Card */}
            <div className="absolute top-4 left-4 w-full h-full bg-brand-olive/10 rounded-3xl -z-10 hidden md:block" />

            {/* Main Card */}
            <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-3xl border border-brand-dark/10 shadow-xl p-6 md:p-12 short:p-4 relative overflow-hidden presentation-mode:p-4"
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12 short:mb-2 short:gap-2 presentation-mode:mb-2 presentation-mode:gap-2">
                    <div className="space-y-4 w-full">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold tracking-widest text-brand-dark/40 uppercase">
                                Question {currentQuestionIndex + 1} / {totalQuestions}
                            </span>
                            <div className={cn(
                                "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border",
                                question.difficulty === 'easy' && "bg-green-50 text-green-700 border-green-200",
                                question.difficulty === 'medium' && "bg-yellow-50 text-yellow-700 border-yellow-200",
                                question.difficulty === 'hard' && "bg-orange-50 text-orange-700 border-orange-200",
                                question.difficulty === 'expert' && "bg-red-50 text-red-700 border-red-200",
                                question.difficulty === 'surprise' && "bg-purple-50 text-purple-700 border-purple-200 animate-pulse"
                            )}>
                                {question.difficulty}
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/20 mb-2">
                            <svg className="w-3 h-3 text-brand-olive" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-wider">Did you know?</span>
                        </div>

                        <h2 className="text-2xl md:text-4xl short:text-2xl presentation-mode:text-2xl font-serif font-bold text-brand-dark leading-tight max-w-3xl">
                            {question.question}
                        </h2>
                    </div>

                    <div className="flex-shrink-0">
                        <Timer
                            duration={question.timer_seconds}
                            onTimeUp={handleTimeUp}
                            isActive={isTimerActive}
                            onTick={handleTick}
                        />
                    </div>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {question.answers.map((answer, index) => {
                        const isSelected = selectedAnswerId === answer.id;
                        return (
                            <Button
                                key={answer.id}
                                variant="ghost"
                                className={cn(
                                    "w-full h-auto min-h-[80px] md:min-h-[100px] short:min-h-[50px] p-0 bg-white border-2 rounded-xl transition-all duration-200 group relative overflow-hidden presentation-mode:min-h-[50px]",
                                    isSelected
                                        ? "border-brand-dark bg-brand-lime"
                                        : "border-brand-dark/5 hover:border-brand-lime hover:bg-brand-lime/5"
                                )}
                                onClick={() => handleAnswer(answer.id)}
                                disabled={selectedAnswerId !== null}
                            >
                                <div className="flex items-center w-full h-full p-4 md:p-6 short:p-2 text-left presentation-mode:p-2">
                                    {/* Letter Indicator */}
                                    <div className={cn(
                                        "flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-bold mr-4 md:mr-6 short:mr-3 transition-colors presentation-mode:mr-3",
                                        isSelected
                                            ? "bg-brand-dark text-brand-lime"
                                            : "bg-brand-dark/5 text-brand-dark/60 group-hover:bg-brand-lime group-hover:text-brand-dark"
                                    )}>
                                        {['A', 'B', 'C', 'D'][index]}
                                    </div>

                                    {/* Answer Text */}
                                    <span className={cn(
                                        "text-base md:text-lg short:text-lg font-medium leading-snug presentation-mode:text-lg",
                                        isSelected ? "text-brand-dark" : "text-brand-dark/80"
                                    )}>
                                        {answer.text}
                                    </span>
                                </div>
                            </Button>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
