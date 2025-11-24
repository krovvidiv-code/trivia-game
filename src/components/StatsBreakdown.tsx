import { motion } from 'framer-motion';
interface StatItem {
    icon: React.ReactNode;
    label: string;
    value: string | number;
}

interface StatsBreakdownProps {
    stats: StatItem[];
}

export function StatsBreakdown({ stats }: StatsBreakdownProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + (index * 0.2) }}
                    className="bg-white rounded-xl p-4 shadow-sm border border-brand-dark/5 flex flex-col items-center text-center space-y-2"
                >
                    <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-xl">
                        {stat.icon}
                    </div>
                    <p className="text-xs font-bold text-brand-dark/40 uppercase tracking-wide">
                        {stat.label}
                    </p>
                    <p className="text-xl font-bold text-brand-dark">
                        {stat.value}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
