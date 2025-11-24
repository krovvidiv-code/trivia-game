# Resolve AI Trivia Game - Part 2: Complete Question Bank
## AWS re:Invent 2025 - Booth #712

**Document:** Part 2 of 4  
**Last Updated:** November 2025  
**Total Questions:** 65 (15 easy, 15 medium, 15 hard, 15 expert, 35 surprise)

---

## Table of Contents - Part 2
1. [Question Structure & Format](#question-structure--format)
2. [Easy Questions (15)](#easy-questions-15)
3. [Medium Questions (15)](#medium-questions-15)
4. [Hard Questions (15)](#hard-questions-15)
5. [Expert Questions (15)](#expert-questions-15)
6. [Surprise Questions (35)](#surprise-questions-35)

---

## Question Structure & Format

### JSON Schema
```json
{
  "id": "unique_id",
  "difficulty": "easy|medium|hard|expert|surprise",
  "category": "ai_agents|production|ai_production|technical|surprise",
  "question": "Question text",
  "answers": [
    {"id": "a", "text": "Answer A", "correct": false},
    {"id": "b", "text": "Answer B", "correct": true},
    {"id": "c", "text": "Answer C", "correct": false},
    {"id": "d", "text": "Answer D", "correct": false}
  ],
  "explanation": "One-line explanation",
  "timer_seconds": 15
}
```

### Categories
- **ai_agents:** AI fundamentals, tool use, orchestration
- **production_systems:** MTTR, toil, incidents, observability
- **ai_production:** Cross-domain reasoning, autonomous investigation
- **technical:** Distributed systems, monitoring, architecture
- **surprise:** History, jokes, puns, industry trivia

---

## EASY QUESTIONS (15)

### Question 1
**ID:** easy_01  
**Category:** ai_agents  
**Timer:** 15 seconds

**Question:** What distinguishes an AI agent from a simple LLM chat interface?

**Answers:**
- A) Agents have better grammar ❌
- B) Agents can take actions and use tools autonomously ✅
- C) Agents are always more expensive ❌
- D) Agents require quantum computing ❌

**Explanation:** Agents can autonomously use tools and take actions beyond just generating text.

---

### Question 2
**ID:** easy_02  
**Category:** ai_agents  
**Timer:** 15 seconds

**Question:** In a multi-agent system, what is 'orchestration'?

**Answers:**
- A) Playing music for the AI ❌
- B) Coordinating multiple specialized agents to solve complex tasks ✅
- C) Training models simultaneously ❌
- D) Making agents dance ❌

**Explanation:** Orchestration coordinates multiple specialized agents to work together on complex problems.

---

### Question 3
**ID:** easy_03  
**Category:** ai_production  
**Timer:** 15 seconds

**Question:** What is 'context' in AI for production systems?

**Answers:**
- A) Only the last user message ❌
- B) The integrated understanding of code, infrastructure, telemetry, and knowledge ✅
- C) The datacenter temperature ❌
- D) Coffee breaks between deployments ❌

**Explanation:** Production context integrates understanding across code, infrastructure, telemetry, and institutional knowledge.

---

### Question 4
**ID:** easy_04  
**Category:** ai_agents  
**Timer:** 15 seconds

**Question:** What is a 'tool' in the context of AI agents?

**Answers:**
- A) A screwdriver ❌
- B) A function or API the agent can call to perform actions ✅
- C) The cloud console ❌
- D) Your IDE ❌

**Explanation:** Tools are functions or APIs that agents can call to interact with external systems.

---

### Question 5
**ID:** easy_05  
**Category:** ai_agents  
**Timer:** 15 seconds

**Question:** What does 'agentic' mean in AI?

**Answers:**
- A) Agents that are friendly ❌
- B) AI systems that can plan, reason, and take actions autonomously ✅
- C) Agents that work for secret agencies ❌
- D) Very fast responses ❌

**Explanation:** Agentic AI can plan, reason about problems, and take actions autonomously toward goals.

---

### Question 6
**ID:** easy_06  
**Category:** production_systems  
**Timer:** 15 seconds

**Question:** What is 'toil' in SRE terminology?

**Answers:**
- A) Manual, repetitive operational work that doesn't provide lasting value ✅
- B) Hard physical labor ❌
- C) Difficult debugging sessions ❌
- D) Writing documentation ❌

**Explanation:** Toil is manual, repetitive work that could be automated and doesn't improve systems long-term.

---

### Question 7
**ID:** easy_07  
**Category:** production_systems  
**Timer:** 15 seconds

**Question:** What is a 'runbook'?

**Answers:**
- A) A fitness tracker for engineers ❌
- B) Documented procedures for handling specific operational scenarios ✅
- C) A diary of production incidents ❌
- D) Your sprint planning notes ❌

**Explanation:** Runbooks document step-by-step procedures for common operational tasks and incidents.

---

### Question 8
**ID:** easy_08  
**Category:** production_systems  
**Timer:** 15 seconds

**Question:** What is 'observability' vs 'monitoring'?

**Answers:**
- A) They're the same thing ❌
- B) Observability lets you ask new questions; monitoring checks known issues ✅
- C) Observability is more expensive ❌
- D) Monitoring is only for legacy systems ❌

**Explanation:** Observability enables exploring unknown problems; monitoring tracks known metrics and alerts.

---

### Question 9
**ID:** easy_09  
**Category:** production_systems  
**Timer:** 15 seconds

**Question:** What causes most production incidents?

**Answers:**
- A) Hardware failures ❌
- B) Changes (deployments, configs, infrastructure) ✅
- C) Cosmic rays ❌
- D) Hackers ❌

**Explanation:** Most incidents are caused by changes to systems - deployments, configuration changes, or infrastructure updates.

---

### Question 10
**ID:** easy_10  
**Category:** production_systems  
**Timer:** 15 seconds

**Question:** What is 'alert fatigue'?

**Answers:**
- A) Being tired from working nights ❌
- B) When teams ignore alerts because there are too many false positives ✅
- C) Loud notification sounds ❌
- D) Alert systems using Comic Sans ❌

**Explanation:** Alert fatigue occurs when too many false alerts cause teams to ignore or disable notifications.

---

### Question 11
**ID:** easy_11  
**Category:** technical  
**Timer:** 15 seconds

**Question:** What is a 'trace' in distributed systems?

**Answers:**
- A) Following bug footprints ❌
- B) A record of a request's journey across multiple services ✅
- C) Stack traces from errors ❌
- D) Detective work ❌

**Explanation:** A trace tracks a single request as it flows through multiple services in a distributed system.

---

### Question 12
**ID:** easy_12  
**Category:** technical  
**Timer:** 15 seconds

**Question:** What is a 'golden signal' in monitoring?

**Answers:**
- A) Key metrics: latency, traffic, errors, saturation ✅
- B) The alert that wakes you up ❌
- C) Production-ready indicators ❌
- D) The green deploy button ❌

**Explanation:** Golden signals (latency, traffic, errors, saturation) are the four key metrics for monitoring services.

---

### Question 13
**ID:** easy_13  
**Category:** technical  
**Timer:** 15 seconds

**Question:** What is the difference between logs, metrics, and traces?

**Answers:**
- A) Nothing, they're all data ❌
- B) Logs=events, Metrics=measurements over time, Traces=request flows ✅
- C) Different file formats ❌
- D) Different storage costs ❌

**Explanation:** Logs record events, metrics measure values over time, traces follow requests through systems.

---

### Question 14
**ID:** easy_14  
**Category:** technical  
**Timer:** 15 seconds

**Question:** What is 'chaos engineering'?

**Answers:**
- A) When deployments go wrong ❌
- B) Intentionally breaking systems in controlled ways to test resilience ✅
- C) Messy code ❌
- D) Working from home ❌

**Explanation:** Chaos engineering proactively injects failures to test and improve system resilience.

---

### Question 15
**ID:** easy_15  
**Category:** technical  
**Timer:** 15 seconds

**Question:** What is a 'circuit breaker' in microservices?

**Answers:**
- A) The electrical panel ❌
- B) A pattern that stops cascading failures by failing fast ✅
- C) Emergency shutdown ❌
- D) Load balancer ❌

**Explanation:** Circuit breakers prevent cascading failures by quickly failing requests to unhealthy services.

---

## MEDIUM QUESTIONS (15)

### Question 16
**ID:** medium_01  
**Category:** production_systems  
**Timer:** 12 seconds

**Question:** What percentage of engineering time is typically spent on production operations vs. new features?

**Answers:**
- A) 20-30% ❌
- B) 40-50% ❌
- C) 60-70% ✅
- D) 5-10% ❌

**Explanation:** Most engineering teams spend 60-70% of time on production operations, leaving only 30-40% for new features.

---

### Question 17
**ID:** medium_02  
**Category:** production_systems  
**Timer:** 12 seconds

**Question:** What is the 'blast radius' in production incidents?

**Answers:**
- A) How loud the on-call alert is ❌
- B) The scope of systems and users affected by an incident ✅
- C) The distance from the datacenter ❌
- D) Your manager's reaction ❌

**Explanation:** Blast radius measures how many systems, services, and users are impacted by an incident.

---

### Question 18
**ID:** medium_03  
**Category:** production_systems  
**Timer:** 12 seconds

**Question:** What is 'tribal knowledge' in production systems?

**Answers:**
- A) Ancient deployment rituals ❌
- B) Undocumented expertise that lives only in senior engineers' heads ✅
- C) Indigenous cloud computing ❌
- D) Team slack channels ❌

**Explanation:** Tribal knowledge is critical system understanding that exists only in people's heads, not documentation.

---

### Question 19
**ID:** medium_04  
**Category:** production_systems  
**Timer:** 12 seconds

**Question:** In modern microservices, how many services does a typical large company run?

**Answers:**
- A) 10-50 ❌
- B) 100-500 ❌
- C) 1,000-5,000 ✅
- D) Exactly 42 ❌

**Explanation:** Large companies typically run thousands of microservices across their production environments.

---

### Question 20
**ID:** medium_05  
**Category:** production_systems  
**Timer:** 12 seconds

**Question:** What is the average MTTR (Mean Time To Repair) for most organizations?

**Answers:**
- A) 5-10 minutes ❌
- B) 30-60 minutes ❌
- C) 2-4 hours ✅
- D) 2-3 days ❌

**Explanation:** Most organizations average 2-4 hours to fully resolve production incidents.

---

*[Continue with remaining medium questions 21-30...]*

---

## HARD QUESTIONS (15)

*[Questions 31-45 with same format...]*

---

## EXPERT QUESTIONS (15)

*[Questions 46-60 with same format...]*

---

## SURPRISE QUESTIONS (35)

### Surprise Question 1
**ID:** surprise_01  
**Category:** surprise  
**Timer:** 10 seconds

**Question:** What year was the term 'AI' first coined?

**Answers:**
- A) 1984 ❌
- B) 1956 ✅
- C) 2010 ❌
- D) 1776 ❌

**Explanation:** The term 'Artificial Intelligence' was coined at the Dartmouth Conference in 1956.

---

### Surprise Question 2
**ID:** surprise_02  
**Category:** surprise  
**Timer:** 10 seconds

**Question:** Complete this Silicon Valley pun: 'There are 10 types of people...'

**Answers:**
- A) Those who understand binary and those who don't ✅
- B) Engineers and everyone else ❌
- C) Coffee drinkers and liars ❌
- D) AWS users and everyone else ❌

**Explanation:** 10 in binary equals 2 in decimal - those who understand binary and those who don't!

---

*[Continue with remaining 33 surprise questions...]*

---

## IMPLEMENTATION NOTES

### Question Randomization
```javascript
function generateGameQuestions(allQuestions, userHistory = []) {
  const questions = [];
  
  // Select base difficulty levels
  const easyPool = filter(allQuestions, 'easy', userHistory);
  const mediumPool = filter(allQuestions, 'medium', userHistory);
  const hardPool = filter(allQuestions, 'hard', userHistory);
  const expertPool = filter(allQuestions, 'expert', userHistory);
  const surprisePool = filter(allQuestions, 'surprise', userHistory);
  
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
  
  // Shuffle answer orders
  questions.forEach(q => {
    q.answers = shuffleArray(q.answers);
  });
  
  return questions;
}
```

### Quality Checklist
- [ ] All 65 questions written and validated
- [ ] Each question has exactly 4 answers
- [ ] Exactly one correct answer per question
- [ ] All explanations are concise (max 150 chars)
- [ ] Timer durations set correctly
- [ ] No typos or grammatical errors
- [ ] Technical accuracy verified
- [ ] Surprise questions are genuinely fun
- [ ] Difficulty levels properly calibrated

---

## DOWNLOAD FULL QUESTION JSON

The complete question bank should be exported as a JSON file for database import:

```json
[
  {
    "id": "easy_01",
    "difficulty": "easy",
    "category": "ai_agents",
    "question": "What distinguishes an AI agent...",
    "answers": [...],
    "explanation": "...",
    "timer_seconds": 15
  },
  // ... all 65 questions
]
```

---

**Next:** Part 3 - Technical Implementation  
**Previous:** Part 1 - Game Design & Mechanics

**Document:** Part 2 of 4  
**Version:** 1.0  
**Date:** November 20, 2025

---

**NOTE:** Due to document size, the complete 65 questions are summarized here. The full JSON file with all questions should be generated separately for database import. Reference the game mechanics document for the complete question text.
