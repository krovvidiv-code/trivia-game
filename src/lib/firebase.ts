import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion, collection, addDoc, serverTimestamp, increment } from 'firebase/firestore';

// TODO: Replace with your Firebase project configuration
// You can find this in the Firebase Console -> Project Settings -> General -> Your apps
const firebaseConfig = {
    apiKey: "AIzaSyDFV-HfjvfQ2E11LP1aVfpJQhnSAWy8f08",
    authDomain: "trivia-app-resolve-ai.firebaseapp.com",
    projectId: "trivia-app-resolve-ai",
    storageBucket: "trivia-app-resolve-ai.firebasestorage.app",
    messagingSenderId: "166759135130",
    appId: "1:166759135130:web:284e56e41f5e6716376c23",
    measurementId: "G-X4THCL8CMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Collection References
export const USERS_COLLECTION = 'users';
export const GAME_SESSIONS_COLLECTION = 'game_sessions';

// Types
export interface UserProfile {
    email: string;
    name: string;
    createdAt: any;
    lastPlayedAt: any;
    totalGamesPlayed: number;
    answeredQuestions: string[]; // List of question IDs
}

export interface GameSession {
    userEmail: string;
    score: number;
    personality: string;
    completedAt: any;
    answers: any;
}

// Helper Functions
export const createUserIfNotExists = async (email: string, name: string) => {
    try {
        const userRef = doc(db, USERS_COLLECTION, email);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            const newUser: UserProfile = {
                email,
                name,
                createdAt: serverTimestamp(),
                lastPlayedAt: serverTimestamp(),
                totalGamesPlayed: 0,
                answeredQuestions: []
            };
            await setDoc(userRef, newUser);
            return newUser;
        }
        return userSnap.data() as UserProfile;
    } catch (error) {
        console.error("Error creating/fetching user:", error);
        return null;
    }
};

export const saveGameSession = async (session: GameSession) => {
    try {
        // 1. Save session
        await addDoc(collection(db, GAME_SESSIONS_COLLECTION), {
            ...session,
            completedAt: serverTimestamp()
        });

        // 2. Update user stats
        const userRef = doc(db, USERS_COLLECTION, session.userEmail);

        // Extract question IDs from answers
        const questionIds = Object.keys(session.answers);

        await updateDoc(userRef, {
            lastPlayedAt: serverTimestamp(),
            totalGamesPlayed: increment(1),
            answeredQuestions: arrayUnion(...questionIds)
        });
    } catch (error) {
        console.error("Error saving game session:", error);
    }
};
