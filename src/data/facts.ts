export interface Fact {
    id: string;
    question: string;
    answer: string;
}

export const INTERESTING_FACTS: Fact[] = [
    {
        id: 'f1',
        question: "What was the first computer bug?",
        answer: "A literal moth found trapped in a relay of the Harvard Mark II computer in 1947 by Grace Hopper's team."
    },
    {
        id: 'f2',
        question: "How much data does ChatGPT process?",
        answer: "GPT-4 was reportedly trained on over 1 petabyte of data, equivalent to over 200,000 DVDs worth of text."
    },
    {
        id: 'f3',
        question: "Who wrote the first algorithm?",
        answer: "Ada Lovelace wrote the first algorithm intended for a machine (Charles Babbage's Analytical Engine) in the mid-1800s."
    },
    {
        id: 'f4',
        question: "What does 'Google' mean?",
        answer: "It's a play on 'googol', the mathematical term for the number 1 followed by 100 zeros."
    },
    {
        id: 'f5',
        question: "How fast is the fastest supercomputer?",
        answer: "Frontier, the first exascale computer, can perform over 1.1 quintillion calculations per second."
    },
    {
        id: 'f6',
        question: "What was the first video game?",
        answer: "Physicist William Higinbotham created 'Tennis for Two' in 1958 on an oscilloscope."
    },
    {
        id: 'f7',
        question: "Why is it called a 'mouse'?",
        answer: "Douglas Engelbart's 1964 invention had a cord coming out the back, resembling a mouse's tail."
    },
    {
        id: 'f8',
        question: "What is the '2038 problem'?",
        answer: "Many systems store time as seconds since 1970. On Jan 19, 2038, this 32-bit number will overflow, potentially crashing systems."
    },
    {
        id: 'f9',
        question: "How much energy does training a large AI model consume?",
        answer: "Training a single large language model can emit as much carbon as five cars over their entire lifetimes."
    },
    {
        id: 'f10',
        question: "What is 'rubber duck debugging'?",
        answer: "A method where programmers explain their code line-by-line to an inanimate object (often a rubber duck) to find bugs."
    },
    {
        id: 'f11',
        question: "Who is the 'father of AI'?",
        answer: "Alan Turing is often considered the father of theoretical computer science and artificial intelligence."
    },
    {
        id: 'f12',
        question: "What was the first domain name ever registered?",
        answer: "Symbolics.com was registered on March 15, 1985."
    },
    {
        id: 'f13',
        question: "How many lines of code are in the Linux kernel?",
        answer: "As of 2023, the Linux kernel contains over 30 million lines of code."
    },
    {
        id: 'f14',
        question: "What is the 'Turing Test'?",
        answer: "A test proposed by Alan Turing in 1950 to determine if a machine can exhibit intelligent behavior equivalent to a human."
    },
    {
        id: 'f15',
        question: "What is 'Moore's Law'?",
        answer: "The observation that the number of transistors in a dense integrated circuit doubles about every two years."
    },
    {
        id: 'f16',
        question: "What does 'CAPTCHA' stand for?",
        answer: "Completely Automated Public Turing test to tell Computers and Humans Apart."
    },
    {
        id: 'f17',
        question: "Who invented the World Wide Web?",
        answer: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN."
    },
    {
        id: 'f18',
        question: "What is 'Hello, World!'?",
        answer: "A simple program that outputs 'Hello, World!', traditionally the first program written by people learning to code."
    },
    {
        id: 'f19',
        question: "What is the 'Blue Screen of Death'?",
        answer: "The error screen displayed on Windows systems after a fatal system error."
    },
    {
        id: 'f20',
        question: "What is 'open source' software?",
        answer: "Software with source code that anyone can inspect, modify, and enhance."
    },
    {
        id: 'f21',
        question: "What is a 'Trojan Horse' in computing?",
        answer: "Malware that misleads users of its true intent, often disguised as legitimate software."
    },
    {
        id: 'f22',
        question: "What is 'phishing'?",
        answer: "A cybercrime where targets are contacted by email/phone/text by someone posing as a legitimate institution to lure individuals into providing sensitive data."
    },
    {
        id: 'f23',
        question: "What is 'cloud computing'?",
        answer: "The delivery of different services through the Internet, including data storage, servers, databases, networking, and software."
    },
    {
        id: 'f24',
        question: "What is a 'blockchain'?",
        answer: "A distributed database that maintains a continuously growing list of ordered records, called blocks."
    },
    {
        id: 'f25',
        question: "What is 'machine learning'?",
        answer: "A subset of AI that involves training algorithms to learn from and make predictions or decisions based on data."
    },
    {
        id: 'f26',
        question: "What is 'deep learning'?",
        answer: "A subset of machine learning based on artificial neural networks with representation learning."
    },
    {
        id: 'f27',
        question: "What is 'quantum computing'?",
        answer: "Computing using quantum-mechanical phenomena, such as superposition and entanglement."
    },
    {
        id: 'f28',
        question: "What is 'virtual reality' (VR)?",
        answer: "A simulated experience that can be similar to or completely different from the real world."
    },
    {
        id: 'f29',
        question: "What is 'augmented reality' (AR)?",
        answer: "An interactive experience of a real-world environment where the objects that reside in the real world are enhanced by computer-generated perceptual information."
    },
    {
        id: 'f30',
        question: "What is the 'Internet of Things' (IoT)?",
        answer: "The network of physical objects—'things'—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the Internet."
    },
    {
        id: 'f31',
        question: "What is 'big data'?",
        answer: "Data sets that are too large or complex to be dealt with by traditional data-processing application software."
    },
    {
        id: 'f32',
        question: "What is 'cybersecurity'?",
        answer: "The practice of protecting systems, networks, and programs from digital attacks."
    },
    {
        id: 'f33',
        question: "What is 'agile software development'?",
        answer: "An approach to software development under which requirements and solutions evolve through the collaborative effort of self-organizing and cross-functional teams and their customer(s)/end user(s)."
    },
    {
        id: 'f34',
        question: "What is 'DevOps'?",
        answer: "A set of practices that combines software development (Dev) and IT operations (Ops)."
    },
    {
        id: 'f35',
        question: "What is a 'full-stack developer'?",
        answer: "A web developer or engineer who works with both the front and back ends of a website or application."
    },
    {
        id: 'f36',
        question: "What is 'API'?",
        answer: "Application Programming Interface, a set of definitions and protocols for building and integrating application software."
    },
    {
        id: 'f37',
        question: "What is 'HTML'?",
        answer: "HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        id: 'f38',
        question: "What is 'CSS'?",
        answer: "Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in a markup language such as HTML."
    },
    {
        id: 'f39',
        question: "What is 'JavaScript'?",
        answer: "A programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    },
    {
        id: 'f40',
        question: "What is 'Python'?",
        answer: "An interpreted, high-level and general-purpose programming language."
    }
];
