import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';
import { Button } from './Button';

interface SocialShareProps {
    twitterText: string;
    linkedinText: string;
}

export function SocialShare({ twitterText }: SocialShareProps) {
    const handleShare = (platform: 'twitter' | 'linkedin') => {
        let url = '';
        const currentUrl = window.location.href; // Or specific campaign URL

        if (platform === 'twitter') {
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(currentUrl)}`;
        } else {
            // LinkedIn sharing is a bit more restricted via URL, usually just shares URL
            // But we can try to prepopulate text if using a specific API or just share URL
            url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        }

        window.open(url, '_blank', 'width=600,height=400');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="flex flex-col items-center gap-4 pt-4"
        >
            <p className="text-sm font-bold text-brand-dark/40 uppercase tracking-widest">
                Share Your Result
            </p>
            <div className="flex gap-4">
                <Button
                    variant="outline"
                    onClick={() => handleShare('twitter')}
                    className="gap-2 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200"
                >
                    <Twitter className="w-4 h-4" />
                    Twitter
                </Button>
                <Button
                    variant="outline"
                    onClick={() => handleShare('linkedin')}
                    className="gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
                >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                </Button>
            </div>
        </motion.div>
    );
}
