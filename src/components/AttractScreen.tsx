import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { INTERESTING_FACTS } from '@/data/facts';
import { ArrowRight, Brain, Cpu, Globe, Terminal } from 'lucide-react';

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
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-lime/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-olive/10 rounded-full blur-[100px]" />
            </div>

            <div className="w-full max-w-2xl z-10 flex flex-col items-center gap-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight mb-2">
                        Test your knowledge on <span className="text-brand-olive">AI for prod.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-brand-dark/70 font-medium mt-2">
                        Win <span className="font-bold text-brand-olive">unique prizes & exciting swag!</span>
                    </p>
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
                    className="group relative px-8 py-4 bg-brand-dark text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 overflow-hidden"
                >
                    <span className="relative z-10">Start Playing</span>
                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-brand-olive opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <p className="text-brand-dark/40 text-sm font-medium">
                    Answer trivia questions to discover which AI legend you are
                </p>
            </div>
        </div>
    );
}
