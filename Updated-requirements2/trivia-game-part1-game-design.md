# Resolve AI Trivia Game - Part 1: Game Design & Mechanics
## AWS re:Invent 2025 - Booth #712

**Document:** Part 1 of 4  
**Last Updated:** November 2025  
**Project:** Interactive Trivia Game for Large Touchscreen Display  
**Purpose:** Engage booth visitors, educate about AI for Production Systems, generate leads

---

## Table of Contents - Part 1
1. [Game Mechanics](#1-game-mechanics)
2. [User Flow](#2-user-flow)
3. [Leaderboard System](#3-leaderboard-system)
4. [Visual Design Requirements](#4-visual-design-requirements)

---

## 1. GAME MECHANICS

### 1.1 Question Flow (12 Questions per Session)

**Difficulty Progression:**
- **Q1-3:** Easy/Warm-up (15 sec timer each)
- **Q4-6:** Medium difficulty (12 sec timer each)
- **Q7-9:** Hard (15 sec timer each)
- **Q10-12:** Expert (20 sec timer each)
- **Surprise Questions:** 4 surprises randomly inserted at any position (10 sec timer each)
  - Replace questions at any difficulty level
  - Approximately 33% of total questions
  - Unpredictable timing for maximum engagement

### 1.2 Scoring System

**Base Points by Difficulty:**
- Easy: 100 points
- Medium: 150 points
- Hard: 250 points
- Expert: 400 points
- Surprise: 200 points

**Time Bonus:**
- Answer in first 33% of time remaining: +50 points
- Answer in first 66% of time remaining: +25 points
- After 66%: 0 bonus (still get base points if correct)

**Streak Multiplier:**
- 2 correct in a row: 2x multiplier
- 4 correct in a row: 3x multiplier
- 6+ correct in a row: 5x multiplier
- Multiplier applies to total points (base + time bonus)
- Streak resets on incorrect answer or timeout

**Example Calculation:**
```
Expert question (400 base) 
+ answered in 5 seconds (first 33% of 20 sec = +50 bonus)
= 450 points

If on 4-question streak: 450 × 3 = 1,350 points for that question
```

**Maximum Possible Score:** ~7,500 points (perfect game with all time bonuses and max streak)

### 1.3 Timer Mechanics

**Timer Duration by Question Type:**
- Easy questions: 15 seconds
- Medium questions: 12 seconds
- Hard questions: 15 seconds
- Expert questions: 20 seconds
- Surprise questions: 10 seconds

**Visual Timer Behavior:**
- Circular progress bar around question
- Color progression: Green → Yellow (50%) → Orange (25%) → Red (last 3 sec)
- Pulse animation in final 3 seconds
- Auto-advance if timer expires (counts as incorrect)
- No pause/resume functionality

**Time Bonus Calculation:**
```javascript
// Example logic
if (timeRemaining > timerDuration * 0.66) {
  timeBonus = 50;
} else if (timeRemaining > timerDuration * 0.33) {
  timeBonus = 25;
} else {
  timeBonus = 0;
}
```

---

## 2. USER FLOW

### 2.1 Welcome Screen

**Content Display:**
- **Title:** "Test Your AI & Production Systems IQ"
- **Subtitle:** "12 questions. Can you make the leaderboard?"
- **Current Leader Display:** "#1: [Name] from [Company] - [Score] points"
- **Estimated Time:** "4-6 minutes"

**Input Fields:**
- Full Name (required, text input)
- Work Email (required, validated format)
- Company (optional, auto-fill from email domain if possible)

**CTA Button:**
- Large "Start Game" button
- Disabled until valid inputs provided

**Validation Rules:**
- Email must match standard email regex
- Email domain check (warn if using Gmail/Yahoo/etc.)
- Same email can only play once per hour
- Check rate limit before starting

### 2.2 During Game

**Question Screen Layout:**
```
+--------------------------------------------------+
|  Question 3 of 12              Score: 1,250      |
|  🔥 3 in a row!                                  |
+--------------------------------------------------+
|                                                   |
|  [Timer - Circular Progress]                     |
|                                                   |
|  What distinguishes an AI agent from a simple    |
|  LLM chat interface?                             |
|                                                   |
|  [A] Agents have better grammar                  |
|  [B] Agents can take actions autonomously        |
|  [C] Agents are always more expensive            |
|  [D] Agents require quantum computing            |
|                                                   |
+--------------------------------------------------+
```

**Question Display Elements:**
- Question number indicator: "Question X of 12"
- Current score (live updating)
- Streak indicator (if 2+): "🔥 X in a row!"
- Timer (circular progress around or above question)
- Question text (large, centered, readable)
- 4 answer choices (large touch-friendly buttons, labeled A-D)
- Difficulty indicator (colored border around entire screen)

**Surprise Question Indicator:**
- Screen flash with rainbow/gold effect before question appears
- Sound effect: Record scratch or "Ding!" (optional)
- Text banner: "🎲 SURPRISE ROUND! 🎲"
- Purple/gold animated border
- 10-second timer (shorter than regular questions)

**Answer Selection:**
- Tap/click any answer button
- Button press triggers immediate feedback
- No changing answer once selected
- Disable all buttons during feedback period

### 2.3 Answer Feedback (2-second display)

**Correct Answer Display:**
```
✓ Correct! +450 points
⚡ Speed bonus! +50
🔥 4 in a row! 3× multiplier

Brief explanation: Agents can autonomously use tools 
and take actions beyond just generating text.
```

**Elements Shown:**
- Green screen flash/overlay
- Large checkmark animation
- Points earned breakdown
- Speed bonus if applicable
- Streak status and multiplier
- One-line explanation
- Auto-advance after 2 seconds

**Incorrect Answer Display:**
```
✗ Not quite!

Correct answer: B - Agents can take actions autonomously

Brief explanation: Agents use tools and execute tasks 
beyond text generation.
```

**Elements Shown:**
- Red screen flash/overlay
- X animation
- Show correct answer highlighted
- One-line explanation
- Streak resets (don't announce, just reset)
- Auto-advance after 2 seconds

**Progress Indicators During Game:**
- Score climbing animation when points added
- Streak counter appears at 2, grows at 4, 6+
- Question progress dots or bar at bottom
- Total time elapsed (optional, subtle)

### 2.4 End Screen

**Final Score Display:**
```
+--------------------------------------------------+
|                 FINAL SCORE                       |
|                   2,450                           |
|                                                   |
|  🏆 You're #7 on the leaderboard!                |
|                                                   |
|  Performance:                                     |
|  Questions correct: 9/12                         |
|  Longest streak: 4                               |
|  Surprise questions: 3/4                         |
|  Total time: 4m 23s                              |
+--------------------------------------------------+
```

**Leaderboard Position Feedback:**
- If Top 10: "🏆 You're on the leaderboard!"
- If Top 25: "So close! You're #[X]"
- If close to Top 10: "You were [X] points from #10!"
- Otherwise: "You scored better than [X]% of players!"

**Action Buttons:**
- **Primary CTA:** "Play Again" (large, prominent)
- **Secondary CTA:** "Book a Demo" (medium size)
- **QR Code:** For quick demo booking on phone
- **Social Share:** "Share Your Score" (optional)
  - Pre-filled text: "I scored [X] points at Resolve AI's booth! Can you beat it? #reInvent #AIforProduction"

**Show Top 10 Leaderboard:**
- Scrollable list if not in Top 10
- Highlight user's position if in Top 10
- Show their name with sparkle/highlight effect

---

## 3. LEADERBOARD SYSTEM

### 3.1 Display Format

**Main Leaderboard (Always Visible on Screen):**
```
+--------------------------------------------------+
|              🏆 LEADERBOARD 🏆                   |
+--------------------------------------------------+
| Rank | Name          | Company    | Score | 🔥  |
+--------------------------------------------------+
|  #1  | John Smith    | Datadog    | 3,250 | 8   |
|  #2  | Sarah Chen    | Snowflake  | 3,100 | 7   |
|  #3  | Mike Johnson  | Stripe     | 2,980 | 6   |
|  ...                                             |
+--------------------------------------------------+
```

**Columns:**
1. Rank (#1-10)
2. Name (first name + last initial if long)
3. Company
4. Score
5. Longest Streak (🔥 icon)
6. Badge (if daily/overall winner) - small icon

**Real-Time Updates:**
- Refresh every 5 seconds
- Celebration animation for new #1
- "New high score!" banner flash
- Smooth position transitions (animated)

### 3.2 Multiple Leaderboard Categories

**1. Overall Champion (Main Board)**
- Highest score across entire re:Invent
- Never resets during event
- Winner announced at end of re:Invent
- Grand prize awarded

**2. Daily Champions**
- Reset at midnight Pacific each day
- Winner announced each evening
- Badge: "Daily Winner - Dec [X]"
- Daily prize awarded

**3. Special Categories (Secondary Display/Rotation):**

**Speed Demon:**
- Fastest time with perfect score (12/12 correct)
- Tiebreaker: Higher total score

**Streak Master:**
- Longest single streak achieved
- Across all games played

**Surprise King/Queen:**
- Most surprise questions correct (out of 4 per game)
- Minimum 3 games played

**Company Rankings:**
- Average score by company
- Minimum 5 players from company
- Fun competitive element

### 3.3 Anti-Gaming Measures

**Rate Limiting:**
- 1 game per email per hour
- IP-based backup: 5 games per hour per IP
- Exponential backoff for suspicious activity

**Pattern Detection:**
- Flag identical answer patterns across games
- Flag impossibly fast correct answers (<1 second)
- Manual review for prize eligibility

**Email Validation:**
- Must be valid work email format
- Warn if using consumer domains (Gmail, Yahoo, etc.)
- Optional: Domain verification against known companies

**Prize Eligibility:**
- Must use work email
- Subject to manual review
- Must be present to claim daily prizes
- Grand prize requires photo ID verification

---

## 4. VISUAL DESIGN REQUIREMENTS

### 4.1 Screen Specifications

**Display Requirements:**
- Target: Large touchscreen display (55"+ recommended, 65" ideal)
- Orientation: Landscape (16:9 aspect ratio)
- Resolution: 1920×1080 minimum (4K/3840×2160 preferred)
- Touch targets: Minimum 100px × 100px for buttons
- Viewing distance: Optimized for 4-8 feet away

**Environment Considerations:**
- High ambient light (convention floor)
- Noisy background (audio optional)
- Multiple simultaneous viewers
- Quick glanceability for leaderboard

### 4.2 Color Palette

**Primary Branding:**
- Use Resolve AI brand colors for header/footer
- High contrast for readability

**Difficulty Indicators:**
- Easy: Green (#00C853)
- Medium: Yellow (#FFB300)
- Hard: Orange (#FF6D00)
- Expert: Red (#D32F2F)
- Surprise: Purple to Gold gradient (#9C27B0 → #FFD700)

**Feedback Colors:**
- Correct: Bright green (#00E676)
- Incorrect: Bright red (#FF1744)
- Neutral/UI: Dark gray (#424242)
- Background: White or very light gray (#FAFAFA)
- Text: Dark gray (#212121) for maximum contrast

**Timer Colors:**
- Start: Green (#4CAF50)
- Mid: Yellow (#FFC107)
- Warning: Orange (#FF9800)
- Critical: Red (#F44336) with pulse

### 4.3 Typography

**Font Choices:**
- Primary: Sans-serif (Inter, Roboto, or Source Sans Pro)
- Monospace: For code snippets if needed (Fira Code, JetBrains Mono)

**Font Sizes:**
- Question text: 48-60px (bold)
- Answer options: 32-40px (medium weight)
- Timer: 36-48px (bold)
- Score: 72px+ (bold, animated)
- Explanations: 28-32px (regular)
- Leaderboard: 24-32px (varying weights)

**Readability:**
- Line height: 1.4-1.6
- Letter spacing: Slight increase for large text
- High contrast ratios (WCAG AAA preferred)
- No small or light text
- Maximum 60-70 characters per line for readability

### 4.4 Layout & Spacing

**Question Screen:**
```
+--------------------------------------------------+
|  HEADER: Logo | Question X/12 | Score | Streak   |
+--------------------------------------------------+
|                                                   |
|              [Circular Timer]                     |
|                                                   |
|  [Large Question Text - Center Aligned]          |
|  [2-3 lines maximum]                             |
|                                                   |
|  [A]  [Answer Option 1 - Large Touch Button]     |
|                                                   |
|  [B]  [Answer Option 2 - Large Touch Button]     |
|                                                   |
|  [C]  [Answer Option 3 - Large Touch Button]     |
|                                                   |
|  [D]  [Answer Option 4 - Large Touch Button]     |
|                                                   |
+--------------------------------------------------+
|  FOOTER: Difficulty indicator | Progress dots    |
+--------------------------------------------------+
```

**Spacing Guidelines:**
- Minimum 20px padding around screen edges
- 30-40px between answer buttons
- 60px between question and answers
- Ample white space for clarity

### 4.5 Animation Specifications

**Essential Animations:**
- Smooth transitions between questions (300ms ease-out)
- Score counting up (500ms with easing)
- Timer rotation (smooth, not jerky)
- Button press feedback (scale 0.95, 100ms)
- Correct/incorrect flash (full screen overlay, 200ms fade)
- Streak appearance (slide in from side, 300ms)
- Leaderboard position changes (smooth repositioning, 500ms)

**Celebration Animations:**
- New #1 on leaderboard: Confetti + trophy animation
- Perfect streak: Fire/lightning effects
- High score: Star burst effect
- New personal best: Glow effect

**Performance:**
- 60fps minimum for all animations
- No janky or stuttering transitions
- Preload animation assets
- Hardware acceleration where possible

### 4.6 Interactive Elements

**Button Design:**
- Large touch targets (minimum 100px height)
- Clear hover/active states (even for touch)
- Tactile feedback (visual scale/color change)
- Disabled state during answer processing
- High contrast borders and backgrounds

**Answer Buttons:**
- Show A/B/C/D labels clearly
- Full-width or large enough for long text
- Highlight on selection
- Correct answer: Green border + checkmark
- Incorrect answer: Red flash, correct answer shown in green

**Touch Optimization:**
- No double-tap required
- Immediate response to touch
- No accidental touches (adequate spacing)
- Works with gloves if possible

---

## PSYCHOLOGY & ENGAGEMENT

### Why This Works

**Variable Reward Schedule:**
- Surprise questions appear unpredictably (intermittent reinforcement)
- Point multipliers create "near miss" excitement
- Leaderboard position creates social competition

**Loss Aversion:**
- Show "You were 50 points from the leaderboard!" 
- "Your streak ended at 5! Can you beat it?"

**Progress Indicators:**
- "Question 3 of 10" creates commitment
- Streak counters create mini-goals
- Score climbing feels rewarding

**Social Proof:**
- Live leaderboard updates: "John from Datadog just scored 2,450!"
- Company rankings: "Datadog is crushing it today!"

**Curiosity Gaps:**
- "You've seen 6 of 65 total questions - play again to discover more!"
- Different surprise questions each time
- Easter eggs in explanations

---

## QUICK REFERENCE - PART 1

### Key Numbers
- **12 questions** per game
- **4 surprise questions** per game (~33%)
- **10-20 seconds** timer per question
- **~7,500 points** maximum possible score
- **4-6 minutes** average game duration
- **1 play per email per hour** rate limit
- **Top 10** displayed on leaderboard

### Question Distribution per Game
- Q1-3: Easy (15 sec)
- Q4-6: Medium (12 sec)
- Q7-9: Hard (15 sec)
- Q10-12: Expert (20 sec)
- Plus 4 surprises (10 sec) randomly placed

### Scoring Quick Reference
- Easy: 100 base
- Medium: 150 base
- Hard: 250 base
- Expert: 400 base
- Surprise: 200 base
- Time bonus: +50 (fast) or +25 (medium)
- Streak: 2x at 2, 3x at 4, 5x at 6+

---

**Next:** Part 2 - Question Bank (all 65 questions)

**Document:** Part 1 of 4  
**Version:** 1.0  
**Date:** November 20, 2025
