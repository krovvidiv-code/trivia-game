# RESOLVE AI TRIVIA GAME - VISUAL DESIGN MOCKUPS
## UI/UX Reference Guide for Developers

**Version:** 2.0  
**Last Updated:** November 21, 2025  
**Purpose:** Visual reference for implementing elegant UI

---

## 🎨 COLOR SYSTEM

### Resolve AI Brand Colors
```
Primary Green:     #657220 (Olive)   ███████ - Main brand color
Neon Yellow:       #D9F400 (Lime)    ███████ - Accent/highlights
Off White:         #F8F8F5 (Cream)   ███████ - Backgrounds
True Black:        #222222 (Rich)    ███████ - Text/emphasis
```

### Feedback Colors
```
Correct:           #657220 (Green)   ███████ - Brand green
Wrong:             #8F9500 (Muted)   ███████ - Subdued yellow-green
Neutral:           #D9F400 (Yellow)  ███████ - Attention/surprise
```

### Difficulty Colors
```
Easy:              #D9F400 (Lime)    ███████ - Bright, inviting
Medium:            #A8B800 (Yellow)  ███████ - Mid-tone
Hard:              #657220 (Olive)   ███████ - Serious
Expert:            #4A5418 (Dark)    ███████ - Intense
Surprise:          #D9F400 (Lime)    ███████ - Fun accent
```

### Extended Palette
```
Background:        #F8F8F5 ███████ (Off white)
Surface:           #FFFFFF ███████ (Pure white cards)
Border Light:      #E8E8E3 ███████ (Subtle borders)
Border Dark:       #657220 ███████ (Emphasis borders)
Text Primary:      #222222 ███████ (Body text)
Text Secondary:    #657220 ███████ (Muted text)
Text Inverse:      #F8F8F5 ███████ (On dark backgrounds)
```

---

## 📱 SCREEN LAYOUTS

### 1. WELCOME SCREEN

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│         TEST YOUR AI & PRODUCTION KNOWLEDGE          │
│              RESOLVE AI TRIVIA CHALLENGE             │
│                                                      │
│         ┌────────────────────────────────┐          │
│         │   12 Questions                 │          │
│         │   4-6 Minutes                  │          │
│         │   Win Prizes at Booth #712     │          │
│         └────────────────────────────────┘          │
│                                                      │
│         ┌─────────────────────────────────┐         │
│         │ Name: [John Smith              ]│         │
│         └─────────────────────────────────┘         │
│                                                      │
│         ┌─────────────────────────────────┐         │
│         │ Email: [john@company.com       ]│         │
│         └─────────────────────────────────┘         │
│                                                      │
│         ┌─────────────────────────────────┐         │
│         │ Company: [Datadog              ]│         │
│         └─────────────────────────────────┘         │
│                                                      │
│              ┌─────────────────┐                    │
│              │   START GAME   │                     │
│              └─────────────────┘                    │
│                                                      │
│        Today's Leader: Ada L. • 8,450 points        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Colors:**
- Background: #F8F8F5 (off-white)
- Title: #222222 (black) - Young Serif
- Subtitle: #657220 (olive green) - Inter
- Input borders: #E8E8E3 (light)
- Input focus: #657220 (olive)
- Button background: #D9F400 (neon yellow)
- Button text: #222222 (black)
- Leaderboard text: #657220 (olive)

**Typography:**
- Title: Young Serif, 48px
- Inputs: Inter, 16px
- Button: Inter SemiBold, 16px

**Key Features:**
- Clean, minimal design
- Elegant serif title
- No unnecessary emojis
- Focus on clarity
- Brand colors throughout

---

### 2. QUESTION SCREEN - DEFAULT STATE

```
┌──────────────────────────────────────────────────────┐
│ Q 3/12                Score: 2,450          00:15    │
│ Streak: 2x                                           │
├──────────────────────────────────────────────────────┤
│                                                      │
│                   DIFFICULTY: MEDIUM                 │
│                                                      │
│  What percentage of engineering time is typically   │
│  spent on operational toil versus new feature       │
│  development?                                        │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  A) 30-40% toil / 60-70% features         │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  B) 50-50 split between both              │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  C) 60-70% toil / 30-40% features         │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  D) 80-90% toil / 10-20% features         │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│          Hint: Think about incident time             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Colors:**
- Background: #F8F8F5
- Header bar: #FFFFFF with #E8E8E3 border
- Progress/Score: #222222 - Inter
- Streak: #657220 - Inter SemiBold
- Timer: #222222 (normal), #657220 when <5sec
- Difficulty badge: #A8B800 background, #222222 text
- Question text: #222222 - Inter Regular
- Answer cards: #FFFFFF background, #E8E8E3 border
- Answer text: #222222 - Inter
- Hint text: #657220 - Inter

**Typography:**
- Question: Inter Regular, 18px
- Answers: Inter Regular, 16px
- Difficulty: Inter SemiBold, 14px, uppercase
- Hint: Inter Regular, 14px

**Interaction States:**

**HOVER:**
```
  ┌────────────────────────────────────────────┐
  │  C) 60-70% toil / 30-40% features    ▲    │
  └────────────────────────────────────────────┘
     Border: #657220 (2px)
     Shadow: subtle
     Background: #FAFAF8
```

**SELECTED:**
```
  ┌════════════════════════════════════════════┐
  ║  C) 60-70% toil / 30-40% features         ║
  └════════════════════════════════════════════┘
     Border: #657220 (3px)
     Background: #F8F8F5
```

---

### 3. CORRECT ANSWER FEEDBACK

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              CORRECT! +450 POINTS                    │
│                                                      │
│   ┌──────────────────────────────────────────┐     │
│   │  Base Points:          +150              │     │
│   │  Speed Bonus:           +50              │     │
│   │  Streak Multiplier:      x3              │     │
│   │  ━━━━━━━━━━━━━━━━━━━━━━━━━━              │     │
│   │  Total Earned:         +450              │     │
│   └──────────────────────────────────────────┘     │
│                                                      │
│   Most teams spend 60-70% of time on toil,          │
│   leaving only 30-40% for innovation. This is       │
│   exactly why AI agents are so critical!            │
│                                                      │
│              [NEXT QUESTION]                         │
│                  Auto in 3s                          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Colors:**
- Background: #F8F8F5
- "CORRECT!" text: #657220 - Young Serif, 36px
- Score breakdown box: #FFFFFF with #657220 border
- Numbers: #222222 - Inter Bold
- Divider: #D9F400
- Explanation: #222222 - Inter Regular, 16px
- Button: #D9F400 background, #222222 text
- Subtle accent: Light #657220 tint on background

**Animation Sequence:**
1. "CORRECT!" scales in (Young Serif elegance)
2. Points count up smoothly
3. Subtle celebration (no excessive confetti)
4. Green accent pulse from #657220
5. Auto-advance after 3 seconds

**No Emojis:** Clean, professional feedback

---

### 4. WRONG ANSWER + RECOVERY

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│                  NOT QUITE                           │
│                                                      │
│   "Even Ada Lovelace had to debug!"                  │
│                                                      │
│   The correct answer was C) 60-70% toil              │
│                                                      │
│   Most engineering teams spend the majority          │
│   of their time firefighting and maintaining         │
│   systems rather than building new features.         │
│                                                      │
│   ┌────────────────────────────────────────┐        │
│   │ BONUS RECOVERY QUESTION                │        │
│   │                                        │        │
│   │ Let's try something easier:            │        │
│   │                                        │        │
│   │ What does MTTR stand for?             │        │
│   │                                        │        │
│   │ ○ Mean Time To Repair                 │        │
│   │ ○ Most Terrible Tech Rant             │        │
│   │ ○ Many Tickets To Review              │        │
│   │ ○ Maximum Test Time Required          │        │
│   └────────────────────────────────────────┘        │
│                                                      │
│   Answer correctly to preserve your streak           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Colors:**
- Background: #F8F8F5
- "NOT QUITE" text: #657220 - Young Serif, 36px
- Quote: #657220 - Inter Italic, 18px
- Explanation: #222222 - Inter Regular
- Recovery box: #FFFFFF with #D9F400 border (accent)
- "BONUS" text: #657220 - Inter SemiBold
- Options: #222222 - Inter Regular
- Hint text: #657220 - Inter

**Animation:**
- Gentle fade in (no harsh red)
- Explanation appears smoothly
- Recovery question slides up
- Professional, encouraging tone

**No Harsh Emojis:** Just clean, supportive text

---

### 5. SURPRISE QUESTION INDICATOR

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│               SURPRISE QUESTION                      │
│                                                      │
│           This one's just for fun...                 │
│         Get it right for bonus points!               │
│                                                      │
│                QUICK: 10 seconds                     │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Colors:**
- Background: #D9F400 (neon yellow accent)
- Text: #222222 - Mix of Young Serif and Inter
- Clean, energetic feel

Then transitions to:

```
┌──────────────────────────────────────────────────────┐
│ Q 7/12            Score: 4,250            00:10      │
│ Streak: 5x (maintained even if wrong)               │
├──────────────────────────────────────────────────────┤
│                                                      │
│                 SURPRISE: TECH HISTORY               │
│                                                      │
│  Complete this programmer's truth:                   │
│  "There are 10 types of people in the world..."     │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  A) Those who understand binary and        │    │
│  │     those who don't                        │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  B) Engineers and everyone else            │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  C) Coffee drinkers and liars              │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  D) Those who've deployed on Friday        │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Colors:**
- Surprise badge: #D9F400 background, #222222 text
- All other elements: Standard brand colors
- Fun but professional

---

### 6. END SCREEN - PERSONALITY REVEAL

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              GAME COMPLETE! 🎉                       │
│                                                      │
│  ╔═══════════════════════════════════════════════╗  │
│  ║                                               ║  │
│  ║            [Image: Ada Lovelace]             ║  │
│  ║          Portrait with code flowing          ║  │
│  ║                                               ║  │
│  ╚═══════════════════════════════════════════════╝  │
│                                                      │
│           🎩 YOU ARE ADA LOVELACE                    │
│       "The Original Algorithm Architect"             │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  Final Score:         18,450               │    │
│  │  Questions Correct:   12/12 (PERFECT!)     │    │
│  │  Longest Streak:      12                   │    │
│  │  Average Time:        8.2 seconds          │    │
│  │  Rank:                #1 Overall           │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Just like Ada wrote the first algorithm before     │
│  computers existed, you've mastered AI and          │
│  production systems ahead of the curve.              │
│                                                      │
│  🎯 Ada Fact: In 1843, she envisioned computers     │
│  creating music and art - 180 years early!          │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐               │
│  │ Share Twitter│  │Share LinkedIn│                │
│  └──────────────┘  └──────────────┘               │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐               │
│  │  PLAY AGAIN │  │  BOOK DEMO   │                │
│  └──────────────┘  └──────────────┘               │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

### 7. SECRET EMPLOYEE ALERT

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│           🚨 RECRUITING ALERT! 🚨                    │
│                                                      │
│  ╔═══════════════════════════════════════════════╗  │
│  ║                                               ║  │
│  ║      [Image: Spy with Magnifying Glass]      ║  │
│  ║        Resolve AI Logo in Background         ║  │
│  ║                                               ║  │
│  ╚═══════════════════════════════════════════════╝  │
│                                                      │
│         🎯 YOU ARE A SECRET EMPLOYEE?!               │
│              "You Know Too Much..."                  │
│                                                      │
│  You answered EVERY Resolve AI question correctly!   │
│                                                      │
│  Either you:                                         │
│  a) Currently work here                              │
│  b) Stalk our blog religiously                       │
│  c) Are exactly who we want to hire                  │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │  ⚠️  IMMEDIATE ACTION REQUIRED              │    │
│  │                                             │    │
│  │  Please approach Booth #712 and ask for:   │    │
│  │  • Spiros (CEO)                             │    │
│  │  • Mayank (CTO)                             │    │
│  │  • Bharath (Engineering)                    │    │
│  │                                             │    │
│  │  We'd like to chat about opportunities.    │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│       ┌──────────────────────────────┐              │
│       │  SCHEDULE INTERVIEW NOW     │              │
│       └──────────────────────────────┘              │
│                                                      │
│  P.S. If you already work here: Nice job!           │
│       Go claim your prize! 🎁                        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Booth Staff Alert:**
```
┌──────────────────────────────────┐
│ 🚨 SECRET EMPLOYEE DETECTED 🚨   │
├──────────────────────────────────┤
│ Name:    John Smith              │
│ Email:   john@competitor.com     │
│ Company: Datadog                 │
│ Score:   12,450                  │
│                                  │
│ Action: Bring engineering team   │
│ Status: HIGH PRIORITY LEAD       │
│                                  │
│ [ACKNOWLEDGE]                    │
└──────────────────────────────────┘
```

---

## 🎬 ANIMATION SPECIFICATIONS

### Button States

```
DEFAULT:
┌──────────────┐
│  START GAME │
└──────────────┘
Background: Gradient indigo→purple
Shadow: 0 4px 6px rgba(0,0,0,0.1)

HOVER:
┌──────────────┐
│  START GAME │  ↑ Lifts up
└──────────────┘
Transform: scale(1.05)
Shadow: 0 8px 16px rgba(0,0,0,0.2)
Duration: 200ms
Cursor: pointer

ACTIVE (PRESSED):
┌──────────────┐
│  START GAME │  ↓ Presses down
└──────────────┘
Transform: scale(0.98)
Duration: 100ms
```

### Confetti Patterns

```
CORRECT ANSWER:
    *  .  *   .
  .  *  .  *  .
 *  .  *  .  *
.  *  .  *  .

Particles: 50
Spread: 60 degrees
Origin: { y: 0.8 }
Colors: Green shades
Duration: 2 seconds

PERFECT SCORE:
  * . * . * . * . *
 . * . * . * . * .
* . * . * . * . * 
 . * . * . * . * .

Particles: 200
Continuous for 3 seconds
Both sides of screen
Colors: Gold, orange, red
Spring physics
```

### Score Counter

```
Animation: Count up

2,000 → 2,450

Frames:
2,000
2,050  (50ms)
2,100  (100ms)
2,150  (150ms)
...
2,450  (450ms)

With each increment:
- Number scales 1 → 1.1 → 1
- Color flashes green
- Optional "ding" sound
```

### Timer Animation

```
NORMAL (>5 seconds):
  ⏱️ 00:12
  Color: Gray
  No animation

WARNING (<5 seconds):
  ⏱️ 00:04
  Color: Red pulsing
  Glow effect
  Scale: 1 → 1.1 → 1 (repeat)

EXPIRED:
  ⏱️ 00:00
  Flash red 3x
  Auto-submit
```

---

## 📏 SPACING SYSTEM

### 8px Grid System

```
Micro:   8px   (0.5rem)  - Between related items
Small:   16px  (1rem)    - Between components
Medium:  24px  (1.5rem)  - Between sections
Large:   32px  (2rem)    - Between major sections
XLarge:  48px  (3rem)    - Screen padding
```

### Component Spacing

```
Question Card:
┌───────────────────────────────┐
│ ← 32px padding all sides   → │
│                               │
│ Question text                 │
│                               │
│ ↓ 24px gap                    │
│                               │
│ Answer A                      │
│ ↓ 16px gap                    │
│ Answer B                      │
│ ↓ 16px gap                    │
│ Answer C                      │
│ ↓ 16px gap                    │
│ Answer D                      │
│                               │
└───────────────────────────────┘
```

---

## 🔤 TYPOGRAPHY SCALE

### Font Families
```
Display/Headings: 'Young Serif', serif
Body/UI:          'Inter', sans-serif
Code/Mono:        'JetBrains Mono', monospace
```

### Headings (Young Serif)
```
Display (Game Title):
Font: 'Young Serif', serif
Size: 48px (3rem)
Weight: 400 (Regular - Young Serif only has Regular)
Letter-spacing: -0.01em
Line-height: 1.1
Example: TEST YOUR AI KNOWLEDGE

H1 (Section Titles):
Font: 'Young Serif', serif
Size: 36px (2.25rem)
Weight: 400
Letter-spacing: -0.01em
Line-height: 1.2
Example: CORRECT! +450 POINTS

H2 (Subsections):
Font: 'Young Serif', serif
Size: 28px (1.75rem)
Weight: 400
Line-height: 1.3
Example: Your Personality Profile

H3 (Labels):
Font: 'Inter', sans-serif
Size: 18px (1.125rem)
Weight: 600 (SemiBold)
Letter-spacing: -0.01em
Example: DIFFICULTY: MEDIUM
```

### Body Text (Inter)
```
Large Body:
Font: 'Inter', sans-serif
Size: 18px (1.125rem)
Weight: 400 (Regular)
Line-height: 1.6
Example: Question text

Medium Body:
Font: 'Inter', sans-serif
Size: 16px (1rem)
Weight: 400 (Regular)
Line-height: 1.5
Example: Answer options

Small Body:
Font: 'Inter', sans-serif
Size: 14px (0.875rem)
Weight: 400 (Regular)
Line-height: 1.5
Example: Hints, explanations

Button Text:
Font: 'Inter', sans-serif
Size: 16px (1rem)
Weight: 600 (SemiBold)
Letter-spacing: 0.01em
Example: START GAME
```

### Special
```
Score Display:
Font: 'Inter', sans-serif
Size: 40px (2.5rem)
Weight: 700 (Bold)
Font-variant-numeric: tabular-nums
Example: 18,450

Timer:
Font: 'Inter', sans-serif
Size: 24px (1.5rem)
Weight: 600 (SemiBold)
Font-variant-numeric: tabular-nums
Example: 00:15

Monospace (for code):
Font: 'JetBrains Mono', monospace
Size: 14px
Weight: 400
Example: console.log("Hello")
```

---

## 🎯 RESPONSIVE BREAKPOINTS

### Desktop (Primary Target)
```
Width: 1920px (55" touchscreen)
Height: 1080px
Layout: Centered, generous whitespace
Font scale: 1.0
```

### Tablet
```
Width: 768px - 1024px
Layout: Centered, moderate spacing
Font scale: 0.9
Touch targets: 48px minimum
```

### Mobile (Backup/Testing)
```
Width: 375px - 767px
Layout: Stacked, compact
Font scale: 0.85
Touch targets: 48px minimum
```

---

## ✨ MICRO-INTERACTIONS

### Hover Effects
```
Cards:
- Lift: translateY(-4px)
- Shadow grows
- Border color change
- Duration: 200ms
- Easing: ease-out

Buttons:
- Scale: 1.05
- Shadow intensifies
- Gradient shift
- Duration: 200ms
```

### Click Effects
```
Press:
- Scale: 0.98
- Duration: 100ms
- Haptic feedback (mobile)

Release:
- Spring back to normal
- Optional ripple effect
```

### Loading States
```
Spinner:
  ⟳
Rotation: 360° continuous
Duration: 1000ms
Easing: linear
```

---

## 🎨 DESIGN TOKENS

```css
:root {
  /* Resolve AI Brand Colors */
  --color-primary: #657220;        /* Olive green */
  --color-accent: #D9F400;         /* Neon yellow */
  --color-background: #F8F8F5;     /* Off white */
  --color-text: #222222;           /* Rich black */
  
  /* Semantic Colors */
  --color-success: #657220;        /* Brand green */
  --color-neutral: #8F9500;        /* Muted yellow-green */
  --color-highlight: #D9F400;      /* Bright accent */
  
  /* Surface Colors */
  --surface-primary: #F8F8F5;      /* Main background */
  --surface-secondary: #FFFFFF;     /* Cards, elevated */
  --surface-tertiary: #FAFAF8;     /* Subtle variation */
  
  /* Border Colors */
  --border-light: #E8E8E3;         /* Subtle borders */
  --border-medium: #D0D0C8;        /* Medium emphasis */
  --border-strong: #657220;        /* Brand emphasis */
  --border-accent: #D9F400;        /* Attention */
  
  /* Text Colors */
  --text-primary: #222222;         /* Body text */
  --text-secondary: #657220;       /* Muted text */
  --text-tertiary: #8F9500;        /* Less emphasis */
  --text-inverse: #F8F8F5;         /* On dark */
  
  /* Spacing (8px grid) */
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  
  /* Border Radius */
  --radius-sm: 0.25rem;  /* 4px - subtle */
  --radius-md: 0.5rem;   /* 8px - standard */
  --radius-lg: 0.75rem;  /* 12px - cards */
  --radius-xl: 1rem;     /* 16px - prominent */
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(101, 114, 32, 0.05);
  --shadow-md: 0 4px 6px rgba(101, 114, 32, 0.08);
  --shadow-lg: 0 10px 15px rgba(101, 114, 32, 0.1);
  --shadow-xl: 0 20px 25px rgba(101, 114, 32, 0.12);
  
  /* Transitions */
  --transition-fast: 100ms ease-out;
  --transition-base: 200ms ease-out;
  --transition-slow: 300ms ease-out;
  
  /* Typography */
  --font-display: 'Young Serif', serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Z-index */
  --z-base: 0;
  --z-dropdown: 1000;
  --z-modal: 2000;
  --z-toast: 3000;
}
```

### Usage Examples

```css
/* Button - Primary */
.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-text);
  font-family: var(--font-body);
  font-weight: 600;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
}

.btn-primary:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* Card */
.card {
  background-color: var(--surface-secondary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
}

/* Heading */
h1 {
  font-family: var(--font-display);
  color: var(--text-primary);
  font-size: 2.25rem;
  line-height: 1.2;
}

/* Body Text */
p {
  font-family: var(--font-body);
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.6;
}
```

---

## 📱 ACCESSIBILITY

### Focus States
```
:focus {
  outline: 3px solid #6366F1;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 3px solid #6366F1;
  outline-offset: 2px;
}
```

### Color Contrast
```
All text: WCAG AA compliant (4.5:1)
Large text: WCAG AA compliant (3:1)
Interactive elements: Clear focus indicators
```

### Keyboard Navigation
```
Tab: Move to next element
Shift+Tab: Move to previous
Enter/Space: Activate button
Escape: Close modals
Arrow keys: Navigate lists
```

---

## 🎯 PERFORMANCE TARGETS

### Animations
- 60fps consistently
- No jank or stutter
- GPU-accelerated transforms
- Will-change hints for animations

### Loading
- Initial load: <2 seconds
- Time to interactive: <3 seconds
- Images: Lazy loaded
- Fonts: Preloaded

### Interactions
- Click response: <100ms
- Page transitions: <300ms
- API calls: <500ms
- Leaderboard updates: <1 second

---

## 🎉 FINISHING TOUCHES

### Easter Eggs
1. **Konami Code:** Unlock secret theme
2. **Triple-click logo:** Confetti explosion
3. **Type "debug" on welcome:** Show system info

### Delight Moments
1. **First question:** Extra animation
2. **Streak of 5:** Special celebration
3. **New high score:** Fireworks
4. **Perfect game:** Epic reveal

---

**USE THIS GUIDE TO BUILD A PREMIUM EXPERIENCE!** 🎨

Every pixel matters. Every animation counts. Every interaction should feel satisfying.

This isn't just a game - it's a brand experience that people will remember and share.

**Make it beautiful. Make it smooth. Make it unforgettable.** ✨

---

**END OF VISUAL DESIGN GUIDE**

**Version:** 2.0  
**Last Updated:** November 21, 2025  
**Status:** ✅ Complete  
**Purpose:** Developer UI/UX reference
