import type { Question } from '@/types';

export const QUESTIONS: Question[] = [
    {
        id: "NP001",
        difficulty: "medium",
        category: "production",
        question: "According to industry research, how is engineering time typically split between coding and production work?",
        answers: [
            { id: "a", text: "50% coding, 50% production", correct: false },
            { id: "b", text: "30% coding, 70% production", correct: true },
            { id: "c", text: "80% coding, 20% production", correct: false },
            { id: "d", text: "10% coding, 90% production", correct: false },
        ],
        explanation: "Research shows that coding represents just 30% of engineering time. The other 70% is spent running code in production: responding to incidents, optimizing infrastructure, and managing complexity.",
        timer_seconds: 15,
        recovery_question_id: "REC001"
    },

    {
        id: "NP003",
        difficulty: "hard",
        category: "technical",
        question: "Which three domains must be connected to truly understand a production system?",
        answers: [
            { id: "a", text: "Frontend, Backend, and Database", correct: false },
            { id: "b", text: "Code, Infrastructure, and Telemetry", correct: true },
            { id: "c", text: "Sales, Marketing, and Engineering", correct: false },
            { id: "d", text: "Logs, Metrics, and Traces", correct: false },
        ],
        explanation: "Modern production systems require understanding the interplay between Code (logic), Infrastructure (runtime environment), and Telemetry (observability data).",
        timer_seconds: 20,
        recovery_question_id: "REC003"
    },
    {
        id: "NP004",
        difficulty: "medium",
        category: "ai_agents",
        question: "How does 'Multi-agent orchestration' differ from a standard single-shot AI response?",
        answers: [
            { id: "a", text: "It uses multiple specialized agents to investigate, hypothesize, and gather evidence", correct: true },
            { id: "b", text: "It simply runs the same prompt multiple times to check for consistency", correct: false },
            { id: "c", text: "It requires a human to manually switch between different AI bots", correct: false },
            { id: "d", text: "It is slower and less accurate than a single large model", correct: false },
        ],
        explanation: "Multi-agent orchestration involves specialized agents (e.g., for code, infra, logs) working together to formulate hypotheses and gather evidence, rather than just generating text.",
        timer_seconds: 20,
        recovery_question_id: "REC004"
    },
    {
        id: "NP005",
        difficulty: "hard",
        category: "production",
        question: "What is the 'Production Knowledge Gap'?",
        answers: [
            { id: "a", text: "The difference between junior and senior engineer salaries", correct: false },
            { id: "b", text: "The time delay between writing code and deploying it", correct: false },
            { id: "c", text: "The difficulty of understanding how systems actually operate vs. how they are documented", correct: true },
            { id: "d", text: "The lack of training data for AI models", correct: false },
        ],
        explanation: "The Production Knowledge Gap refers to the challenge engineers face when trying to understand the actual, real-time behavior and constraints of complex production systems, which often diverge from documentation.",
        timer_seconds: 20,
        recovery_question_id: "REC005"
    },
    {
        id: "NP006",
        difficulty: "medium",
        category: "business",
        question: "Why is 'Brownfield Development' specifically challenging for traditional coding assistants?",
        answers: [
            { id: "a", text: "Coding assistants only know older programming languages", correct: false },
            { id: "b", text: "They lack context on existing architecture, traffic patterns, and operational constraints", correct: true },
            { id: "c", text: "Brownfield projects are too small for AI to be useful", correct: false },
            { id: "d", text: "They cannot generate code for legacy systems", correct: false },
        ],
        explanation: "Coding assistants excel at generating new code but struggle with 'brownfield' (existing) systems because they don't understand the live production context, such as load patterns and service dependencies.",
        timer_seconds: 15,
        recovery_question_id: "REC006"
    },
    {
        id: "NP007",
        difficulty: "medium",
        category: "technical",
        question: "What is a key advantage of 'Expert Execution' in an AI system?",
        answers: [
            { id: "a", text: "It executes commands without any safety checks", correct: false },
            { id: "b", text: "It iteratively refines queries and validates results like a human engineer", correct: true },
            { id: "c", text: "It only suggests commands but cannot run them", correct: false },
            { id: "d", text: "It replaces the need for all observability tools", correct: false },
        ],
        explanation: "Expert Execution means the AI doesn't just fire one-off commands; it operates tools iteratively, interpreting results and refining its approach to find the correct solution.",
        timer_seconds: 15,
        recovery_question_id: "REC007"
    },
    {
        id: "NP008",
        difficulty: "easy",
        category: "business",
        question: "What is the primary goal of the 'Optimization' capability in AI for Production Systems?",
        answers: [
            { id: "a", text: "To replace all engineers with AI", correct: false },
            { id: "b", text: "To reduce infrastructure and observability costs while maintaining performance", correct: true },
            { id: "c", text: "To increase the number of servers used", correct: false },
            { id: "d", text: "To automatically rewrite the entire codebase", correct: false },
        ],
        explanation: "Optimization focuses on identifying waste (e.g., unused resources, excessive logging) to reduce costs without sacrificing system reliability or performance.",
        timer_seconds: 15,
        recovery_question_id: "REC008"
    },
    {
        id: "NP009",
        difficulty: "hard",
        category: "technical",
        question: "How does Resolve AI approach 'Cardinality Explosion' in observability?",
        answers: [
            { id: "a", text: "By deleting all metrics older than 24 hours", correct: false },
            { id: "b", text: "By identifying and reducing high-cardinality metrics that provide low value", correct: true },
            { id: "c", text: "By buying more storage automatically", correct: false },
            { id: "d", text: "By ignoring custom metrics completely", correct: false },
        ],
        explanation: "Resolve identifies high-cardinality metrics (those with excessive unique combinations) that drive up costs but offer little diagnostic value, helping teams optimize their observability spend.",
        timer_seconds: 20,
        recovery_question_id: "REC009"
    },
    {
        id: "NP010",
        difficulty: "medium",
        category: "general",
        question: "Which of the following is NOT one of the three core use cases for Resolve AI?",
        answers: [
            { id: "a", text: "Resolve Incidents", correct: false },
            { id: "b", text: "Optimize Costs", correct: false },
            { id: "c", text: "Generate Marketing Copy", correct: true },
            { id: "d", text: "Build on Existing Systems", correct: false },
        ],
        explanation: "The three core use cases are Resolving Incidents, Optimizing Costs, and Building on Existing Systems (Development). Marketing copy generation is not a feature.",
        timer_seconds: 15,
        recovery_question_id: "REC010"
    },
    {
        id: "NP011",
        difficulty: "hard",
        category: "production",
        question: "Why is 'Context Switching' detrimental during incident response?",
        answers: [
            { id: "a", text: "It uses too much network bandwidth", correct: false },
            { id: "b", text: "It increases cognitive load and extends resolution time", correct: true },
            { id: "c", text: "It causes the monitoring tools to crash", correct: false },
            { id: "d", text: "It requires multiple monitors", correct: false },
        ],
        explanation: "Context switching—moving between tools, chats, and code—breaks focus and increases the cognitive burden on engineers, significantly slowing down incident resolution.",
        timer_seconds: 20,
        recovery_question_id: "REC011"
    },
    {
        id: "NP012",
        difficulty: "expert",
        category: "ai_agents",
        question: "What distinguishes 'Hypothesis-Driven Investigation' from random troubleshooting?",
        answers: [
            { id: "a", text: "It relies on guessing the most likely cause first", correct: false },
            { id: "b", text: "It systematically formulates potential causes and gathers evidence to prove or disprove them", correct: true },
            { id: "c", text: "It is only used for security incidents", correct: false },
            { id: "d", text: "It requires a PhD to perform", correct: false },
        ],
        explanation: "Hypothesis-driven investigation is a structured approach where the AI (or engineer) proposes specific potential causes and then actively seeks data to confirm or reject them, rather than aimlessly looking at logs.",
        timer_seconds: 25,
        recovery_question_id: "REC012"
    },
    {
        id: "NP013",
        difficulty: "medium",
        category: "business",
        question: "While AI tools have accelerated code generation, what remains a major bottleneck for engineering teams?",
        answers: [
            { id: "a", text: "Writing documentation", correct: false },
            { id: "b", text: "Shipping and operating code in production (the 'other 70%' of work)", correct: true },
            { id: "c", text: "Finding new libraries", correct: false },
            { id: "d", text: "Compiling large projects", correct: false },
        ],
        explanation: "Research shows that while coding is faster, the majority of engineering time (70%) is still spent on production operations—incidents, optimization, and managing complexity—which hasn't been equally accelerated.",
        timer_seconds: 20,
        recovery_question_id: "REC013"
    },
    {
        id: "NP014",
        difficulty: "easy",
        category: "general",
        question: "Who are the primary target audience for 'AI for Production Systems'?",
        answers: [
            { id: "a", text: "Junior Frontend Developers", correct: false },
            { id: "b", text: "Engineering Leadership (VPs, Directors)", correct: true },
            { id: "c", text: "HR Managers", correct: false },
            { id: "d", text: "Sales Representatives", correct: false },
        ],
        explanation: "The primary audience is Engineering Leadership, as they care about the high-level outcomes like efficiency, cost, and reliability across the entire organization.",
        timer_seconds: 15,
        recovery_question_id: "REC014"
    },
    {
        id: "NP015",
        difficulty: "hard",
        category: "technical",
        question: "In the context of Resolve AI, what does 'Production Parity' refer to?",
        answers: [
            { id: "a", text: "Ensuring dev and prod environments are identical", correct: false },
            { id: "b", text: "The ability to understand how code will behave in the actual production environment", correct: true },
            { id: "c", text: "Making sure all servers have the same specs", correct: false },
            { id: "d", text: "Keeping the number of dev and prod engineers equal", correct: false },
        ],
        explanation: "While traditionally meaning environment similarity, in this context, it emphasizes the AI's ability to bridge the gap and provide development guidance based on the *actual* state and behavior of production.",
        timer_seconds: 20,
        recovery_question_id: "REC015"
    }
];
