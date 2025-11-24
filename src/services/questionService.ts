import { QUESTIONS, RECOVERY_QUESTIONS } from '../data/questions';
import type { Question } from '@/types';

export const QUESTIONS_PER_GAME = 12;

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 */
function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Selects a random subset of items from an array.
 */
function selectRandom<T>(array: T[], count: number): T[] {
    return shuffle(array).slice(0, count);
}

/**
 * Generates a new game session with 12 questions following the difficulty curve.
 * Structure:
 * Q1-Q2: Easy
 * Q3-Q5: Medium
 * Q6-Q8: Hard
 * Q9-Q10: Expert
 * Q11: Resolve AI
 * Q12: Surprise
 */
export function startNewGame(): Question[] {
    const easy = QUESTIONS.filter(q => q.difficulty === 'easy');
    const medium = QUESTIONS.filter(q => q.difficulty === 'medium');
    const hard = QUESTIONS.filter(q => q.difficulty === 'hard' && q.category !== 'resolve_ai'); // Exclude Resolve AI from generic Hard pool if they are marked as hard
    const expert = QUESTIONS.filter(q => q.difficulty === 'expert');
    const resolveAi = QUESTIONS.filter(q => q.category === 'resolve_ai'); // Resolve AI category
    const surprise = QUESTIONS.filter(q => q.difficulty === 'surprise' || q.category === 'history' || q.category === 'puzzle'); // Surprise category/difficulty

    // Select questions
    const selectedEasy = selectRandom(easy, 2);
    const selectedMedium = selectRandom(medium, 3);
    const selectedHard = selectRandom(hard, 3);
    const selectedExpert = selectRandom(expert, 2);
    const selectedResolveAi = selectRandom(resolveAi, 1);
    const selectedSurprise = selectRandom(surprise, 1);

    // Combine in order
    // Note: We might want to randomize the position of the Surprise question, 
    // but for now we'll place it at the end as a "Bonus" round, or maybe mix it in?
    // The requirements said "Randomly inserted". Let's insert it randomly between index 2 (Q3) and 10 (Q11).

    const mainQuestions = [
        ...selectedEasy,
        ...selectedMedium,
        ...selectedHard,
        ...selectedExpert,
        ...selectedResolveAi
    ];

    // Insert surprise question at a random index between 2 and 10
    const surpriseIndex = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
    mainQuestions.splice(surpriseIndex, 0, ...selectedSurprise);

    return mainQuestions;
}

/**
 * Gets a random recovery question.
 * Optionally excludes a specific ID to avoid immediate repetition (though unlikely with 20).
 */
export function getRecoveryQuestion(excludeId?: string): Question {
    const available = excludeId
        ? RECOVERY_QUESTIONS.filter(q => q.id !== excludeId)
        : RECOVERY_QUESTIONS;

    if (available.length === 0) return RECOVERY_QUESTIONS[0]; // Fallback

    return available[Math.floor(Math.random() * available.length)];
}
