import { motion } from 'framer-motion';
import { type PersonalityProfile } from '@/types';
import { Sparkles } from 'lucide-react';

interface PersonalityRevealProps {
    personality: PersonalityProfile;
    playerName: string;
}

export function PersonalityReveal({ personality, playerName }: PersonalityRevealProps) {
    // Personalize the description with player name
    const personalizedDescription = personality.description.replace(
        /^You /,
        `${playerName}, you `
    ).replace(
        / you /g,
        ` you `
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-brand-orange/10 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple" />

            <div className="mb-6 relative inline-block">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-32 h-32 mx-auto bg-brand-cream rounded-full flex items-center justify-center shadow-inner overflow-hidden border-4 border-white"
                >
                    {/* In a real app, we would use the image path. For now, we'll use a placeholder or emoji if image is missing, 
                        but the spec says image path. Since we don't have actual assets, we can use a placeholder or just the title initials. */}
                    {personality.image ? (
                        <img src={personality.image} alt={personality.title} className="w-full h-full object-cover"
                            onError={(e) => {
                                // Fallback if image fails
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                    ) : null}
                    <div className={`w-full h-full flex items-center justify-center bg-brand-orange/10 text-2xl font-bold text-brand-orange ${personality.image ? 'hidden' : ''}`}>
                        {personality.title.substring(0, 2).toUpperCase()}
                    </div>
                </motion.div>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 text-brand-orange"
                >
                    <Sparkles className="w-8 h-8" />
                </motion.div>
            </div>

            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-serif font-bold text-brand-lime mb-2"
            >
                {personality.title}
            </motion.h2>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-brand-lime font-medium text-lg mb-6"
            >
                {personality.tagline}
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-black rounded-xl p-6 max-w-lg mx-auto space-y-4"
            >
                <p className="text-brand-dark/80 leading-relaxed">
                    {personalizedDescription}
                </p>

                <div className="pt-4 border-t border-brand-dark/5">
                    <p className="text-brand-dark/60 italic font-serif text-lg">
                        "{personality.quote}"
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
