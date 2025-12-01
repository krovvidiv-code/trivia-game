import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { Button } from './Button';
import { z } from 'zod';

// Validation Schema
const userSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address")
});

export function WelcomeScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const { startGame, isLoading } = useGameStore();

    const handleStart = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate
        const result = userSchema.safeParse({ name, email });

        if (!result.success) {
            const formattedErrors: { name?: string; email?: string } = {};
            result.error.issues.forEach(issue => {
                if (issue.path[0] === 'name') formattedErrors.name = issue.message;
                if (issue.path[0] === 'email') formattedErrors.email = issue.message;
            });
            setErrors(formattedErrors);
            return;
        }

        setErrors({});
        // No await needed for optimistic start, but good practice to keep it
        startGame(name, email);
    };

    return (
        <div className="min-h-screen bg-brand-cream flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#FF9900_0%,_transparent_50%)]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 relative z-10"
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-serif font-bold text-brand-dark mb-2">
                        Resolve AI
                    </h1>
                    <p className="text-brand-orange font-medium tracking-wide uppercase text-sm">
                        Trivia Challenge
                    </p>
                </div>

                <form onSubmit={handleStart} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-brand-dark/70">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-brand-dark/10 bg-white/50'} focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all`}
                            placeholder="Enter your name"
                            disabled={isLoading}
                        />
                        <AnimatePresence>
                            {errors.name && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-red-500 text-xs font-medium pl-1"
                                >
                                    {errors.name}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-brand-dark/70">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-brand-dark/10 bg-white/50'} focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all`}
                            placeholder="name@company.com"
                            disabled={isLoading}
                        />
                        <AnimatePresence>
                            {errors.email && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-red-500 text-xs font-medium pl-1"
                                >
                                    {errors.email}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-lg py-6"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <span className="animate-spin">⏳</span> Starting...
                            </span>
                        ) : (
                            "Start Challenge"
                        )}
                    </Button>
                </form>
            </motion.div>
        </div>
    );
}
