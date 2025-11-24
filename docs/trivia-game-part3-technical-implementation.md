# Resolve AI Trivia Game - Part 3: Technical Implementation
## AWS re:Invent 2025 - Booth #712

**Document:** Part 3 of 4  
**Last Updated:** November 2025  

---

## Table of Contents - Part 3
1. [Technology Stack](#technology-stack)
2. [Database Schema](#database-schema)
3. [API Endpoints](#api-endpoints)
4. [Frontend Implementation](#frontend-implementation)
5. [Security & Performance](#security--performance)

---

## TECHNOLOGY STACK

### Recommended Stack

**Frontend:**
- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand or Redux Toolkit
- **Animation:** Framer Motion
- **Build Tool:** Vite

**Backend:**
- **Runtime:** Node.js 18+
- **Framework:** Express or Fastify
- **Database:** PostgreSQL 15+
- **Caching:** Redis 7+
- **Real-time:** Socket.io for leaderboard updates

**Infrastructure:**
- **Hosting:** AWS, GCP, or local booth server
- **Monitoring:** Basic error logging
- **Backup:** Automated hourly database backups

---

## DATABASE SCHEMA

```sql
-- Players table
CREATE TABLE players (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_played_at TIMESTAMP,
    total_games INTEGER DEFAULT 0,
    best_score INTEGER DEFAULT 0,
    CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

CREATE INDEX idx_players_email ON players(email);
CREATE INDEX idx_players_last_played ON players(last_played_at);

-- Games table
CREATE TABLE games (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    player_id UUID REFERENCES players(id) ON DELETE CASCADE,
    score INTEGER NOT NULL,
    questions_correct INTEGER NOT NULL CHECK (questions_correct >= 0 AND questions_correct <= 12),
    longest_streak INTEGER NOT NULL DEFAULT 0,
    surprise_correct INTEGER NOT NULL CHECK (surprise_correct >= 0 AND surprise_correct <= 4),
    total_time_seconds INTEGER NOT NULL,
    questions_shown JSONB NOT NULL,
    answers_given JSONB,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_valid BOOLEAN DEFAULT true,
    CONSTRAINT score_positive CHECK (score >= 0)
);

CREATE INDEX idx_games_player ON games(player_id);
CREATE INDEX idx_games_score ON games(score DESC);
CREATE INDEX idx_games_completed ON games(completed_at DESC);
CREATE INDEX idx_games_valid ON games(is_valid) WHERE is_valid = true;

-- Questions table
CREATE TABLE questions (
    id VARCHAR(50) PRIMARY KEY,
    difficulty VARCHAR(20) NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard', 'expert', 'surprise')),
    category VARCHAR(50) NOT NULL,
    question_text TEXT NOT NULL,
    answers JSONB NOT NULL,
    explanation TEXT NOT NULL,
    timer_seconds INTEGER NOT NULL CHECK (timer_seconds IN (10, 12, 15, 20)),
    times_shown INTEGER DEFAULT 0,
    times_correct INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_questions_difficulty ON questions(difficulty);

-- Leaderboard views
CREATE MATERIALIZED VIEW leaderboard_overall AS
SELECT 
    p.name,
    p.company,
    g.score,
    g.longest_streak,
    g.completed_at,
    ROW_NUMBER() OVER (ORDER BY g.score DESC, g.completed_at ASC) as rank
FROM games g
JOIN players p ON g.player_id = p.id
WHERE g.is_valid = true
ORDER BY g.score DESC
LIMIT 100;

-- Refresh every 10 seconds
REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_overall;
```

---

## API ENDPOINTS

### Base URL: `/api/v1`

### POST /game/start
Initialize new game session

**Request:**
```json
{
  "name": "John Smith",
  "email": "john@company.com",
  "company": "Datadog"
}
```

**Response:**
```json
{
  "game_id": "uuid",
  "player_id": "uuid",
  "questions": [
    {
      "id": "easy_01",
      "difficulty": "easy",
      "question": "What distinguishes...",
      "answers": [...],
      "timer_seconds": 15,
      "position": 1
    }
  ]
}
```

**Errors:**
- `400`: Invalid email
- `429`: Rate limited
- `500`: Server error

---

### POST /game/answer
Submit answer for question

**Request:**
```json
{
  "game_id": "uuid",
  "question_id": "easy_01",
  "answer_id": "b",
  "time_remaining": 12.5
}
```

**Response:**
```json
{
  "correct": true,
  "points_earned": 450,
  "breakdown": {
    "base_points": 100,
    "time_bonus": 50,
    "multiplier": 3,
    "streak": 4
  },
  "explanation": "Agents can autonomously...",
  "correct_answer_id": "b",
  "current_score": 1850,
  "current_streak": 5
}
```

---

### POST /game/complete
Finalize game and get results

**Request:**
```json
{
  "game_id": "uuid"
}
```

**Response:**
```json
{
  "final_score": 4250,
  "rank": 7,
  "total_players": 143,
  "performance": {
    "questions_correct": 10,
    "total_questions": 12,
    "longest_streak": 6,
    "surprise_correct": 3,
    "total_time": "4m 32s"
  },
  "leaderboard_position": {
    "overall": 7,
    "daily": 3
  },
  "is_top_10": true
}
```

---

### GET /leaderboard/:type
Fetch leaderboard data

**Parameters:**
- `type`: "overall" | "daily" | "speed" | "streak"
- Query: `?limit=10`

**Response:**
```json
{
  "leaderboard": [
    {
      "rank": 1,
      "name": "John Smith",
      "company": "Datadog",
      "score": 5420,
      "longest_streak": 8,
      "completed_at": "2024-12-01T14:23:45Z"
    }
  ],
  "last_updated": "2024-12-01T14:25:00Z",
  "total_players": 143
}
```

---

### GET /stats
Get overall game statistics

**Response:**
```json
{
  "total_games": 287,
  "total_players": 143,
  "avg_score": 2340,
  "current_leader": {
    "name": "John Smith",
    "score": 5420
  },
  "games_today": 56
}
```

---

## FRONTEND IMPLEMENTATION

### State Management

```typescript
interface GameState {
  // Player info
  playerId: string | null;
  playerName: string;
  playerEmail: string;
  playerCompany: string;
  
  // Game state
  gameId: string | null;
  currentQuestionIndex: number;
  questions: Question[];
  answers: AnswerRecord[];
  
  // Score tracking
  currentScore: number;
  currentStreak: number;
  longestStreak: number;
  
  // UI state
  isLoading: boolean;
  showingFeedback: boolean;
  gameComplete: boolean;
  
  // Leaderboard
  leaderboard: LeaderboardEntry[];
  playerRank: number | null;
}
```

### Component Structure
```
App
├── WelcomeScreen
│   ├── EmailInput
│   ├── NameInput
│   └── StartButton
├── GameScreen
│   ├── GameHeader
│   │   ├── ProgressIndicator
│   │   ├── ScoreDisplay
│   │   └── StreakIndicator
│   ├── QuestionDisplay
│   │   ├── Timer
│   │   ├── QuestionText
│   │   └── AnswerButtons (x4)
│   └── FeedbackOverlay
├── EndScreen
│   ├── FinalScore
│   ├── PerformanceBreakdown
│   ├── LeaderboardPosition
│   └── ActionButtons
└── LeaderboardDisplay
    └── LeaderboardEntry (x10)
```

---

## SCORING LOGIC

```javascript
function calculateScore(question, timeRemaining, currentStreak, isCorrect) {
  if (!isCorrect) {
    return {
      pointsEarned: 0,
      breakdown: { base: 0, timeBonus: 0, multiplier: 1, streak: 0 },
      newStreak: 0
    };
  }
  
  // Base points
  const basePoints = {
    'easy': 100,
    'medium': 150,
    'hard': 250,
    'expert': 400,
    'surprise': 200
  }[question.difficulty];
  
  // Time bonus
  const timePercentage = timeRemaining / question.timer_seconds;
  let timeBonus = 0;
  if (timePercentage > 0.66) timeBonus = 50;
  else if (timePercentage > 0.33) timeBonus = 25;
  
  // Streak multiplier
  const newStreak = currentStreak + 1;
  let multiplier = 1;
  if (newStreak >= 6) multiplier = 5;
  else if (newStreak >= 4) multiplier = 3;
  else if (newStreak >= 2) multiplier = 2;
  
  const pointsEarned = (basePoints + timeBonus) * multiplier;
  
  return {
    pointsEarned,
    breakdown: { base: basePoints, timeBonus, multiplier, streak: newStreak },
    newStreak
  };
}
```

---

## QUESTION RANDOMIZATION

```javascript
function generateGameQuestions(allQuestions, userHistory = []) {
  const questions = [];
  
  // Filter by difficulty and exclude recent
  const easyPool = allQuestions.filter(q => 
    q.difficulty === 'easy' && !userHistory.includes(q.id)
  );
  const mediumPool = allQuestions.filter(q => 
    q.difficulty === 'medium' && !userHistory.includes(q.id)
  );
  const hardPool = allQuestions.filter(q => 
    q.difficulty === 'hard' && !userHistory.includes(q.id)
  );
  const expertPool = allQuestions.filter(q => 
    q.difficulty === 'expert' && !userHistory.includes(q.id)
  );
  const surprisePool = allQuestions.filter(q => 
    q.difficulty === 'surprise' && !userHistory.includes(q.id)
  );
  
  // Select questions
  questions.push(...selectRandom(easyPool, 3));
  questions.push(...selectRandom(mediumPool, 3));
  questions.push(...selectRandom(hardPool, 3));
  questions.push(...selectRandom(expertPool, 3));
  
  // Replace 4 random positions with surprises
  const surprisePositions = selectRandom([0,1,2,3,4,5,6,7,8,9,10,11], 4);
  surprisePositions.forEach(pos => {
    questions[pos] = selectRandom(surprisePool, 1)[0];
  });
  
  // Shuffle answer orders for each question
  questions.forEach(q => {
    q.answers = shuffleArray(q.answers);
  });
  
  return questions;
}

function selectRandom(array, count) {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
```

---

## SECURITY & PERFORMANCE

### Input Validation
```javascript
// Email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
  if (!emailRegex.test(email)) {
    throw new ValidationError('Invalid email format');
  }
  
  // Warn about consumer emails
  const consumerDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
  const domain = email.split('@')[1].toLowerCase();
  if (consumerDomains.includes(domain)) {
    return { valid: true, warning: 'Please use work email if possible' };
  }
  
  return { valid: true };
}
```

### Rate Limiting
```javascript
async function checkRateLimit(email, ipAddress) {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  
  // Check email-based limit
  const emailAttempts = await db.query(
    'SELECT COUNT(*) FROM games g JOIN players p ON g.player_id = p.id ' +
    'WHERE p.email = $1 AND g.completed_at > $2',
    [email, oneHourAgo]
  );
  
  if (emailAttempts.rows[0].count > 0) {
    throw new RateLimitError('You can play once per hour');
  }
  
  // Check IP-based limit
  const ipAttempts = await redis.get(`rate_limit:ip:${ipAddress}`);
  if (ipAttempts && parseInt(ipAttempts) >= 5) {
    throw new RateLimitError('Too many attempts from this location');
  }
  
  return true;
}
```

### Performance Optimization

**Frontend:**
- Code splitting for screens
- Lazy load leaderboard
- React.memo for expensive components
- Preload next question during feedback

**Backend:**
- Database connection pooling
- Redis caching for leaderboards (10s TTL)
- Index all foreign keys
- Materialized views for leaderboards
- Gzip compression

**Database:**
```sql
-- Optimize leaderboard queries
CREATE INDEX idx_games_leaderboard ON games(score DESC, completed_at ASC) 
  WHERE is_valid = true;

-- Refresh materialized views efficiently
REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_overall;
```

---

## REAL-TIME UPDATES

**WebSocket for Leaderboard:**
```javascript
// Client subscribes
const eventSource = new EventSource('/api/v1/leaderboard/stream');

eventSource.addEventListener('leaderboard_update', (event) => {
  const data = JSON.parse(event.data);
  updateLeaderboard(data.leaderboard);
  
  if (data.new_high_score) {
    showCelebration(data.leader);
  }
});
```

---

## DEPLOYMENT CHECKLIST

**Pre-Launch:**
- [ ] All 65 questions in database
- [ ] Database indices created
- [ ] Redis configured and running
- [ ] Environment variables set
- [ ] SSL certificates installed
- [ ] Backup system tested
- [ ] Monitoring configured

**Post-Launch:**
- [ ] Monitor error rates
- [ ] Watch database performance
- [ ] Check leaderboard updates
- [ ] Verify rate limiting
- [ ] Monitor network stability

---

**Next:** Part 4 - Operations & Prizes  
**Previous:** Part 2 - Question Bank

**Document:** Part 3 of 4  
**Version:** 1.0  
**Date:** November 20, 2025
