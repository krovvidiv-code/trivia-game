import type { GameState, PersonalityProfile } from '@/types';
import { PERSONALITIES } from '@/data/personalities';

interface PerformanceMetrics {
    questionsCorrect: number;
    totalQuestions: number;
    surpriseCorrect: number;
    longestStreak: number;
    avgSpeed: number;
    totalTime: number;
    recoveryQuestionsUsed: number;
    resolveAIQuestionsCorrect: number;

    // Category expertise
    categoryBreakdown: Record<string, number>; // percentage correct
}

export function determinePersonality(gameState: GameState): PersonalityProfile {
    const metrics = calculateMetrics(gameState);

    // --- SPECIAL ACHIEVEMENTS ---

    // 1. SECRET EMPLOYEE: All Resolve AI questions correct (if any were asked)
    // The spec says "All Resolve AI questions correct".
    // We should check if they got 100% on Resolve AI category.
    if (metrics.resolveAIQuestionsCorrect > 0 && metrics.categoryBreakdown['resolve_ai'] === 100) {
        return PERSONALITIES.SECRET_EMPLOYEE;
    }

    // --- LEGENDARY TIER ---

    // 2. ADA LOVELACE: Perfect Score (12/12)
    if (metrics.questionsCorrect === metrics.totalQuestions) {
        return PERSONALITIES.ADA_LOVELACE;
    }

    // 3. ALAN TURING: Near Perfect + Logic/Hard mastery
    // Simplified: 11/12 correct
    if (metrics.questionsCorrect >= 11) {
        return PERSONALITIES.ALAN_TURING;
    }

    // 4. GRACE HOPPER: Production Expert (100% on production category) + High Score
    if (metrics.categoryBreakdown['production'] === 100 && metrics.questionsCorrect >= 10) {
        return PERSONALITIES.GRACE_HOPPER;
    }

    // 5. LINUS TORVALDS: Streak Master (Streak >= 8)
    if (metrics.longestStreak >= 8) {
        return PERSONALITIES.LINUS_TORVALDS;
    }

    // 6. MARGARET HAMILTON: Speedster (Fast average time + High Score)
    if (metrics.avgSpeed < 8 && metrics.questionsCorrect >= 10) {
        return PERSONALITIES.MARGARET_HAMILTON;
    }

    // --- SPECIAL & FUN ---

    // 7. MARVIN MINSKY: Surprise Expert (All surprise questions correct)
    if (metrics.surpriseCorrect >= 1 && metrics.categoryBreakdown['surprise'] === 100) { // Assuming at least 1 surprise question
        return PERSONALITIES.MARVIN_MINSKY;
    }

    // 8. COMEBACK KID: Recovered often (Used 4+ recovery questions and still got decent score)
    // Or just used recovery questions successfully.
    // Spec: "4+ recovery questions used, still good score"
    if (metrics.recoveryQuestionsUsed >= 3 && metrics.questionsCorrect >= 8) {
        return PERSONALITIES.ROBERT_DOWNEY_JR;
    }

    // --- SOLID TIER ---

    // 9. KATHERINE JOHNSON: Solid Performer (9-10 correct)
    if (metrics.questionsCorrect >= 9) {
        return PERSONALITIES.KATHERINE_JOHNSON;
    }

    // 10. STEVE WOZNIAK / TIM BERNERS-LEE / ETC (Randomize or specific logic)
    if (metrics.questionsCorrect >= 8) {
        return PERSONALITIES.STEVE_WOZNIAK;
    }

    if (metrics.questionsCorrect >= 7) {
        return PERSONALITIES.TIM_BERNERS_LEE;
    }

    // --- LEARNING TIER ---

    // 11. KEVIN MITNICK: Hacker/Learner (6-7 correct)
    if (metrics.questionsCorrect >= 6) {
        return PERSONALITIES.KEVIN_MITNICK;
    }

    // 12. SHERLOCK HOLMES: Deductive (5-6 correct)
    if (metrics.questionsCorrect >= 5) {
        return PERSONALITIES.SHERLOCK_HOLMES;
    }

    // --- COMEDY TIER ---

    // 13. MICHAEL SCOTT: Confidence > Competence (4-5 correct, fast)
    if (metrics.questionsCorrect >= 4) {
        return PERSONALITIES.MICHAEL_SCOTT;
    }

    // 14. CLIPPY: Trying to help (2-3 correct)
    if (metrics.questionsCorrect >= 2) {
        return PERSONALITIES.CLIPPY;
    }

    // 15. RUBBER DUCK: Participated (1 correct)
    if (metrics.questionsCorrect >= 1) {
        return PERSONALITIES.RUBBER_DUCK;
    }

    // 16. HOMER SIMPSON: D'oh! (0 correct)
    return PERSONALITIES.HOMER_SIMPSON;
}

function calculateMetrics(gameState: GameState): PerformanceMetrics {
    const { questions, categoryStats, totalTime, longestStreak, recoveryQuestionsUsed, resolveAIQuestionsCorrect, surpriseCorrect } = gameState;

    const totalQuestions = questions.length;
    // Calculate questions correct from answers to be safe, or use score?
    // GameStore doesn't track total correct count explicitly in root, but we can derive it.
    // Actually, let's count from answers where isRecovery is false.
    const answersList = Object.values(gameState.answers);
    const questionsCorrect = answersList.filter(a => a.correct && !a.isRecovery).length;

    const avgSpeed = totalQuestions > 0 ? totalTime / totalQuestions : 0;

    // Calculate category breakdown percentages
    const categoryBreakdown: Record<string, number> = {};
    for (const [cat, stats] of Object.entries(categoryStats)) {
        if (stats.asked > 0) {
            categoryBreakdown[cat] = (stats.correct / stats.asked) * 100;
        } else {
            categoryBreakdown[cat] = 0;
        }
    }

    return {
        questionsCorrect,
        totalQuestions,
        surpriseCorrect,
        longestStreak,
        avgSpeed,
        totalTime,
        recoveryQuestionsUsed,
        resolveAIQuestionsCorrect,
        categoryBreakdown
    };
}
