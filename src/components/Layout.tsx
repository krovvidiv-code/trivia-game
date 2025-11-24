import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

export function Layout({ children, className }: LayoutProps) {
    return (
        <div className="min-h-screen w-full bg-brand-cream text-brand-dark flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden relative">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-olive to-brand-lime opacity-80" />

            <main className={cn("w-full max-w-4xl relative z-10", className)}>
                {children}
            </main>

            <footer className="absolute bottom-4 text-brand-dark/40 text-sm font-sans">
                Resolve AI Trivia Game • AWS re:Invent 2025
            </footer>
        </div>
    );
}
