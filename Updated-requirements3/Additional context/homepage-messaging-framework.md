# Resolve AI Homepage Messaging Framework

**Version:** November 2025  
**Status:** Approved Core Messaging  
**Purpose:** Reference document for all homepage copywriting, design, and content creation

---

## Overview

Resolve AI is positioned as **AI for Production Systems** - a new category that goes beyond coding assistants (code only), observability tools (data only), and AI SRE (incidents only) to work across code, infrastructure, and telemetry for incidents, optimization, and development.

**Target Audience Primary:** Engineering Leadership (VPs/Directors of Engineering)  
**Target Audience Secondary:** Application Engineers, Platform Engineers, SREs

---

## Hero Section

### Title
AI for Production Systems

### Subtitle
Resolve works across code, infrastructure, telemetry, and knowledge to resolve incidents, optimize costs, and accelerate development.

### Call-to-Action
- **Primary:** Book a Demo
- **Secondary:** Watch Demo

### Design Notes
- Keep hero section clean and value-forward
- Visual should immediately convey scope (code + infra + tooling)
- No negative framing in hero - lead with capability

---

## Section 2: Problem Build-Up → Solution Reveal

### Section Title
Why production systems need AI

### Purpose
This section uses progressive visual storytelling to build recognition of the problem before revealing Resolve as the solution. Each frame builds on the previous one visually.

### Frame 1: Scale of Problem
**Headline:** Engineers spend 70% of their time working with production

**Visual:** Two circles - small "Coding" circle, massive "Production" circle

**Purpose:** Establish that production work dominates engineering time

---

### Frame 2: Complexity
**Headline:** Production is complex and always changing

**Copy:** Hundreds of services across dozens of teams. Complex infrastructure with databases, messaging, orchestration. Low-level tools for logs, metrics, dashboards, CI/CD, and more.

**Visual:** Inside the "Production" circle, show three clusters:
- **Code:** GitHub, GitLab
- **Infra:** AWS, Azure, GCP, Kubernetes
- **Tooling:** Datadog, PagerDuty, Grafana, Sentry

**Purpose:** Show the three domains that need to work together

---

### Frame 3: Fragmentation
**Headline:** Different teams manage different pieces

**Visual:** Above the production system, add six team boxes with connecting lines:
- Application Engineers
- Platform Engineers
- SREs
- IT Ops
- Security Engineers
- Support Engineers

**Purpose:** Show organizational fragmentation - no single team owns the whole picture

---

### Frame 4: The Real Problem
**Headline:** Working with production requires connecting dots across code, infrastructure, and telemetry

**Copy:** Your senior engineers have this expertise. The rest of your team spends months building it. Most time is spent sharing context through runbooks, meetings, and messaging.

**Visual:** Add Notion/Atlassian (runbooks), Zoom/Google Meet (meetings), Slack/Teams (messaging) as connective tissue between teams. Highlight/pulse the connection lines to show context-sharing burden.

**Purpose:** Reveal the root cause - cross-domain expertise gap and context-sharing overhead

---

### Frame 5: Universal Challenge
**Headline:** This happens for every production task

**Copy:** Incidents. Infrastructure optimization. Customer complaints. Observability tuning. Onboarding. Building new features.

**Visual:** Add orange boxes/labels showing these tasks scattered across the diagram, flowing between teams and production system

**Purpose:** Show this isn't just an incident problem - it's everything that touches production

---

### Frame 6: Solution Reveal
**Headline:** Introducing Resolve AI

**Subhead:** AI for Production Systems

**Copy:** Resolve brings senior-level expertise to every engineer - connecting code, infrastructure, and telemetry to resolve incidents, accelerate development, and optimize costs.

**Visual:** The Resolve layer appears above everything, with logo at center. Clean lines connecting Resolve to all teams and to the production system below. The visual messiness from previous frames becomes organized/unified.

**Purpose:** Position Resolve as the unifying layer that solves the cross-domain expertise problem

---

## Section 3: Use Cases

### Section Title
Resolve AI for managing your production systems

### Purpose
Demonstrate breadth of capabilities beyond just incident response - showing this is truly "production systems" not just "SRE"

### Three Primary Use Cases

#### 1. Resolve incidents
**Description:** Autonomously investigates incidents, identifies root cause with evidence, and provides fixes to restore service

**Key Benefits:**
- Reduce MTTR from hours to minutes
- Identify the right team on first pass
- Improve reliability and reduce downtime
- Protect customer experience
- Higher accuracy in root cause identification

---

#### 2. Optimize costs
**Description:** Identifies cost savings across infrastructure and observability by analyzing actual usage and eliminating waste

**Key Benefits:**
- Infrastructure cost savings through right-sizing
- Observability cost reductions
- Performance improvements across the stack

---

#### 3. Build on existing systems
**Description:** Provides architectural recommendations and implementation guidance for extending your current production architecture

**Key Benefits:**
- Faster feature development on brownfield systems
- Architectural guidance based on actual production context
- Code that works with existing patterns and dependencies

**Differentiation Note:** "Build on existing systems" clearly differentiates from coding assistants (Cursor, GitHub Copilot, Claude Code) which focus on greenfield code generation without production context.

---

### Additional Use Cases (Optional Expansion)
These can be shown as secondary use cases or in a separate section:

- **Debug production:** Investigate why specific user flows or features aren't working
- **Analyze impact:** Calculate the impact of infrastructure changes before implementation
- **Onboarding:** Accelerate new engineer ramp-up with automated production system context

---

## Section 4: How It Works

### Section Title
How Resolve works

### Purpose
Build technical credibility by explaining the mechanism - important for Engineering Leadership who need to understand "how is this possible?"

### Three Core Capabilities

#### 1. Production context
**Description:** Connects to your production systems as-is and understands how code, infrastructure, and telemetry interact

**Key Points:**
- No rip-and-replace of existing stack
- Works with your systems as-is
- Builds understanding of relationships between components

---

#### 2. Deep investigation
**Description:** Orchestrates multiple agents that formulate hypotheses across domains, gather evidence from your systems, and provide recommendations with proof

**Key Points:**
- Multi-agent orchestration (not single-shot LLM)
- Hypothesis-driven investigation
- Evidence-based recommendations (not guesses)
- Operates across all three domains simultaneously

---

#### 3. Expert execution
**Description:** Operates your tools like an expert engineer - iteratively refining queries, validating results, and adjusting approach until finding the right solution

**Key Points:**
- Actually executes, doesn't just suggest
- Iterative refinement (not one-and-done)
- Validates results before presenting
- Uses 100+ tools across production stack

---

### Technical Architecture (Supporting Detail)

**Multi-agent orchestrator:**
- Planner coordinates 10+ specialized agents
- Each agent has domain expertise (code, infra, logs, metrics, traces, etc.)
- Agents collaborate to form complete picture

**Memory & Learning System:**
- Builds understanding of your systems over time
- Learns patterns and relationships
- Creates institutional knowledge
- Gets smarter with every interaction

**Visual Reference:** Use slide 8 diagram showing Planner at center with specialized agents (Code, Infra, Logs, Metrics, Traces) plus Memory & Learning System, all operating on production system below

---

## Section 5: Benefits & Outcomes

### Purpose
Quantify the value for Engineering Leadership - connect features to business outcomes

### For Engineering Leadership

**Incident Response:**
- Reduce MTTR from hours/days to minutes
- Identify the right team on first pass (no more war rooms with 20+ people)
- Improve system reliability and reduce customer-impacting downtime
- Higher accuracy in root cause identification
- Proactive issue detection before customer impact

**Cost Optimization:**
- Infrastructure cost savings through right-sizing based on actual usage
- Observability cost reductions (reduce ingestion, optimize retention)
- Performance improvements across the stack
- ROI typically realized within first quarter

**Engineering Velocity:**
- Reduce time spent on production operations from 70% to 30%
- Accelerate engineer onboarding from 3-6 months to weeks
- Distribute tribal knowledge from senior engineers across team
- Free up senior engineers for high-value architectural work
- Faster feature development with production context

---

## Section 6: Competitive Positioning

### The Gap in the Market

**Traditional tools are limited:**
- **Coding assistants** (Cursor, GitHub Copilot, Claude Code) only see code - no production context
- **Observability tools** (Datadog, New Relic, Dynatrace) only show data - no action or cross-domain investigation  
- **AI SRE tools** only handle incidents - missing optimization and development use cases

**Resolve operates across all three domains:**
- Complete visibility into code, infrastructure, and telemetry
- Cross-domain investigation and action
- Handles incidents AND optimization AND development

### Visual Suggestion
Venn diagram with three circles (Code, Infra, Tooling). Show competitors touching only one circle. Resolve sits at the intersection of all three.

### Category Creation Message
We're not better observability or better AI SRE. We're creating a new category: **AI for Production Systems** - the first AI that works across the entire production stack like your senior engineers do.

---

## Section 7: Who It's For

### Personas

**Engineering Leadership (Primary):**
- **Pain:** Team spends too much time on production operations, bottlenecks on senior engineers
- **Value:** Distribute expertise, improve velocity, reduce costs, improve reliability
- **Message:** "Give your team the cross-domain expertise that only senior engineers have today"

**Application Engineers:**
- **Pain:** Need to wait for platform/SRE help to debug production issues
- **Value:** Self-service production debugging and development
- **Message:** "Resolve incidents and build features without waiting for platform support"

**Platform Engineers:**
- **Pain:** Constant interruptions for production questions and incident support
- **Value:** Scale their expertise, automate common asks
- **Message:** "Optimize infrastructure and provide architectural guidance at scale"

**SREs:**
- **Pain:** Manual incident triage and investigation, knowledge trapped in individual heads
- **Value:** Automate toil, build institutional knowledge
- **Message:** "Automate incident triage and investigation while building institutional knowledge"

---

## Section 8: Social Proof

### Customer Logos
Display prominently: Coinbase, DoorDash, Salesforce, MSCI, Rappi, BlueGround

### Testimonials (If Available)
- Focus on metrics: MTTR reduction, cost savings, time saved
- Emphasize cross-domain capabilities
- Highlight specific use cases that showcase breadth

### Format
"Trusted by leading engineering teams" or "Used by engineering teams at..."

---

## Section 9: Final Call-to-Action

### Headline
Ready to bring AI to your production systems?

### CTA Options
- **Primary:** Book a Demo
- **Secondary:** Watch Demo
- **Tertiary:** Start Free Trial (if applicable)

### Supporting Copy (Optional)
- "See how Resolve works with your production systems"
- "Get production context in 24 hours" (if true)
- "No rip-and-replace required"

---

## Key Messaging Pillars

### Core Value Proposition
Resolve is AI for Production Systems - giving every engineer the cross-domain expertise to work across code, infrastructure, and telemetry.

### Primary Differentiators

1. **Complete production context**
   - Not just code (like coding assistants)
   - Not just data (like observability tools)
   - Understands how everything interacts

2. **Multi-agent orchestration**
   - Deep investigation with specialized agents
   - Not single-shot LLM responses
   - Hypothesis-driven with evidence gathering

3. **Expert execution**
   - Operates tools iteratively, doesn't just suggest
   - Validates results before presenting
   - Refines approach based on findings

4. **Continuous learning**
   - Builds institutional knowledge with every interaction
   - Gets smarter about your specific systems
   - Distributes tribal knowledge from senior engineers

### Category Positioning
**From:** Point solutions for specific workflows (coding, observability, incidents)  
**To:** Comprehensive AI for Production Systems (incidents + optimization + development)

**The shift:** AI transformed coding workflows. Now it's transforming production workflows.

---

## Competitive Framing

### vs. Coding Assistants (Cursor, GitHub Copilot, Claude Code)
- **They:** Help write code, no production context
- **We:** Help work with production systems, full context of what's running
- **Key difference:** "Build on existing systems" requires understanding current production architecture

### vs. Observability Tools (Datadog, New Relic, Dynatrace)
- **They:** Show data, require human interpretation and cross-tool correlation
- **We:** Investigate across tools, provide actionable recommendations with evidence
- **Key difference:** We operate tools and take action, not just display dashboards

### vs. AI SRE Tools
- **They:** Focus only on incident response
- **We:** Incidents + optimization + development
- **Key difference:** Production systems are broader than just reliability

---

## Tone & Voice Guidelines

### Do:
- Be specific about capabilities and outcomes
- Use technical language where it builds credibility
- Focus on distributing/democratizing senior engineer expertise
- Emphasize "works with your systems as-is"
- Lead with value and capability, not pain
- Use concrete examples and use cases
- Quantify benefits where possible

### Don't:
- Use generic marketing buzzwords ("revolutionary", "game-changing", etc.)
- Say "production operations" (has specific DevOps connotation) - use "working with production" or "production systems"
- Over-index on incident response (makes it sound like AI SRE)
- Claim to replace engineers (we augment and distribute expertise)
- Use negative framing about current state
- Make unsubstantiated claims without proof

### Word Choices:
- ✅ "Working with production" / "production systems"
- ❌ "Production operations"
- ✅ "Cross-domain expertise" / "senior-level expertise"
- ❌ "Full-stack knowledge"
- ✅ "Build on existing systems"
- ❌ "Brownfield development"
- ✅ "Autonomously investigates and resolves"
- ❌ "Automates incident response"

---

## Visual Design Principles

### Overall Aesthetic:
- Technical credibility over consumer polish
- Show the complexity, then show Resolve simplifying it
- Use actual tool logos (GitHub, AWS, Datadog, etc.) to build familiarity
- Progressive disclosure - build up problem, then reveal solution

### Key Visuals:

1. **Two circles diagram** (Coding vs Production) - shows scale of problem
2. **Three domains diagram** (Code + Infra + Tooling) - shows what needs to connect
3. **Team fragmentation diagram** - shows organizational complexity
4. **Context-sharing burden** - shows the meetings/runbooks/messaging overhead
5. **Resolve unifying layer** - shows Resolve sitting above everything, connecting it all
6. **Multi-agent architecture** - shows technical sophistication (planner + specialized agents)

### Color and Branding:
- Use Resolve brand yellow/lime as highlight color
- Keep production system elements neutral/grayscale
- Use orange/red for problem indicators (incidents, bottlenecks)
- Use green/yellow for Resolve elements and solutions

---

## Open Questions / Metrics Needed

### For Maximum Impact, Gather:

1. **Customer metrics:**
   - MTTR reduction: "X% faster" or "hours to minutes"
   - Cost savings: "$X saved" or "X% reduction"
   - Time saved: "X hours per engineer per week"

2. **Product metrics:**
   - Onboarding time: "Production context in X hours"
   - Accuracy rates: "X% root cause accuracy"
   - Scale: "100+ tools integrated", "10+ specialized agents"

3. **Customer proof points:**
   - Specific use case wins (with permission)
   - Pull quotes about cross-domain capabilities
   - Before/after scenarios

4. **Competitive intel:**
   - What do prospects currently use for each domain?
   - What's the trigger for looking at Resolve?
   - What objections come up about "AI for production"?

---

## Usage Instructions

### For Copywriting:
Use this framework as the source of truth for all homepage copy. The exact wording can be adapted for length/format, but the core messages and structure should remain consistent.

### For Design:
The visual progression in Section 2 is critical - each frame must build on the previous one to create the narrative. Don't skip frames or reorder them.

### For Product Marketing:
Use the competitive positioning and use case descriptions when creating other materials. The "Build on existing systems" framing is key for differentiating from coding assistants.

### For Sales:
The problem build-up (Section 2) mirrors how prospects describe their pain. Use this narrative in discovery calls to build recognition before pitching solution.

---

## Document History

**November 14, 2025:** Initial framework created based on problem/solution slides and category positioning discussion. Established "AI for Production Systems" as core positioning, refined away from "production operations" language, and clarified differentiation from coding assistants via "Build on existing systems" use case.

---

## Related Documents

- Brand voice guidelines: `/context/messaging/brand-voice.md`
- Competitive positioning: [TBD]
- Use case details: [TBD]
- Customer proof points: [TBD]

---

*For questions or updates to this framework, contact Varun (Head of Product Marketing)*
