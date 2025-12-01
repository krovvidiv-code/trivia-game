import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { Mail, ArrowRight, Gift, Sparkles } from 'lucide-react';
import { z } from 'zod';

const emailSchema = z.string().email("Please enter a valid email address");

interface EmailVerificationModalProps {
    isOpen: boolean;
    onVerified: () => void;
}

export function EmailVerificationModal({ isOpen, onVerified }: EmailVerificationModalProps) {
    const { updateEmail } = useGameStore();
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Client-side validation
        const result = emailSchema.safeParse(email);
        if (!result.success) {
            setError(result.error.issues[0].message);
            return;
        }

        // Fire and forget - update email and close modal immediately
        // Background validation will handle the rest
        await updateEmail(email);
        onVerified();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-8 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mb-6 relative">
                                <Mail className="w-8 h-8 text-brand-olive" />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute -top-2 -right-2 bg-brand-dark text-brand-lime p-1.5 rounded-full shadow-lg"
                                >
                                    <Gift className="w-4 h-4" />
                                </motion.div>
                            </div>

                            <h2 className="text-2xl font-bold text-brand-dark mb-2">
                                Wait! One Last Thing...
                            </h2>

                            <p className="text-brand-dark/60 mb-6 leading-relaxed">
                                The email you provided seems invalid. Enter a valid email to see your results and join our <span className="font-bold text-brand-olive">Raffle for Surprising Gifts & Swag!</span> <Sparkles className="inline w-4 h-4 text-brand-olive" />
                            </p>

                            <form onSubmit={handleSubmit} className="w-full space-y-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setError(null);
                                        }}
                                        placeholder="Enter your best email..."
                                        className={`w-full px-6 py-4 bg-brand-light rounded-xl border-2 outline-none transition-all font-medium text-brand-dark placeholder:text-brand-dark/30 ${error
                                            ? 'border-red-400 focus:border-red-500 bg-red-50'
                                            : 'border-transparent focus:border-brand-olive/30 focus:bg-white'
                                            }`}
                                        autoFocus
                                    />
                                    {error && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute left-0 -bottom-6 text-xs text-red-500 font-medium ml-2"
                                        >
                                            {error}
                                        </motion.p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-brand-dark text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-2"
                                >
                                    <span>Show My Results</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
