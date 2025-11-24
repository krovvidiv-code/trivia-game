export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert' | 'surprise' | 'recovery';

export type Category = 'history' | 'production' | 'resolve_ai' | 'technical' | 'distributed_systems' | 'ai_agents' | 'business' | 'general' | 'puzzle' | 'ai_production' | 'surprise' | 'recovery' | 'production_systems';

export interface Answer {
    id: string;
    text: string;
    correct: boolean;
}

export interface Question {
    id: string;
    difficulty: Difficulty;
    category: Category;
    question: string;
    answers: Answer[];
    explanation: string;
    timer_seconds: number;
    recovery_question_id?: string;
    hint?: string;
    joke?: string;
    encouragement?: string;
    roast_message?: string;
}

export interface PersonalityProfile {
    id: string;
    title: string;
    tagline: string;
    description: string;
    quote: string;
    image: string;
    shareText: string;
}

export interface GameState {
    playerName: string;
    playerEmail: string;
    currentQuestionIndex: number;
    score: number;
    streak: number;
    longestStreak: number;
    isGameActive: boolean;
    isGameOver: boolean;
    questions: Question[];

    // New State Fields
    recoveryMode: boolean;
    recoveryQuestion: Question | null;
    consecutiveCorrect: number;
    recoveryQuestionsUsed: number;
    surpriseCorrect: number;
    resolveAIQuestionsCorrect: number;

    answers: Record<string, {
        answerId: string;
        correct: boolean;
        timeRemaining: number;
        questionId: string;
        isRecovery?: boolean;
    }>;

    // Personality Metrics
    totalTime: number;
    categoryStats: Record<string, { correct: number; asked: number }>; // Replaces domainStats
    speedStats: {
        totalAnswerTime: number;
        fastestAnswer: number;
        slowestAnswer: number;
    };

    startGame: (name: string, email: string) => Promise<void>;
    submitAnswer: (questionId: string, answerId: string, timeRemaining: number) => Promise<{ correct: boolean; points: number; breakdown: any; recoveryTriggered?: boolean }>;
    nextQuestion: () => Promise<void>;
    resetGame: () => void;
}
