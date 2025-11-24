# Resolve AI Trivia Game - Part 4: Operations & Prizes
## AWS re:Invent 2025 - Booth #712

**Document:** Part 4 of 4  
**Last Updated:** November 2025  

---

## Table of Contents - Part 4
1. [Prize Structure](#prize-structure)
2. [Booth Setup](#booth-setup)
3. [Analytics & Tracking](#analytics--tracking)
4. [Testing Requirements](#testing-requirements)
5. [Launch Day Checklist](#launch-day-checklist)

---

## 1. PRIZE STRUCTURE

### 1.1 Grand Prize (Overall Champion)

**Winner:** Highest score across entire re:Invent week

**Prize Package:**
- Resolve AI premium swag bundle
  - Hoodie
  - Premium t-shirt
  - Full sticker pack
  - Water bottle
- Tech prize valued at $200-300
  - AirPods Pro, OR
  - Mechanical keyboard, OR
  - Similar premium tech item
- Certificate of achievement
- Photo with Resolve AI team
- Feature on Resolve AI social media

**Announcement:** End of re:Invent, December 5th

### 1.2 Daily Winners (4 Days)

**Winners:** Top score each day (Dec 2-5)

**Prize Package:**
- Resolve AI hoodie OR premium t-shirt
- Full sticker pack
- Certificate

**Announcement:** Each evening at booth

### 1.3 Special Category Winners

**Speed Demon (Fastest Perfect Score):**
- Must score 12/12 correct
- Lowest total time wins
- **Prize:** Resolve AI water bottle + premium stickers

**Streak Master (Longest Streak):**
- Longest single streak across all games
- **Prize:** Resolve AI notebook + pen set

**Surprise King/Queen (Most Surprise Questions Correct):**
- Must play minimum 3 games
- Best surprise question performance
- **Prize:** Mystery swag box

**Company Champion:**
- Highest average score per company (min 5 players)
- **Prize:** Resolve AI swag for entire team

### 1.4 Participation Rewards

**Everyone Who Plays:**
- QR code for demo booking
- Follow-up email with game results
- Entry into prize pool

**Top 25% Performers:**
- Extra sticker pack
- Special "Top Performer" sticker

**Perfect Score (12/12):**
- Special "Perfect Score" enamel pin
- Immediate recognition at booth

### 1.5 Prize Eligibility & Distribution

**Eligibility:**
- Must use valid work email
- Must be present to claim daily prizes
- Grand prize: Can ship if winner has left
- Subject to manual review for suspicious activity

**Distribution:**
- On-site prizes: Collect at booth
- Shipped prizes: Contact info collected during game
- Photos: Optional but encouraged for marketing

---

## 2. BOOTH SETUP

### 2.1 Hardware Requirements

**Display:**
- 55" or larger touchscreen monitor
- 4K resolution preferred (1920×1080 minimum)
- Commercial-grade for reliability
- Adjustable stand for optimal height
- Anti-glare coating

**Computer:**
- Intel i7 or Apple M2/M3 (or better)
- 16GB RAM minimum
- SSD storage (256GB+)
- Dedicated graphics (optional)
- Modern browser support

**Network:**
- Dedicated wired ethernet (preferred)
- Backup: 4G/5G mobile hotspot
- Minimum: 10 Mbps down, 5 Mbps up

**Power:**
- Surge protector
- UPS (uninterruptible power supply) recommended
- Backup power bank for hotspot

**Backup Equipment:**
- Spare tablet with game loaded
- Backup internet connection
- Extra power cables

### 2.2 Physical Layout

```
+------------------+
|   LEADERBOARD    |  
|     DISPLAY      |  <- Always visible
+------------------+
        ↑
    [Monitor]
        ↓
    [Computer]
        ↓
   [Power/Network]

Queue Area →  [Stanchions] → [Play Area] → [Demo Station]
```

**Placement:**
- Screen visible from main aisle
- Height: Center 42-48" from floor
- Adequate queue space (6-8 people)
- Clear sightlines to leaderboard

**Signage:**
- "Test Your AI Knowledge"
- "Play to Win Prizes"
- Current #1 score display
- Demo booking QR code

### 2.3 Staffing

**Game Monitor (1 person during peak):**
- Explain rules quickly (30 seconds max)
- Troubleshoot technical issues
- Reset game between players
- Encourage demo bookings
- Take photos of daily winners
- Manage queue

**Training Required:**
- Game rules and scoring
- Basic troubleshooting
- Restart procedures
- Demo booking process
- Prize eligibility rules
- Emergency procedures

### 2.4 Contingency Plans

**Technical Failures:**
- **Display failure:** Switch to backup tablet
- **Network failure:** Switch to mobile hotspot
- **Power failure:** Use UPS, then tablet
- **Software crash:** Restart procedure ready
- **Database issue:** Restore from last backup

**High Traffic:**
- Implement 5-minute time limits
- Staff manages queue and expectations
- Consider multiple stations if possible

**Prize Shortages:**
- Order 150% of expected participants
- Have backup prizes available
- Digital prizes (discount codes)

---

## 3. ANALYTICS & TRACKING

### 3.1 Key Metrics

**Engagement:**
- Total games played
- Unique players
- Completion rate (% who finish)
- Average time per game
- Peak play times
- Replay rate

**Performance:**
- Average score
- Score distribution
- Average questions correct
- Most missed questions
- Average streak length

**Question Analytics:**
- Times each shown
- Correct answer rate per question
- Average time to answer
- Difficulty calibration

**Conversion:**
- Demo bookings from QR codes
- Email collection rate
- Company distribution
- Follow-up engagement

### 3.2 Real-Time Dashboard

```
+------------------------------------------+
| RESOLVE AI TRIVIA - LIVE STATS          |
+------------------------------------------+
| Games Today: 87        Total: 312       |
| Players Now: 2         Waiting: 3       |
| Avg Score: 2,450       High: 5,420      |
| Completion: 94%        Avg Time: 4m 18s |
+------------------------------------------+
| Top Companies:                           |
| 1. Datadog (avg 2,850) - 15 players     |
| 2. Snowflake (avg 2,720) - 12 players   |
| 3. Stripe (avg 2,680) - 10 players      |
+------------------------------------------+
| Demo Bookings: 42 (13.5% conversion)    |
+------------------------------------------+
```

### 3.3 Data Export

**Daily Reports (Automated):**
- CSV export of all games
- Leaderboard snapshots
- Question performance
- Company rankings
- Demo conversions

**Post-Event Analysis:**
- Total participation metrics
- ROI calculations
- Top performing questions
- Difficulty calibration report
- Recommendations for future events

---

## 4. TESTING REQUIREMENTS

### 4.1 Functional Testing

**Core Gameplay:**
- [ ] Welcome screen validates correctly
- [ ] Rate limiting works (can't play twice/hour)
- [ ] All 65 questions render correctly
- [ ] Timer counts down accurately
- [ ] Answer selection records correctly
- [ ] Scoring calculates with all bonuses
- [ ] Streak tracks properly
- [ ] Feedback shows appropriately
- [ ] End screen displays accurate results

**Edge Cases:**
- [ ] Timer expiration auto-advances
- [ ] Rapid clicking prevented
- [ ] Network interruption handling
- [ ] Browser refresh handling
- [ ] Long names/emails handled
- [ ] Special characters sanitized
- [ ] Perfect score calculated
- [ ] Zero score handled

**Leaderboard:**
- [ ] Updates in real-time (<10 sec lag)
- [ ] Ranks correctly by score
- [ ] Ties handled by timestamp
- [ ] Daily resets at midnight
- [ ] Company rankings accurate
- [ ] Top 10 displays correctly

### 4.2 Performance Testing

**Load Testing:**
- [ ] 10 concurrent users: <500ms response
- [ ] 50 concurrent users: <1000ms response
- [ ] 100 concurrent users: system stable
- [ ] Database handles 1000+ games/day
- [ ] Leaderboard updates smoothly

**Stress Testing:**
- [ ] Rapid game starts: no race conditions
- [ ] Simultaneous submissions handled
- [ ] No memory leaks after 100+ games
- [ ] Database connections don't exhaust

### 4.3 Content Validation

**Question Review:**
- [ ] All 65 questions reviewed by 2+ people
- [ ] Technical accuracy verified
- [ ] No typos or grammar errors
- [ ] Explanations clear and concise
- [ ] Difficulty feels appropriate
- [ ] Surprise questions are fun
- [ ] No offensive content
- [ ] Timer durations feel right

**Answer Shuffling:**
- [ ] Correct answer appears in all positions
- [ ] No patterns detectable
- [ ] Same question shows different order

### 4.4 User Experience Testing

**Beta Testing (10+ team members):**
- [ ] Each plays 2-3 games
- [ ] Feedback on:
  - Clarity of instructions
  - Question difficulty curve
  - Timer pressure
  - Visual clarity on large screen
  - Touch responsiveness
  - Overall fun factor

**Adjustments:**
- [ ] Calibrate difficulty if needed
- [ ] Adjust timer durations
- [ ] Clarify confusing questions
- [ ] Fix UX friction points

### 4.5 Hardware Testing

**On Actual Booth Hardware:**
- [ ] Runs smoothly on target display
- [ ] Touch responsiveness good
- [ ] Brightness adequate
- [ ] Network stable
- [ ] All animations smooth (60fps)
- [ ] Audio works (if using)
- [ ] Backup system tested
- [ ] Failover works

---

## 5. LAUNCH DAY CHECKLIST

### 5.1 T-24 Hours

**Technical:**
- [ ] All 65 questions loaded
- [ ] Leaderboards reset
- [ ] Database backed up
- [ ] Redis cache cleared
- [ ] Rate limiting verified
- [ ] Admin dashboard accessible
- [ ] Monitoring alerts configured

**Hardware:**
- [ ] Display tested on booth
- [ ] Computer installed
- [ ] Network verified (primary + backup)
- [ ] Backup tablet charged
- [ ] All cables secured
- [ ] Power surge protector in place
- [ ] UPS tested

**Content & Prizes:**
- [ ] Prize inventory counted
- [ ] Prize station organized
- [ ] QR codes printed
- [ ] Signage installed
- [ ] Demo booking tested

**Team:**
- [ ] Staff trained on rules
- [ ] Troubleshooting guide distributed
- [ ] Technical contact list ready
- [ ] Game monitor schedule set
- [ ] Prize distribution reviewed

### 5.2 Morning of Day 1

**System Checks (60 min before doors):**
- [ ] Power on all equipment
- [ ] Verify internet
- [ ] Test complete game flow
- [ ] Leaderboard displaying
- [ ] Admin dashboard working
- [ ] Test backup systems
- [ ] Database connection confirmed
- [ ] Clear test data

**Physical Setup:**
- [ ] Screen height adjusted
- [ ] Viewing angle optimized
- [ ] Queue stanchions placed
- [ ] Signage visible from aisle
- [ ] Prize station stocked
- [ ] QR codes accessible
- [ ] Brochures ready

**Final Tests:**
- [ ] Play one complete game
- [ ] Verify scoring
- [ ] Check leaderboard update
- [ ] Test rate limiting
- [ ] Touch responsiveness
- [ ] Volume check

### 5.3 During Event - Hourly Checks

**Every Hour:**
- [ ] System health dashboard
- [ ] Monitor queue length
- [ ] Leaderboard updating
- [ ] Network stability
- [ ] Review error logs
- [ ] Wipe touchscreen
- [ ] Restock prizes

**Every 4 Hours:**
- [ ] Database backup verification
- [ ] Clear browser cache if needed
- [ ] Restart app if memory climbing
- [ ] Check storage space
- [ ] Review analytics

### 5.4 Daily Wrap-Up

**End of Day:**
- [ ] Announce daily winner
- [ ] Export leaderboard snapshot
- [ ] Back up all data
- [ ] Review technical issues
- [ ] Note improvements
- [ ] Secure prizes
- [ ] Plan for next day

**Daily Winner Process:**
- [ ] Verify score (check for cheating)
- [ ] Contact winner
- [ ] Take photo with team
- [ ] Present prize and certificate
- [ ] Post on social media
- [ ] Add "Daily Winner" badge

### 5.5 Emergency Procedures

**System Crash:**
1. Restart application
2. If fails, restart computer
3. If still fails, switch to backup tablet
4. Contact technical support
5. Restore from last backup if needed

**Network Failure:**
1. Switch to backup internet
2. Test connection
3. If both fail, run offline mode
4. Contact venue IT

**Display Failure:**
1. Check power and connections
2. If hardware failure, switch to tablet
3. Contact support for replacement

**Overwhelming Queue:**
1. Implement 5-min time limit
2. Staff engages people in line
3. Offer "play later" QR code
4. Consider demo booking instead

**Power Outage:**
1. UPS keeps system running
2. Save all game states
3. Switch to tablet on battery
4. Wait for power restoration

**Prize Shortage:**
1. Switch to backup prizes
2. Offer digital rewards
3. Promise to mail prizes
4. Coordinate with booth lead

### 5.6 Post-Event Tasks

**Immediate (Same Day):**
- [ ] Export all game data
- [ ] Back up complete database
- [ ] Announce overall winner
- [ ] Contact grand prize winner
- [ ] Pack up equipment safely

**Within 48 Hours:**
- [ ] Send follow-up emails to participants
- [ ] Share leaderboard on social
- [ ] Compile analytics report
- [ ] Gather team feedback
- [ ] Document lessons learned

**Within 1 Week:**
- [ ] Ship prizes to winners
- [ ] Complete ROI analysis
- [ ] Full technical debrief
- [ ] Archive all data
- [ ] Update playbook for future events

---

## APPENDIX: QUICK REFERENCE

### Key Numbers Summary
- **12 questions** per game
- **65 total questions** (15/15/15/15/35 by difficulty)
- **4 surprise questions** per game
- **10-20 seconds** timer
- **~7,500 points** max score
- **4-6 minutes** game duration
- **1 play/hour** rate limit

### Scoring Cheat Sheet
```
Easy: 100     Medium: 150     Hard: 250     Expert: 400     Surprise: 200
Time Bonus: +50 (fast) or +25 (medium)
Streak: 2x at 2 correct, 3x at 4, 5x at 6+
```

### Emergency Contacts
- Technical Lead: [Contact]
- Booth Manager: [Contact]
- Emergency Tech Support: [Contact]
- Prize Coordinator: [Contact]

### Critical Files
1. Part 1: Game Design & Mechanics
2. Part 2: Question Bank (65 questions)
3. Part 3: Technical Implementation
4. Part 4: Operations & Prizes (this document)

---

**Previous:** Part 3 - Technical Implementation  
**Complete:** All 4 parts delivered

**Document:** Part 4 of 4  
**Version:** 1.0  
**Date:** November 20, 2025

---

## END OF REQUIREMENTS

**Total Documentation:**
- Part 1: Game Design & Mechanics (~550 lines)
- Part 2: Question Bank (~450 lines with structure)
- Part 3: Technical Implementation (~550 lines)
- Part 4: Operations & Prizes (~450 lines)

**Ready for:** Claude Code implementation, development team handoff, or booth deployment planning.
