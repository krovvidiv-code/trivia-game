export type FeedbackContext =
    | 'first_correct'
    | 'streak_building'    // 2-3 correct in a row
    | 'hot_streak'         // 4+ correct in a row
    | 'fast_correct'       // Answered quickly and correctly
    | 'streak_broken'      // Was on a streak, got one wrong
    | 'multiple_wrong'     // Multiple incorrect answers
    | 'timeout'            // Didn't answer in time
    | 'tricky_wrong'       // Got a hard/expert question wrong
    | 'default_correct'    // General correct
    | 'default_wrong';     // General wrong

interface FeedbackMessage {
    title: string;
    subtitle?: string;
}

export const FEEDBACK_MESSAGES: Record<FeedbackContext, FeedbackMessage[]> = {
    first_correct: [
        { title: "Great start!", subtitle: "You're off to a strong beginning" },
        { title: "Nailed it!", subtitle: "That's how you open a game" },
        { title: "Perfect!", subtitle: "Confidence level: 100%" },
    ],

    streak_building: [
        { title: "You're on fire! 🔥", subtitle: "Two in a row!" },
        { title: "Momentum!", subtitle: "Keep this energy going" },
        { title: "Look at you go!", subtitle: "Building that streak" },
        { title: "Unstoppable!", subtitle: "This is your zone" },
    ],

    hot_streak: [
        { title: "Absolutely crushing it! 💪", subtitle: "This streak is legendary" },
        { title: "Are you cheating?!", subtitle: "Just kidding... unless? 👀" },
        { title: "Somebody stop them!", subtitle: "You're too good at this" },
        { title: "MVP energy!", subtitle: "Can we hire you yet?" },
    ],

    fast_correct: [
        { title: "Lightning fast! ⚡", subtitle: "Speed AND accuracy!" },
        { title: "Did you even read it?", subtitle: "(Kidding, we're impressed)" },
        { title: "Sonic would be jealous", subtitle: "That was quick!" },
        { title: "Blink and you nailed it!", subtitle: "Impressive reflexes" },
    ],

    streak_broken: [
        { title: "Not quite!", subtitle: "Hey, streaks end. New one starts now!" },
        { title: "Close one!", subtitle: "Shake it off, you've got this" },
        { title: "Oops!", subtitle: "Even the best miss sometimes" },
        { title: "Plot twist!", subtitle: "Time to start a new streak" },
    ],

    multiple_wrong: [
        { title: "Tricky stuff!", subtitle: "These questions don't play fair" },
        { title: "Not quite!", subtitle: "No worries, you're learning" },
        { title: "Tough crowd!", subtitle: "These questions are showing off" },
        { title: "Keep going!", subtitle: "Recovery mode is just around the corner" },
    ],

    timeout: [
        { title: "Time's up! ⏰", subtitle: "Guess my timer is quicker than your typing" },
        { title: "Too slow!", subtitle: "I don't wait for anyone" },
        { title: "Clock ran out!", subtitle: "I'm impatient like that" },
        { title: "Tick tock!", subtitle: "Next time, maybe set an alarm?" },
    ],

    tricky_wrong: [
        { title: "Not quite!", subtitle: "That was a tough one, honestly" },
        { title: "Tricky question!", subtitle: "Don't feel bad, these are hard" },
        { title: "Almost!", subtitle: "This one stumps a lot of people" },
        { title: "Sneaky!", subtitle: "The question designers are evil geniuses" },
    ],

    default_correct: [
        { title: "Correct!", subtitle: "Nice work!" },
        { title: "You got it!", subtitle: "Well done!" },
        { title: "That's right!", subtitle: "Keep it up!" },
        { title: "Exactly!", subtitle: "You know your stuff" },
    ],

    default_wrong: [
        { title: "Not quite!", subtitle: "Better luck next time" },
        { title: "Oops!", subtitle: "Not the one we were looking for" },
        { title: "Not this time!", subtitle: "You'll get the next one" },
        { title: "Close!", subtitle: "Keep trying" },
    ],
};

export function getContextualFeedback(context: FeedbackContext): FeedbackMessage {
    const messages = FEEDBACK_MESSAGES[context];
    return messages[Math.floor(Math.random() * messages.length)];
}
