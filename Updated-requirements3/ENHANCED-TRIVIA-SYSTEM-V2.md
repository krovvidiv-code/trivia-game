# Resolve AI Trivia Game - ENHANCED SYSTEM V2
## AWS re:Invent 2025 - The Most Addictive Booth Experience

**Version:** 2.0 - Enhanced Edition  
**Last Updated:** November 21, 2025  
**Status:** 🎮 Ready for Development

---

## 🎯 WHAT'S NEW IN V2

### Major Enhancements

1. **Static Question Bank (100 Questions)**
   - All questions pre-written and curated
   - No AI generation during gameplay
   - Consistent quality and difficulty
   - Questions organized by topic and difficulty

2. **Dynamic Difficulty System**
   - Wrong answer triggers "encouragement mode"
   - Injects joke + easier question
   - Maintains player engagement
   - Prevents frustration dropout

3. **Tricky Multiple Choice**
   - All options are plausible
   - Requires actual knowledge
   - No obvious wrong answers
   - Industry-realistic distractors

4. **Rich Personality System**
   - 20+ detailed personality profiles
   - Visual profile cards with images
   - Based on multiple behavioral patterns
   - Shareable results with graphics

5. **Secret Employee Detection**
   - Flags potential Resolve AI employees
   - Triggers immediate recruiting response
   - Special "insider" personality reveal
   - Direct interview scheduling

6. **Premium UI/UX**
   - Elegant animations and transitions
   - Beautiful visual feedback
   - Satisfying interaction patterns
   - Professional polish throughout

---

## 🎮 GAME FLOW ENHANCED

### 1. Welcome Screen (15 seconds)

**Visual Design:**
```
┌─────────────────────────────────────────┐
│   🎮 TEST YOUR AI PRODUCTION KNOWLEDGE   │
│                                         │
│   ╔═══════════════════════════════╗    │
│   ║  RESOLVE AI TRIVIA CHALLENGE  ║    │
│   ╚═══════════════════════════════╝    │
│                                         │
│   12 Questions                          │
│   4-6 Minutes                           │
│   Epic Prizes                           │
│                                         │
│   [Elegant Input Fields]                │
│   Name: _______________                 │
│   Email: ______________                 │
│   Company: ____________                 │
│                                         │
│   [START GAME] ← Pulse animation       │
│                                         │
│   🏆 Today's Leader: Ada L. (8,450)    │
└─────────────────────────────────────────┘
```

**Animations:**
- Gentle floating background particles
- Pulsing "Start Game" button
- Smooth fade-in on load
- Subtle glow effects

---

### 2. Question Display (Enhanced)

**Layout:**
```
┌─────────────────────────────────────────┐
│ Question 3/12          Score: 2,450     │
│ ⚡ Streak: 2x          ⏱️ 00:15         │
├─────────────────────────────────────────┤
│                                         │
│  🎯 DIFFICULTY: MEDIUM                  │
│                                         │
│  What percentage of engineering time    │
│  is typically spent on toil vs new      │
│  feature development?                   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ A) 30-40%                       │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ B) 50-60%                       │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ C) 60-70% ← User hovering       │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ D) 70-80%                       │   │
│  └─────────────────────────────────┘   │
│                                         │
│  💡 Hint: Think about incident time    │
└─────────────────────────────────────────┘
```

**Interaction States:**
- **Hover:** Gentle lift + shadow
- **Selected:** Smooth color transition
- **Correct:** Green pulse + confetti
- **Wrong:** Red shake + fade
- **Timer:** Circular progress indicator

**Animations:**
- Question slides in from right
- Answers fade in sequentially (100ms delay each)
- Timer glows red when <5 seconds
- Streak counter sparkles when incrementing

---

### 3. Feedback System (NEW FEATURE)

#### When Answer is CORRECT

```
┌─────────────────────────────────────────┐
│         ✅ CORRECT! +450 POINTS         │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │  Base Points:        +150       │  │
│   │  Speed Bonus:         +50       │  │
│   │  Streak Multiplier:    x3       │  │
│   │  ═════════════════════════      │  │
│   │  Total Earned:       +450       │  │
│   └─────────────────────────────────┘  │
│                                         │
│   💡 Most teams spend 60-70% of time   │
│   on operational toil, leaving only    │
│   30-40% for new features. This is     │
│   why AI agents are critical!          │
│                                         │
│   [NEXT QUESTION] ← Auto-advance 3s    │
└─────────────────────────────────────────┘
```

**Animations:**
- Checkmark bounces in
- Points count up with sound
- Confetti burst from corners
- Smooth transition to next

---

#### When Answer is WRONG (Enhanced Recovery)

```
┌─────────────────────────────────────────┐
│           ❌ NOT QUITE!                 │
│                                         │
│   🎭 "Even Ada Lovelace debugged!"     │
│                                         │
│   The correct answer was C) 60-70%     │
│                                         │
│   💡 Most engineering teams spend the   │
│   majority of their time firefighting   │
│   and maintaining systems rather than   │
│   building new features.                │
│                                         │
│   ┌───────────────────────────────┐    │
│   │ 🎁 BONUS RECOVERY QUESTION!   │    │
│   │                               │    │
│   │ Let's try something easier:   │    │
│   │                               │    │
│   │ What does MTTR stand for?    │    │
│   │                               │    │
│   │ A) Mean Time To Repair ✓      │    │
│   │ B) Most Terrible Tech Rant    │    │
│   │ C) Many Tickets To Review     │    │
│   │ D) Maximum Test Time Required │    │
│   └───────────────────────────────┘    │
│                                         │
│   Streak preserved! Answer to continue │
└─────────────────────────────────────────┘
```

**Key Features:**
- Humorous acknowledgment
- Educational explanation
- BONUS recovery question (easier)
- Preserves streak if recovery correct
- No penalty for missing recovery
- Smooth psychological recovery

**Recovery Question Logic:**
```javascript
const recoveryQuestions = {
  easy: [
    { q: "What does MTTR stand for?", a: "Mean Time To Repair" },
    { q: "What is 'the cloud'?", a: "Someone else's computer" },
    { q: "What does API stand for?", a: "Application Programming Interface" }
  ],
  joke: [
    { q: "How many programmers does it take to change a light bulb?", 
      a: "None - it's a hardware problem" },
    { q: "What's the best thing about UDP jokes?", 
      a: "I don't care if you get them" }
  ]
};
```

---

### 4. Surprise Questions (Enhanced)

**Surprise Indicator:**
```
┌─────────────────────────────────────────┐
│         🎉 SURPRISE QUESTION! 🎉        │
│                                         │
│    This one's just for fun...           │
│    Get it right for bonus points!       │
│                                         │
│  ⏰ QUICK: 10 seconds!                  │
└─────────────────────────────────────────┘
```

Then show question:
```
┌─────────────────────────────────────────┐
│  🎭 SURPRISE: TECH HISTORY              │
│                                         │
│  What year was the term "Artificial     │
│  Intelligence" first coined?            │
│                                         │
│  A) 1943 - During WWII                  │
│  B) 1956 - Dartmouth Conference ✓       │
│  C) 1969 - Moon landing year            │
│  D) 1984 - When Apple launched Mac      │
│                                         │
│  ⏱️ 00:08                               │
└─────────────────────────────────────────┘
```

**Surprise Timing:**
- Appears randomly every 3-5 questions
- Always unexpected placement
- 10-second timer (faster!)
- Bonus points: 200 base
- Does NOT break streak if wrong

---

## 📊 ENHANCED SCORING SYSTEM

### Base Points
```
Easy:     100 points
Medium:   150 points  
Hard:     250 points
Expert:   400 points
Surprise: 200 points (bonus - no penalty)
Recovery:  50 points (streak preservation)
```

### Time Bonuses
```
Answered > 66% time remaining: +50 points
Answered > 33% time remaining: +25 points
Answered < 33% time remaining:  +0 points
```

### Streak Multipliers
```
2 correct in a row:  2x multiplier
4 correct in a row:  3x multiplier
6 correct in a row:  5x multiplier
8+ correct:          8x multiplier (LEGENDARY!)
```

### Recovery System
```
Wrong answer:
  - Show explanation
  - Offer recovery question
  - Recovery correct: Preserve streak
  - Recovery wrong: No additional penalty
  - Either way: Continue game
```

### Maximum Score Calculation
```
12 questions, all Expert, all perfect streaks:
= (400 + 50) × 8 × 12
= 43,200 points (theoretical max)

Realistic perfect game:
= ~15,000-20,000 points
```

---

## 🏆 PERSONALITY SYSTEM 2.0

### Determination Algorithm

```javascript
function determinePersonality(gameData) {
  const {
    score,
    questionsCorrect,
    totalQuestions,
    longestStreak,
    surpriseCorrect,
    categoryBreakdown,
    averageTimePerQuestion,
    recoveryQuestionsUsed,
    resolveAIQuestionsCorrect
  } = gameData;

  // SPECIAL CASE: Secret Employee Detection
  if (resolveAIQuestionsCorrect === totalResolveAIQuestions) {
    return "SECRET_EMPLOYEE"; // Recruiting trigger!
  }

  // LEGENDARY: Perfect or near-perfect
  if (questionsCorrect === totalQuestions) {
    return "ADA_LOVELACE"; // The Original
  }

  // GENIUS: Perfect on all hard + expert
  if (categoryBreakdown.hard === 100 && categoryBreakdown.expert === 100) {
    return "ALAN_TURING"; // The Codebreaker
  }

  // SPEEDSTER: Fast and accurate
  if (averageTimePerQuestion < 8 && questionsCorrect >= 10) {
    return "MARGARET_HAMILTON"; // Ship it!
  }

  // PRODUCTION HERO: All production questions correct
  if (categoryBreakdown.production === 100) {
    return "GRACE_HOPPER"; // Bug hunter
  }

  // STREAK MASTER: Long consistent streak
  if (longestStreak >= 8) {
    return "LINUS_TORVALDS"; // Just the facts
  }

  // SURPRISE EXPERT: All surprises correct
  if (surpriseCorrect === 4) {
    return "MARVIN_MINSKY"; // Renaissance AI mind
  }

  // COMEBACK KING: Many recovery questions but still good score
  if (recoveryQuestionsUsed >= 4 && score > 5000) {
    return "ROBERT_DOWNEY_JR"; // Comeback kid
  }

  // SOLID PERFORMER: Good all-around
  if (questionsCorrect >= 9) {
    return "KATHERINE_JOHNSON"; // Calculated precision
  }

  // LEARNING: Decent performance
  if (questionsCorrect >= 6) {
    return "KEVIN_MITNICK"; // Learning the system
  }

  // TRYING: Some right answers
  if (questionsCorrect >= 4) {
    return "MICHAEL_SCOTT"; // Confidence > competence
  }

  // NEEDS HELP: Few correct
  if (questionsCorrect >= 2) {
    return "CLIPPY"; // "It looks like you're troubleshooting..."
  }

  // PARTICIPATED: At least completed
  if (questionsCorrect >= 1) {
    return "RUBBER_DUCK"; // Debugging companion
  }

  // SPECTATOR: All wrong but thanks for playing!
  return "HOMER_SIMPSON"; // D'oh!
}
```

---

## 👤 PERSONALITY PROFILES (20+)

### 🏅 LEGENDARY TIER

#### 1. ADA LOVELACE
**Tagline:** "The Original Algorithm Architect"  
**Trigger:** Perfect score (12/12 correct)  
**Image:** Elegant portrait with code flowing in background

**Profile:**
```
╔════════════════════════════════════════╗
║    🎩 YOU ARE ADA LOVELACE             ║
║    "The Original Algorithm Architect"  ║
╚════════════════════════════════════════╝

Just like Ada Lovelace wrote the first algorithm 
before computers even existed, you've demonstrated 
mastery of AI and production systems before most 
people even understand what's possible.

Your Stats:
• Questions Correct: 12/12 (PERFECT!)
• Final Score: 18,450
• Longest Streak: 12
• Speed: Lightning fast
• Rank: #1 Overall

Ada Fact: In 1843, Ada wrote the first algorithm 
intended for a machine - the Analytical Engine. 
She envisioned computers doing far more than just 
calculations, predicting they could create music 
and art. She was right, 180 years early.

Your Quote: "The Analytical Engine weaves algebraic 
patterns just as the Jacquard loom weaves flowers 
and leaves."

Share Your Achievement:
[Twitter] [LinkedIn] [Instagram]

What's Next:
• You're clearly brilliant - let's talk careers
[BOOK A DEMO] [TALK TO RESOLVE TEAM]
```

---

#### 2. ALAN TURING
**Tagline:** "The Enigma Solver"  
**Trigger:** Perfect on all puzzle/logic questions  
**Image:** Thoughtful portrait with Enigma machine

**Profile:**
```
╔════════════════════════════════════════╗
║    🧩 YOU ARE ALAN TURING              ║
║    "The Enigma Solver"                 ║
╚════════════════════════════════════════╝

Like Turing cracking the Enigma code and laying the 
foundations of computer science, you've decoded the 
complexities of modern AI systems with precision.

Your Stats:
• Questions Correct: 11/12
• Final Score: 16,280
• Puzzle Mastery: 100%
• Logic Questions: Perfect
• Rank: #3 Overall

Turing Fact: During WWII, Alan Turing's work at 
Bletchley Park cracking the Enigma code shortened 
the war by 2+ years and saved millions of lives. 
He also created the "Turing Test" to measure 
machine intelligence.

Your Quote: "We can only see a short distance ahead, 
but we can see plenty there that needs to be done."

[Share] [Book Demo]
```

---

#### 3. GRACE HOPPER
**Tagline:** "The Bug Hunter"  
**Trigger:** Perfect on all production/debugging questions  
**Image:** Admiral uniform with moth and old computer

**Profile:**
```
╔════════════════════════════════════════╗
║    🐛 YOU ARE GRACE HOPPER             ║
║    "The Bug Hunter"                    ║
╚════════════════════════════════════════╝

Grace Hopper found the first computer "bug" (an 
actual moth in a relay) and created the first 
compiler. You've shown the same mastery of 
production systems and debugging!

Your Stats:
• Questions Correct: 10/12
• Final Score: 14,890
• Production Questions: 100%
• Debugging Excellence: Perfect
• Rank: #5 Overall

Hopper Fact: In 1947, Grace found an actual moth 
causing issues in the Mark II computer at Harvard. 
She taped it in her logbook with the note "First 
actual case of bug being found." She also 
popularized the term "debugging."

Your Quote: "It's easier to ask forgiveness than 
it is to get permission."

[Share Your Debug Skills] [Join Our Team]
```

---

### ⚡ SPEED TIER

#### 4. MARGARET HAMILTON
**Tagline:** "Ship It Without Fear"  
**Trigger:** High score + very fast average time  
**Image:** Standing next to Apollo code printouts

**Profile:**
```
╔════════════════════════════════════════╗
║    🚀 YOU ARE MARGARET HAMILTON        ║
║    "Ship It Without Fear"              ║
╚════════════════════════════════════════╝

Margaret Hamilton led the team that wrote the Apollo 
guidance software - code so reliable it got humans 
to the moon. You've shown the same speed and 
confidence in shipping!

Your Stats:
• Questions Correct: 10/12
• Final Score: 13,950
• Average Time: 6.2 seconds
• Speed Rating: BLAZING
• Rank: #7 Overall

Hamilton Fact: During Apollo 11's moon landing, 
an unexpected alarm went off. Thanks to Margaret's 
priority displays system, the computer ignored 
non-critical tasks and kept running. Her code 
saved the moon landing.

Your Quote: "There was no choice but to be pioneers."

Achievement Unlocked: ⚡ SPEEDRUNNER

[Share] [Learn About Resolve AI]
```

---

### 🎯 SPECIAL ACHIEVEMENTS

#### 5. SECRET EMPLOYEE 🎯
**Tagline:** "You Know Too Much..."  
**Trigger:** All Resolve AI questions correct  
**Image:** Resolve AI logo with spy magnifying glass

**Profile:**
```
╔════════════════════════════════════════╗
║    🎯 YOU ARE A SECRET EMPLOYEE?!      ║
║    "You Know Too Much..."              ║
╚════════════════════════════════════════╝

⚠️  RECRUITING ALERT TRIGGERED ⚠️

You answered EVERY Resolve AI question correctly. 

Either you:
a) Currently work here
b) Stalk our blog religiously  
c) Are exactly who we want to hire

Your Stats:
• Resolve AI Questions: 4/4 (100%)
• Total Score: 12,450
• Industry Knowledge: Expert
• Cultural Fit: Probable

🚨 IMMEDIATE ACTION REQUIRED 🚨

Please approach the Resolve AI booth and ask for:
• Spiros (CEO)
• Mayank (CTO)  
• Bharath (Engineering)

We'd like to chat about career opportunities.
(Yes, seriously. This triggers our recruiting team.)

⚡ If you actually work here: Nice job!
   Go get your hoodie from the prize station.

[CLAIM YOUR PRIZE] [SCHEDULE INTERVIEW]

P.S. We're not creepy, just impressed.
```

**Booth Action:**
When this triggers, booth system alerts staff:
```
🚨 SECRET EMPLOYEE DETECTED 🚨
Name: John Smith
Email: john@competitor.com
Company: Datadog

Action: Bring engineering team member
Status: High Priority Lead
```

---

#### 6. COMEBACK KING/QUEEN
**Tagline:** "Never Give Up"  
**Trigger:** 4+ recovery questions used, still good score  
**Image:** Phoenix rising or comeback montage

**Profile:**
```
╔════════════════════════════════════════╗
║    📈 YOU ARE THE COMEBACK KID         ║
║    "Never Give Up, Never Surrender"    ║
╚════════════════════════════════════════╝

Like Robert Downey Jr.'s career resurrection or 
Apple's return with Steve Jobs, you stumbled but 
came back strong. That's the kind of resilience 
production systems need!

Your Stats:
• Questions Correct: 8/12
• Recovery Questions: 5
• Recoveries Won: 4/5
• Final Score: 8,940
• Spirit: Unbreakable
• Rank: #23 Overall

Your Journey:
Started rough, but used every recovery question 
as a learning opportunity. By the end, you were 
crushing it!

Your Quote: "I didn't come this far to only come 
this far."

Achievement Unlocked: 🎗️ RESILIENCE CHAMPION

[Share Your Comeback] [Learn Production Resilience]
```

---

### 🎭 COMEDY TIER

#### 7. MICHAEL SCOTT
**Tagline:** "Confidence > Competence"  
**Trigger:** 4-6 correct, very confident/fast answers  
**Image:** Michael Scott pointing at camera

**Profile:**
```
╔════════════════════════════════════════╗
║    📺 YOU ARE MICHAEL SCOTT            ║
║    "That's What She Said... Wait."     ║
╚════════════════════════════════════════╝

Michael Scott ran Dunder Mifflin with more 
confidence than competence - and somehow it worked! 
You approached this quiz the same way.

Your Stats:
• Questions Correct: 5/12
• Final Score: 3,450
• Confidence Level: OFF THE CHARTS
• Actual Knowledge: ...working on it
• Rank: #87 Overall

Michael Quotes That Apply:
• "I am Beyoncé, always."
• "Should have burned this place down when I had 
   the chance."
• "I'm not superstitious, but I am a little stitious."

The Good News:
You took your shots! With some reading on AI agents 
and production systems, you'll be crushing it.

Required Watching:
[The Office: Productivity Tips] (jk)
[Actually Useful: Resolve AI Blog]

[Share Your Score] [Learn For Real This Time]
```

---

#### 8. CLIPPY
**Tagline:** "It Looks Like You're Debugging..."  
**Trigger:** 2-4 correct, used many recovery questions  
**Image:** Clippy the paperclip looking helpful

**Profile:**
```
╔════════════════════════════════════════╗
║    📎 YOU ARE CLIPPY                   ║
║    "It looks like you tried..."        ║
╚════════════════════════════════════════╝

Clippy was Microsoft's well-intentioned but 
ultimately annoying helper. You gave this quiz 
your best shot, and we respect the effort!

Your Stats:
• Questions Correct: 3/12
• Final Score: 1,850
• Recovery Questions: 6 (all of them)
• Heart: In the right place
• Rank: #134 Overall

Clippy Says:
"It looks like you're learning about AI agents.
 Would you like help with:
 • Understanding AI fundamentals
 • Reading our blog
 • Trying again"

The Good News:
Everyone starts somewhere! And hey, you finished 
the game. That's more than some people can say.

Recommended Reading:
[What Are AI Agents?]
[Production Systems 101]
[Resolve AI Blog - Start Here]

[Try Again] [Actually Learn This Time]
```

---

#### 9. RUBBER DUCK
**Tagline:** "Quack?"  
**Trigger:** 1-2 correct, completed game  
**Image:** Cute rubber duck with question marks

**Profile:**
```
╔════════════════════════════════════════╗
║    🦆 YOU ARE THE RUBBER DUCK          ║
║    "Quack? Quack. Quack!"              ║
╚════════════════════════════════════════╝

Rubber duck debugging is a real technique where 
developers explain their code to a rubber duck. 
The duck doesn't understand either, but it helps!

Your Stats:
• Questions Correct: 2/12
• Final Score: 890
• Understanding: Quack?
• Effort: A+ for trying!
• Rank: #167 Overall

Fun Fact:
Rubber duck debugging is actually effective! 
By explaining problems out loud to an inanimate 
object, developers often solve their own problems.

You're That Duck:
Not quite following everything, but being there 
helps somehow!

Next Steps:
1. Read literally anything about AI agents
2. Come back and play again
3. Evolve from duck to swan

[Quack Again] [Read Our Blog] [Book a Demo]
```

---

#### 10. HOMER SIMPSON
**Tagline:** "D'oh!"  
**Trigger:** 0-1 correct, completed game  
**Image:** Homer at computer with donut

**Profile:**
```
╔════════════════════════════════════════╗
║    🍩 YOU ARE HOMER SIMPSON            ║
║    "D'oh!"                             ║
╚════════════════════════════════════════╝

Homer Simpson: Nuclear safety inspector who doesn't 
know how nuclear power works. You: Trivia participant 
who... well, we're just glad you finished!

Your Stats:
• Questions Correct: 1/12
• Final Score: 450
• Nuclear Safety Rating: 0/5
• Donuts Consumed: Unknown
• Rank: #189 Overall

Homer Wisdom:
• "I don't know! I don't know why I did it, I don't 
   know why I enjoyed it, and I don't know why I'll 
   do it again!"

The Good News:
You can only go up from here! Also, you're probably 
better at your actual job than Homer is at his. 
...Right?

Your Mission:
1. Read about AI agents (without donut grease)
2. Learn what "production systems" means
3. Come back tomorrow and try again
4. Maybe get 2 correct this time?

Achievement Unlocked: 🏅 PARTICIPATED

[D'oh Again] [Learn Stuff] [Free Beer? (jk)]
```

---

### 📊 ALL PERSONALITY TRIGGERS

| Personality | Trigger Conditions | Score Range | Image |
|------------|-------------------|-------------|--------|
| Ada Lovelace | 12/12 correct | 15,000+ | Portrait with code |
| Alan Turing | 11-12 correct, all logic perfect | 14,000+ | Enigma machine |
| Grace Hopper | 10-12 correct, prod perfect | 12,000+ | Admiral + moth |
| Linus Torvalds | 10-12 correct, streak 8+ | 13,000+ | Linux logo |
| Margaret Hamilton | 10-12 correct, avg <8sec | 12,000+ | Apollo code |
| Katherine Johnson | 9-10 correct, consistent | 10,000+ | Calculations |
| Marvin Minsky | All surprise correct | 9,000+ | AI pioneer |
| **SECRET EMPLOYEE** | All Resolve AI correct | Any | Spy magnifying glass |
| Comeback King | 8-10 correct, 4+ recoveries | 8,000+ | Phoenix rising |
| Kevin Mitnick | 7-8 correct | 7,000+ | Hacker aesthetic |
| Sherlock Holmes | 6-7 correct, good reasoning | 6,000+ | Deerstalker hat |
| Michael Scott | 4-6 correct, fast/confident | 3,000-6,000 | Office screenshot |
| Clippy | 2-4 correct, many recoveries | 1,500-3,500 | Paperclip |
| Rubber Duck | 1-2 correct, completed | 500-1,500 | Yellow duck |
| Homer Simpson | 0-1 correct | 0-500 | Homer + donut |

---

## 💎 UI/UX ELEGANCE SPECIFICATIONS

### Design Principles

1. **Smooth as Butter**
   - All animations 60fps
   - Easing functions: cubic-bezier(0.4, 0.0, 0.2, 1)
   - No janky transitions
   - Predictive loading

2. **Satisfying Interactions**
   - Haptic feedback (mobile)
   - Sound effects (optional toggle)
   - Visual feedback <100ms
   - Micro-animations everywhere

3. **Premium Feel**
   - Generous whitespace
   - Subtle gradients
   - Soft shadows
   - Glass morphism effects

4. **Clear Hierarchy**
   - F-pattern reading flow
   - Visual weight progression
   - Consistent spacing system (8px grid)
   - Typography scales

---

### Animation Library

```javascript
const animations = {
  // Button interactions
  buttonHover: {
    scale: 1.05,
    duration: 200,
    easing: 'ease-out',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
  },
  
  buttonPress: {
    scale: 0.98,
    duration: 100,
    easing: 'ease-in'
  },
  
  // Answer selection
  answerSelect: {
    borderColor: '#3B82F6',
    borderWidth: 3,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    duration: 200
  },
  
  answerCorrect: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    borderColor: '#22C55E',
    scale: 1.02,
    duration: 300,
    confetti: true
  },
  
  answerWrong: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderColor: '#EF4444',
    shake: {
      x: [-10, 10, -10, 10, 0],
      duration: 500
    }
  },
  
  // Score updates
  scoreIncrement: {
    scale: [1, 1.2, 1],
    color: ['#000', '#22C55E', '#000'],
    duration: 600
  },
  
  // Screen transitions
  screenFadeIn: {
    opacity: [0, 1],
    y: [20, 0],
    duration: 400,
    easing: 'ease-out'
  },
  
  screenFadeOut: {
    opacity: [1, 0],
    y: [0, -20],
    duration: 300,
    easing: 'ease-in'
  },
  
  // Leaderboard updates
  leaderboardEntry: {
    y: [-50, 0],
    opacity: [0, 1],
    duration: 400,
    stagger: 100 // Delay between items
  },
  
  // Personality reveal
  personalityReveal: {
    scale: [0.8, 1],
    opacity: [0, 1],
    rotation: [-5, 0],
    duration: 800,
    easing: 'spring'
  }
};
```

---

### Color Palette

```css
:root {
  /* Brand */
  --resolve-primary: #6366F1; /* Indigo */
  --resolve-secondary: #8B5CF6; /* Purple */
  
  /* Feedback */
  --correct-green: #22C55E;
  --wrong-red: #EF4444;
  --warning-yellow: #F59E0B;
  
  /* Neutrals */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-700: #374151;
  --gray-900: #111827;
  
  /* Difficulty indicators */
  --easy-color: #10B981;
  --medium-color: #F59E0B;
  --hard-color: #F97316;
  --expert-color: #EF4444;
  --surprise-color: #8B5CF6;
}
```

---

### Typography

```css
/* Headers */
.heading-xl {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.heading-lg {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
}

/* Body */
.body-lg {
  font-size: 1.125rem;
  line-height: 1.6;
}

.body-md {
  font-size: 1rem;
  line-height: 1.5;
}

/* Special */
.score-display {
  font-size: 2.5rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.03em;
}

.mono {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

### Component Examples

#### Elegant Button
```jsx
<button className="
  px-8 py-4
  bg-gradient-to-r from-indigo-600 to-purple-600
  text-white font-semibold text-lg
  rounded-xl
  shadow-lg hover:shadow-xl
  transform hover:scale-105 active:scale-98
  transition-all duration-200
  relative overflow-hidden
  group
">
  <span className="relative z-10">Start Game</span>
  <div className="
    absolute inset-0 
    bg-gradient-to-r from-purple-600 to-indigo-600
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300
  "/>
</button>
```

#### Answer Card
```jsx
<div className="
  p-6 
  bg-white 
  border-2 border-gray-200
  rounded-2xl
  cursor-pointer
  transition-all duration-200
  hover:border-indigo-500 
  hover:shadow-md
  hover:-translate-y-1
  active:translate-y-0
  group
">
  <div className="flex items-center gap-4">
    <span className="
      w-10 h-10 
      flex items-center justify-center
      bg-gray-100 group-hover:bg-indigo-100
      rounded-full 
      font-bold text-gray-700 group-hover:text-indigo-700
      transition-colors duration-200
    ">
      A
    </span>
    <p className="text-lg text-gray-900">
      Mean Time To Repair
    </p>
  </div>
</div>
```

#### Score Counter
```jsx
<div className="
  px-6 py-3
  bg-gradient-to-br from-indigo-50 to-purple-50
  border-2 border-indigo-200
  rounded-xl
  relative overflow-hidden
">
  <div className="relative z-10">
    <p className="text-sm font-medium text-gray-600 mb-1">
      Score
    </p>
    <p className="
      text-4xl font-bold 
      bg-gradient-to-r from-indigo-600 to-purple-600
      bg-clip-text text-transparent
      tabular-nums
    ">
      {score.toLocaleString()}
    </p>
  </div>
  
  {/* Animated background */}
  <div className="
    absolute inset-0 
    bg-gradient-to-r from-indigo-400/20 to-purple-400/20
    animate-pulse
  "/>
</div>
```

---

### Confetti System

```javascript
import confetti from 'canvas-confetti';

const confettiPatterns = {
  correct: () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#22C55E', '#10B981', '#34D399']
    });
  },
  
  perfectScore: () => {
    const duration = 3000;
    const end = Date.now() + duration;
    
    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#6366F1', '#8B5CF6', '#EC4899']
      });
      
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#6366F1', '#8B5CF6', '#EC4899']
      });
      
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  },
  
  newHighScore: () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#FFD700', '#FFA500', '#FF6347']
    };
    
    confetti({
      ...defaults,
      particleCount: count,
      spread: 26,
      startVelocity: 55,
    });
    
    confetti({
      ...defaults,
      particleCount: count,
      spread: 60,
    });
    
    confetti({
      ...defaults,
      particleCount: count,
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
  }
};
```

---

## 📝 STATIC QUESTION BANK (100 QUESTIONS)

### Question Structure
```json
{
  "id": "q_001",
  "difficulty": "easy|medium|hard|expert|surprise",
  "category": "ai_agents|production|resolve_ai|history|puzzle",
  "question": "Question text",
  "answers": [
    { "id": "a", "text": "Option A", "correct": false },
    { "id": "b", "text": "Option B", "correct": true },
    { "id": "c", "text": "Option C", "correct": false },
    { "id": "d", "text": "Option D", "correct": false }
  ],
  "explanation": "Why this answer and what it means",
  "timer_seconds": 15,
  "hint": "Optional hint text",
  "recovery_question_id": "q_r01"
}
```

### Distribution
- **Easy:** 20 questions (basics, definitions)
- **Medium:** 25 questions (application, understanding)
- **Hard:** 25 questions (analysis, deep knowledge)
- **Expert:** 20 questions (synthesis, experience)
- **Surprise:** 10 questions (fun, history, puzzles)

### Recovery Questions (20)
Simple questions with jokes for wrong answers:
```json
{
  "id": "q_r01",
  "joke": "Even Ada Lovelace had to debug!",
  "question": "What does MTTR stand for?",
  "answers": [
    { "id": "a", "text": "Mean Time To Repair", "correct": true },
    { "id": "b", "text": "Most Terrible Tech Rant", "correct": false },
    { "id": "c", "text": "Many Tickets To Review", "correct": false },
    { "id": "d", "text": "Meetings That Take Resources", "correct": false }
  ],
  "encouragement": "There you go! Now let's keep going!"
}
```

---

### SAMPLE QUESTIONS

#### EASY TIER (20)

**Q001 - Easy**
```json
{
  "id": "q_001",
  "difficulty": "easy",
  "category": "ai_agents",
  "question": "What is the key difference between a traditional chatbot and an AI agent?",
  "answers": [
    { "id": "a", "text": "Agents have better grammar and spelling", "correct": false },
    { "id": "b", "text": "Agents can take actions and use tools autonomously", "correct": true },
    { "id": "c", "text": "Agents are always more expensive to run", "correct": false },
    { "id": "d", "text": "Agents require quantum computing hardware", "correct": false }
  ],
  "explanation": "AI agents can autonomously take actions, use tools, and make decisions beyond just generating text responses.",
  "timer_seconds": 15,
  "recovery_question_id": "q_r01"
}
```

**Q002 - Easy**
```json
{
  "id": "q_002",
  "difficulty": "easy",
  "category": "production",
  "question": "What is 'toil' in Site Reliability Engineering?",
  "answers": [
    { "id": "a", "text": "Manual repetitive work that could be automated", "correct": true },
    { "id": "b", "text": "The physical labor of racking servers", "correct": false },
    { "id": "c", "text": "Difficult debugging sessions after midnight", "correct": false },
    { "id": "d", "text": "Writing documentation nobody reads", "correct": false }
  ],
  "explanation": "Toil is manual, repetitive operational work that doesn't provide lasting value and could be automated.",
  "timer_seconds": 15,
  "recovery_question_id": "q_r02"
}
```

#### MEDIUM TIER (25)

**Q021 - Medium**
```json
{
  "id": "q_021",
  "difficulty": "medium",
  "category": "ai_agents",
  "question": "In a multi-agent system, what is the primary purpose of an orchestration layer?",
  "answers": [
    { "id": "a", "text": "To play background music for better focus", "correct": false },
    { "id": "b", "text": "To coordinate and route tasks between specialized agents", "correct": true },
    { "id": "c", "text": "To train all agents simultaneously on the same data", "correct": false },
    { "id": "d", "text": "To monitor agent compute costs and usage", "correct": false }
  ],
  "explanation": "Orchestration coordinates multiple specialized agents, routing tasks to the right agent and combining their outputs.",
  "timer_seconds": 12,
  "recovery_question_id": "q_r05"
}
```

**Q022 - Medium** 
```json
{
  "id": "q_022",
  "difficulty": "medium",
  "category": "production",
  "question": "What percentage of engineering time do most teams spend on operational toil versus new feature development?",
  "answers": [
    { "id": "a", "text": "30-40% on toil, 60-70% on features", "correct": false },
    { "id": "b", "text": "50-50 split between toil and features", "correct": false },
    { "id": "c", "text": "60-70% on toil, 30-40% on features", "correct": true },
    { "id": "d", "text": "80-90% on toil, 10-20% on features", "correct": false }
  ],
  "explanation": "Studies show most engineering teams spend 60-70% of their time on operational work, leaving only 30-40% for innovation.",
  "timer_seconds": 12,
  "recovery_question_id": "q_r06"
}
```

#### HARD TIER (25)

**Q046 - Hard**
```json
{
  "id": "q_046",
  "difficulty": "hard",
  "category": "ai_agents",
  "question": "What is the primary challenge in maintaining context across multi-step agent workflows?",
  "answers": [
    { "id": "a", "text": "Limited token windows in the underlying LLMs", "correct": false },
    { "id": "b", "text": "Difficulty in determining which context is relevant for each step", "correct": true },
    { "id": "c", "text": "Expensive costs of storing context in memory", "correct": false },
    { "id": "d", "text": "Agents forgetting previous steps entirely", "correct": false }
  ],
  "explanation": "The challenge isn't storage or memory, but intelligently deciding what context is relevant at each decision point.",
  "timer_seconds": 18,
  "hint": "Think about signal vs noise",
  "recovery_question_id": "q_r10"
}
```

**Q047 - Hard**
```json
{
  "id": "q_047",
  "difficulty": "hard",
  "category": "production",
  "question": "In a microservices architecture with 1000+ services, what's the biggest obstacle to rapid incident resolution?",
  "answers": [
    { "id": "a", "text": "Too many logs and metrics to search through", "correct": false },
    { "id": "b", "text": "Lack of understanding of service dependencies and data flows", "correct": true },
    { "id": "c", "text": "Insufficient monitoring and observability tools", "correct": false },
    { "id": "d", "text": "Not enough engineers on-call to investigate", "correct": false }
  ],
  "explanation": "The 'tribal knowledge' problem - knowing how services interact and where to look - is the biggest bottleneck.",
  "timer_seconds": 18,
  "recovery_question_id": "q_r11"
}
```

#### EXPERT TIER (20)

**Q071 - Expert**
```json
{
  "id": "q_071",
  "difficulty": "expert",
  "category": "ai_agents",
  "question": "When implementing ReAct (Reasoning + Acting) patterns, what's the most common failure mode?",
  "answers": [
    { "id": "a", "text": "Agents getting stuck in reasoning loops without taking action", "correct": true },
    { "id": "b", "text": "Agents taking actions before reasoning about consequences", "correct": false },
    { "id": "c", "text": "Insufficient training data for the reasoning phase", "correct": false },
    { "id": "d", "text": "High latency between reasoning and action steps", "correct": false }
  ],
  "explanation": "The 'analysis paralysis' problem - agents can get stuck overthinking without deciding to act, requiring intervention limits.",
  "timer_seconds": 20,
  "hint": "Think about decision paralysis",
  "recovery_question_id": "q_r15"
}
```

**Q072 - Expert**
```json
{
  "id": "q_072",
  "difficulty": "expert",
  "category": "production",
  "question": "What distinguishes a true Level 5 incident from a Level 4 in most organizations?",
  "answers": [
    { "id": "a", "text": "Revenue impact exceeds $1M vs $100K threshold", "correct": false },
    { "id": "b", "text": "Customer-facing impact vs internal systems only", "correct": false },
    { "id": "c", "text": "Requires C-level involvement and external communication", "correct": true },
    { "id": "d", "text": "Involves data breach or security compromise", "correct": false }
  ],
  "explanation": "L5 incidents require executive crisis management, PR/communications, and typically affect core business operations.",
  "timer_seconds": 20,
  "recovery_question_id": "q_r16"
}
```

#### RESOLVE AI SPECIFIC (8-10)

**Q091 - Resolve AI**
```json
{
  "id": "q_091",
  "difficulty": "medium",
  "category": "resolve_ai",
  "question": "Resolve AI was co-founded by the co-creator of which major open-source observability project?",
  "answers": [
    { "id": "a", "text": "Prometheus", "correct": false },
    { "id": "b", "text": "OpenTelemetry", "correct": true },
    { "id": "c", "text": "Grafana", "correct": false },
    { "id": "d", "text": "Jaeger", "correct": false }
  ],
  "explanation": "Mayank Agarwal, Resolve AI's CTO, co-created OpenTelemetry, the industry standard for observability.",
  "timer_seconds": 15
}
```

**Q092 - Resolve AI**
```json
{
  "id": "q_092",
  "difficulty": "hard",
  "category": "resolve_ai",
  "question": "What is Resolve AI's core value proposition for engineering teams?",
  "answers": [
    { "id": "a", "text": "Replacing human engineers with AI agents", "correct": false },
    { "id": "b", "text": "Shifting engineers from 70% toil to 70% high-value work", "correct": true },
    { "id": "c", "text": "Monitoring all systems with AI-powered alerts", "correct": false },
    { "id": "d", "text": "Automating all code deployments and releases", "correct": false }
  ],
  "explanation": "Resolve AI enables engineers to flip the ratio - spending most time on innovation instead of firefighting.",
  "timer_seconds": 18
}
```

#### SURPRISE QUESTIONS (10)

**Q096 - Surprise**
```json
{
  "id": "q_096",
  "difficulty": "surprise",
  "category": "history",
  "question": "In what year was the term 'Artificial Intelligence' first coined?",
  "answers": [
    { "id": "a", "text": "1943 - During WWII codebreaking efforts", "correct": false },
    { "id": "b", "text": "1956 - At the Dartmouth Conference", "correct": true },
    { "id": "c", "text": "1969 - Same year as the moon landing", "correct": false },
    { "id": "d", "text": "1984 - When Apple launched the Macintosh", "correct": false }
  ],
  "explanation": "John McCarthy coined 'Artificial Intelligence' at the 1956 Dartmouth Conference, launching the field.",
  "timer_seconds": 10
}
```

**Q097 - Surprise**
```json
{
  "id": "q_097",
  "difficulty": "surprise",
  "category": "puzzle",
  "question": "Complete this programmer's truth: 'There are 10 types of people in the world...'",
  "answers": [
    { "id": "a", "text": "Those who understand binary and those who don't", "correct": true },
    { "id": "b", "text": "Engineers and everyone else who's wrong", "correct": false },
    { "id": "c", "text": "Coffee drinkers and liars about coffee", "correct": false },
    { "id": "d", "text": "Those who've deployed on Friday and liars", "correct": false }
  ],
  "explanation": "10 in binary = 2 in decimal. Two types: those who get the joke and those who don't!",
  "timer_seconds": 10
}
```

**Q098 - Surprise**
```json
{
  "id": "q_098",
  "difficulty": "surprise",
  "category": "puzzle",
  "question": "What's the best thing about UDP jokes?",
  "answers": [
    { "id": "a", "text": "Everyone always gets them immediately", "correct": false },
    { "id": "b", "text": "I don't care if you get them or not", "correct": true },
    { "id": "c", "text": "They're always delivered in order", "correct": false },
    { "id": "d", "text": "They require acknowledgment to work", "correct": false }
  ],
  "explanation": "UDP doesn't care about delivery confirmation, unlike TCP. Get it? ...I don't care if you do!",
  "timer_seconds": 10
}
```

---

## 🎲 GAME SELECTION ALGORITHM

```javascript
function generateGameQuestions(allQuestions, playerHistory = []) {
  const questions = [];
  
  // Filter out recently seen questions (last 2 games)
  const availableQuestions = allQuestions.filter(
    q => !playerHistory.includes(q.id)
  );
  
  // Select base difficulty distribution
  const questionsByDifficulty = {
    easy: filterByDifficulty(availableQuestions, 'easy'),
    medium: filterByDifficulty(availableQuestions, 'medium'),
    hard: filterByDifficulty(availableQuestions, 'hard'),
    expert: filterByDifficulty(availableQuestions, 'expert'),
    surprise: filterByDifficulty(availableQuestions, 'surprise')
  };
  
  // Select 12 questions: 3 easy, 3 medium, 3 hard, 3 expert
  questions.push(...selectRandom(questionsByDifficulty.easy, 3));
  questions.push(...selectRandom(questionsByDifficulty.medium, 3));
  questions.push(...selectRandom(questionsByDifficulty.hard, 3));
  questions.push(...selectRandom(questionsByDifficulty.expert, 3));
  
  // Replace 3-4 random positions with surprise questions
  const surpriseCount = Math.random() > 0.5 ? 4 : 3;
  const surprisePositions = selectRandom([0,1,2,3,4,5,6,7,8,9,10,11], surpriseCount);
  
  surprisePositions.forEach(pos => {
    const surprise = selectRandom(questionsByDifficulty.surprise, 1)[0];
    questions[pos] = surprise;
  });
  
  // Shuffle answer order for each question
  questions.forEach(q => {
    q.answers = shuffleArray(q.answers);
  });
  
  // Ensure at least 1 Resolve AI question for Secret Employee detection
  const hasResolveAI = questions.some(q => q.category === 'resolve_ai');
  if (!hasResolveAI) {
    const resolveAIQuestions = availableQuestions.filter(
      q => q.category === 'resolve_ai'
    );
    if (resolveAIQuestions.length > 0) {
      const randomPos = Math.floor(Math.random() * 12);
      questions[randomPos] = selectRandom(resolveAIQuestions, 1)[0];
    }
  }
  
  return questions;
}
```

---

## 🎉 SOCIAL SHARING SYSTEM

### Share Templates

#### Twitter/X Template
```javascript
function generateTwitterShare(personality, score, rank) {
  const templates = {
    ADA_LOVELACE: `I just got a PERFECT SCORE on @ResolveAI's trivia game at #reInvent! 🎩

They say I'm Ada Lovelace - "The Original Algorithm Architect" 

Score: ${score.toLocaleString()}
Rank: #${rank}

Think you can beat me? Find them at Booth #712! 🎮`,

    SECRET_EMPLOYEE: `🚨 I just BROKE @ResolveAI's trivia game at #reInvent

Got flagged as a "Secret Employee" - they want to interview me now 😅

Maybe I know too much about AI agents... or maybe I should apply? 🤔

Booth #712 if you dare try!`,

    HOMER_SIMPSON: `D'oh! 🍩

I just scored ${score} on @ResolveAI's trivia at #reInvent...

They compared me to Homer Simpson. Can't argue with that logic.

At least I finished! Find them at Booth #712 and do better than me 😂`,
  };
  
  return templates[personality] || `I scored ${score} on @ResolveAI's AI Production trivia at #reInvent! Find them at Booth #712 🎮`;
}
```

#### LinkedIn Template
```javascript
function generateLinkedInShare(personality, score, rank) {
  return `Just tested my AI and Production Systems knowledge at AWS re:Invent with Resolve AI's trivia game.

Result: ${personality.displayName}
Score: ${score.toLocaleString()} points
Rank: #${rank} overall

${personality.linkedInBlurb}

If you're at re:Invent, check out Resolve AI at Booth #712. The game is actually addictive, and you might learn something!

#reInvent2025 #AI #DevOps #SRE #ProductionSystems`;
}
```

---

## 📊 SUCCESS METRICS

### Primary KPIs

**Engagement:**
- Total games played: Target 250+ during re:Invent
- Unique players: Target 200+
- Completion rate: Target 85%+
- Average game duration: 4-6 minutes
- Replay rate: Target 35%+

**Quality:**
- Social share rate: Target 50%+
- Demo bookings from game: Target 15%+
- "Secret Employee" triggers: 10-15 expected
- Player satisfaction (exit survey): Target 4.5/5

**Recruiting:**
- Interview conversations: Target 12+
- Resume collections: Target 20+
- Conversion to scheduled interviews: 60%+

---

## 🚀 IMPLEMENTATION ROADMAP

### Phase 1: Core Game (Week 1-2)
- [ ] Database schema with 100 questions
- [ ] Game engine and scoring logic
- [ ] Basic UI with welcome/question/end screens
- [ ] Timer and answer submission
- [ ] Leaderboard system

### Phase 2: Enhanced Features (Week 2-3)
- [ ] Dynamic difficulty / recovery questions
- [ ] Personality determination algorithm
- [ ] Rich personality profiles with images
- [ ] Social sharing functionality
- [ ] Secret Employee detection

### Phase 3: Polish (Week 3)
- [ ] All animations and transitions
- [ ] Confetti and visual feedback
- [ ] Sound effects (optional)
- [ ] Mobile responsiveness
- [ ] Performance optimization

### Phase 4: Testing (Week 3-4)
- [ ] Load testing (100+ concurrent users)
- [ ] Question validation (no errors)
- [ ] Personality trigger testing
- [ ] Recovery question flow testing
- [ ] Booth rehearsal with hardware

### Phase 5: Launch (Week 4)
- [ ] Deploy to production
- [ ] Configure monitoring
- [ ] Train booth staff
- [ ] Load all questions
- [ ] Go live at re:Invent! 🎉

---

## 📋 COMPLETE DOCUMENTATION SET

This enhanced system includes:

1. ✅ Static question bank (100 questions)
2. ✅ Dynamic difficulty with recovery
3. ✅ 20+ personality profiles with images
4. ✅ Secret Employee recruiting trigger
5. ✅ Elegant UI/UX specifications
6. ✅ Social sharing templates
7. ✅ Confetti and animations
8. ✅ Complete game flow
9. ✅ Implementation roadmap
10. ✅ Success metrics

**Next Steps:**
1. Review this enhanced system
2. Create complete 100-question JSON file
3. Design personality profile images
4. Begin development with Claude Code
5. Build the most addictive booth game ever! 🎮

---

**Ready to Build?** This system is designed to be:
- Addictive (multiple playthroughs)
- Memorable (personality profiles)
- Shareable (social templates)
- Educational (real learning)
- Recruiting tool (Secret Employee)
- Premium experience (elegant UX)

Let's make AWS re:Invent 2025 unforgettable! 🚀
