import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { INTERESTING_FACTS } from '@/data/facts';
import { Brain, Cpu, Globe, Terminal } from 'lucide-react';

export function AttractScreen() {
    const enterWelcomeScreen = useGameStore(state => state.enterWelcomeScreen);
    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    useEffect(() => {
        // Auto-rotate facts every 5 seconds
        const interval = setInterval(() => {
            setCurrentFactIndex((prev) => (prev + 1) % INTERESTING_FACTS.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentFact = INTERESTING_FACTS[currentFactIndex];

    // Random icon for visual variety
    const Icons = [Brain, Cpu, Globe, Terminal];
    const CurrentIcon = Icons[currentFactIndex % Icons.length];

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden attract-screen">
            {/* Clean black background - no gradients */}

            <div className="w-full max-w-4xl z-10 flex flex-col items-center gap-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-brand-lime tracking-tight mb-4 leading-tight">
                        AI for prod trivia.<br />
                        Win unique prizes & swag!
                    </h1>
                </motion.div>

                {/* Rotating Fact Card */}
                <div className="w-full h-[400px] relative perspective-1000">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentFact.id}
                            initial={{ opacity: 0, rotateX: -15, y: 20 }}
                            animate={{ opacity: 1, rotateX: 0, y: 0 }}
                            exit={{ opacity: 0, rotateX: 15, y: -20 }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-brand-dark/5 p-8 md:p-12 flex flex-col items-center justify-center text-center"
                        >
                            <div className="mb-6 p-4 bg-brand-lime/10 rounded-2xl">
                                <CurrentIcon className="w-12 h-12 text-brand-olive" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 leading-tight">
                                {currentFact.question}
                            </h2>

                            <div className="w-16 h-1 bg-brand-lime rounded-full mb-6" />

                            <p className="text-lg md:text-xl text-brand-dark/70 font-medium leading-relaxed">
                                {currentFact.answer}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Start Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={enterWelcomeScreen}
                    className="px-12 py-4 bg-brand-lime text-black rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all"
                >
                    Start Playing
                </motion.button>

                <p className="text-brand-dark/40 text-sm font-medium">
                    Answer trivia questions to discover which AI legend you are
                </p>
            </div>
        </div>
    );
}
