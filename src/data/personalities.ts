export interface PersonalityProfile {
    id: string;
    title: string;
    tagline: string;
    description: string;
    quote: string;
    image: string; // Path to image asset
    shareText: string;
}

export const PERSONALITIES: Record<string, PersonalityProfile> = {
    // --- LEGENDARY TIER ---
    ADA_LOVELACE: {
        id: "ADA_LOVELACE",
        title: "Ada Lovelace",
        tagline: "The Original Algorithm Architect",
        description: "Just like Ada Lovelace wrote the first algorithm before computers even existed, you've demonstrated mastery of AI and production systems before most people even understand what's possible. You see the poetry in the code.",
        quote: "The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.",
        image: "/assets/personalities/ada_lovelace.png",
        shareText: "I got the Ada Lovelace personality in the Resolve AI Trivia! 100% Perfect Score. #ResolveAI #TechTrivia"
    },
    ALAN_TURING: {
        id: "ALAN_TURING",
        title: "Alan Turing",
        tagline: "The Enigma Solver",
        description: "Like Turing cracking the Enigma code and laying the foundations of computer science, you've decoded the complexities of modern AI systems with precision. You see the patterns others miss.",
        quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
        image: "/assets/personalities/alan_turing.png",
        shareText: "I'm an Alan Turing level problem solver! Can you beat my score? #ResolveAI #TechTrivia"
    },
    GRACE_HOPPER: {
        id: "GRACE_HOPPER",
        title: "Grace Hopper",
        tagline: "The Bug Hunter",
        description: "Grace Hopper found the first computer 'bug' and created the first compiler. You've shown the same mastery of production systems and debugging! No bug is safe from you.",
        quote: "It's easier to ask forgiveness than it is to get permission.",
        image: "/assets/personalities/grace_hopper.png",
        shareText: "I'm a Grace Hopper level Bug Hunter! #ResolveAI #TechTrivia"
    },
    LINUS_TORVALDS: {
        id: "LINUS_TORVALDS",
        title: "Linus Torvalds",
        tagline: "The Kernel Master",
        description: "Like the creator of Linux and Git, you are precise, efficient, and maybe a little opinionated about code quality. You built a streak of correct answers that would make any kernel developer proud.",
        quote: "Talk is cheap. Show me the code.",
        image: "/assets/personalities/linus_torvalds.png",
        shareText: "I achieved the Linus Torvalds personality! Talk is cheap, beat my score. #ResolveAI #TechTrivia"
    },
    MARGARET_HAMILTON: {
        id: "MARGARET_HAMILTON",
        title: "Margaret Hamilton",
        tagline: "The Apollo Engineer",
        description: "Margaret Hamilton led the team that wrote the Apollo guidance software. You've shown the same speed and confidence in shipping code that can land humans on the moon (or at least keep production running).",
        quote: "There was no choice but to be pioneers.",
        image: "/assets/personalities/margaret_hamilton.png",
        shareText: "I'm a Margaret Hamilton level engineer! Fast and reliable. #ResolveAI #TechTrivia"
    },

    // --- SOLID TIER ---
    KATHERINE_JOHNSON: {
        id: "KATHERINE_JOHNSON",
        title: "Katherine Johnson",
        tagline: "The Human Computer",
        description: "Your calculations are precise and your knowledge is solid. Like the mathematician who calculated trajectories for Project Mercury, you are the reliable force that gets the mission home safely.",
        quote: "I don't have a feeling of inferiority. Never had. I'm as good as anyone, but no better.",
        image: "/assets/personalities/katherine_johnson.png",
        shareText: "I got Katherine Johnson! Precision and reliability. #ResolveAI #TechTrivia"
    },
    STEVE_WOZNIAK: {
        id: "STEVE_WOZNIAK",
        title: "Steve Wozniak",
        tagline: "The Engineer's Engineer",
        description: "You love the pure joy of engineering. You understand how things work from the circuit board up. You might not care about the marketing, but your technical score is undeniable.",
        quote: "Artists work best alone. Work alone.",
        image: "/assets/personalities/steve_wozniak.png",
        shareText: "I'm a Woz! Pure engineering skill. #ResolveAI #TechTrivia"
    },
    HEDY_LAMARR: {
        id: "HEDY_LAMARR",
        title: "Hedy Lamarr",
        tagline: "The Inventor",
        description: "More than meets the eye. You have a creative mind that sees connections others miss. Like the inventor of frequency-hopping spread spectrum, your genius is ahead of its time.",
        quote: "All creative people want to do the unexpected.",
        image: "/assets/personalities/hedy_lamarr.png",
        shareText: "I got Hedy Lamarr! Innovation and creativity. #ResolveAI #TechTrivia"
    },
    TIM_BERNERS_LEE: {
        id: "TIM_BERNERS_LEE",
        title: "Tim Berners-Lee",
        tagline: "The Web Weaver",
        description: "You understand the fundamental connections that make the system work. You believe in open standards and information sharing. You scored well on the technical infrastructure questions.",
        quote: "The Web does not just connect machines, it connects people.",
        image: "/assets/personalities/tim_berners_lee.png",
        shareText: "I'm a Tim Berners-Lee! Connecting the dots. #ResolveAI #TechTrivia"
    },
    DENNIS_RITCHIE: {
        id: "DENNIS_RITCHIE",
        title: "Dennis Ritchie",
        tagline: "The Systems Architect",
        description: "You understand the low-level roots of modern computing. C and Unix are in your DNA. You appreciate simplicity, modularity, and tools that do one thing well.",
        quote: "UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.",
        image: "/assets/personalities/dennis_ritchie.png",
        shareText: "I got Dennis Ritchie! Systems level mastery. #ResolveAI #TechTrivia"
    },

    // --- SPECIAL & FUN ---
    MARVIN_MINSKY: {
        id: "MARVIN_MINSKY",
        title: "Marvin Minsky",
        tagline: "The AI Pioneer",
        description: "You have a deep appreciation for the history and future of Artificial Intelligence. You nailed the surprise questions and showed a breadth of knowledge that spans decades.",
        quote: "Will robots inherit the earth? Yes, but they will be our children.",
        image: "/assets/personalities/marvin_minsky.png",
        shareText: "I'm a Marvin Minsky level AI expert! #ResolveAI #TechTrivia"
    },
    SECRET_EMPLOYEE: {
        id: "SECRET_EMPLOYEE",
        title: "Secret Employee",
        tagline: "You Know Too Much...",
        description: "🚨 RECRUITING ALERT 🚨 You answered every Resolve AI question correctly. Either you work here, you stalk our blog, or you are exactly who we need to hire. Come say hi!",
        quote: "We're not creepy, just impressed.",
        image: "/assets/personalities/secret_employee.png",
        shareText: "I might be a Secret Employee at Resolve AI... I know too much! #ResolveAI #TechTrivia"
    },
    ROBERT_DOWNEY_JR: {
        id: "ROBERT_DOWNEY_JR",
        title: "The Comeback Kid",
        tagline: "Never Give Up",
        description: "Like a true Hollywood comeback story, you started rough but finished strong! You used the recovery questions to your advantage and proved that resilience is the most important skill in production.",
        quote: "I didn't come this far to only come this far.",
        image: "/assets/personalities/comeback_kid.png",
        shareText: "I'm the Comeback Kid! Never give up. #ResolveAI #TechTrivia"
    },
    KEVIN_MITNICK: {
        id: "KEVIN_MITNICK",
        title: "Kevin Mitnick",
        tagline: "The Social Engineer",
        description: "You're learning the system, probing for weaknesses, and figuring out how things work. You might not have all the answers yet, but you have the hacker mindset.",
        quote: "I was addicted to hacking, more for the intellectual challenge, the curiosity, the seduction of adventure.",
        image: "/assets/personalities/kevin_mitnick.png",
        shareText: "I got the Kevin Mitnick personality. Hacking the system! #ResolveAI #TechTrivia"
    },
    SHERLOCK_HOLMES: {
        id: "SHERLOCK_HOLMES",
        title: "Sherlock Holmes",
        tagline: "The Deductive Reasoner",
        description: "You may not know every fact, but your reasoning skills are sharp. You used logic to deduce the correct answers even when you weren't sure. Elementary!",
        quote: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
        image: "/assets/personalities/sherlock_holmes.png",
        shareText: "I'm Sherlock Holmes! Deductive reasoning for the win. #ResolveAI #TechTrivia"
    },

    // --- COMEDY TIER ---
    MICHAEL_SCOTT: {
        id: "MICHAEL_SCOTT",
        title: "Michael Scott",
        tagline: "Confidence > Competence",
        description: "You approached this quiz with the confidence of a regional manager! You might not have all the technical details right, but your leadership potential is... unique.",
        quote: "I am Beyoncé, always.",
        image: "/assets/personalities/michael_scott.png",
        shareText: "I got Michael Scott! Confidence is key. #ResolveAI #TechTrivia"
    },
    CLIPPY: {
        id: "CLIPPY",
        title: "Clippy",
        tagline: "It Looks Like You're Trying...",
        description: "You gave it your best shot! Like Microsoft's helpful assistant, your heart is in the right place. You're eager to help, even if you don't always have the right answer.",
        quote: "It looks like you're taking a trivia quiz. Would you like some help?",
        image: "/assets/personalities/clippy.png",
        shareText: "I got Clippy! I'm just trying to help. #ResolveAI #TechTrivia"
    },
    RUBBER_DUCK: {
        id: "RUBBER_DUCK",
        title: "Rubber Duck",
        tagline: "The Debugging Companion",
        description: "You might not understand all the code, but you're a great listener! Developers love explaining things to you, and that's a valuable role in any engineering team.",
        quote: "Quack.",
        image: "/assets/personalities/rubber_duck.png",
        shareText: "I'm a Rubber Duck! The best debugging companion. #ResolveAI #TechTrivia"
    },
    HOMER_SIMPSON: {
        id: "HOMER_SIMPSON",
        title: "Homer Simpson",
        tagline: "Safety Inspector",
        description: "D'oh! You might want to stay away from the production console for a while. But hey, you finished the game, and that deserves a donut.",
        quote: "To start press any key. Where's the ANY key?",
        image: "/assets/personalities/homer_simpson.png",
        shareText: "D'oh! I got Homer Simpson. Time for a donut. #ResolveAI #TechTrivia"
    },
    THE_INTERN: {
        id: "THE_INTERN",
        title: "The Intern",
        tagline: "Production Chaos",
        description: "You broke production, but you learned a lot! You're enthusiastic and dangerous. With a little more mentorship (and fewer root privileges), you'll go far.",
        quote: "I thought 'rm -rf' meant 'read mail -really fast'...",
        image: "/assets/personalities/intern.png",
        shareText: "I'm The Intern! I broke production but I'm learning. #ResolveAI #TechTrivia"
    }
};
