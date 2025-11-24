import json
import os

# Define paths
BASE_DIR = "/Users/varunkrovvidi/Gemini Antigravity/trivia-game"
QUESTION_BANK_DIR = os.path.join(BASE_DIR, "Updated-requirements3/Question-bank")
OUTPUT_FILE = os.path.join(BASE_DIR, "src/data/questions.ts")

# New files to process
FILES = [
    "QUESTION-BANK-HARD-SKILLS.json",
    "QUESTION-BANK-RESOLVE-AI.json",
    "QUESTION-BANK-RECOVERY.json",
    "QUESTION-BANK-SURPRISE.json"
]

def load_json(filename):
    path = os.path.join(QUESTION_BANK_DIR, filename)
    with open(path, 'r') as f:
        return json.load(f)

def transform_question(q):
    # Transform answers to include correct boolean
    transformed_answers = [
        {"id": a['id'], "text": a['text'], "correct": a.get('correct', False)} for a in q['answers']
    ]
    
    return {
        "id": q['id'],
        "difficulty": q['difficulty'],
        "category": q['category'],
        "question": q['question'],
        "answers": transformed_answers,
        "explanation": q['explanation'],
        "timer_seconds": q.get('timer_seconds', 15),
        "roast_message": q.get('roast_message', "Wrong!"),
        # Optional fields if present
        "joke": q.get('joke'),
        "encouragement": q.get('encouragement')
    }

def generate_ts_content(questions, recovery_questions):
    ts_content = "import type { Question } from '@/types';\n\n"
    
    # Main Questions
    ts_content += "export const QUESTIONS: Question[] = [\n"
    for q in questions:
        ts_content += format_question_object(q)
    ts_content += "];\n\n"
    
    # Recovery Questions
    ts_content += "export const RECOVERY_QUESTIONS: Question[] = [\n"
    for q in recovery_questions:
        ts_content += format_question_object(q)
    ts_content += "];\n"
    
    return ts_content

def format_question_object(q):
    ts_content = "    {\n"
    ts_content += f"        id: \"{q['id']}\",\n"
    ts_content += f"        difficulty: \"{q['difficulty']}\",\n"
    ts_content += f"        category: \"{q['category']}\",\n"
    # Escape quotes in question text
    safe_question = q['question'].replace('"', '\\"')
    ts_content += f"        question: \"{safe_question}\",\n"
    
    ts_content += "        answers: [\n"
    for a in q['answers']:
        safe_text = a['text'].replace('"', '\\"')
        correct_val = "true" if a['correct'] else "false"
        ts_content += f"            {{ id: \"{a['id']}\", text: \"{safe_text}\", correct: {correct_val} }},\n"
    ts_content += "        ],\n"
    
    safe_explanation = q['explanation'].replace('"', '\\"')
    ts_content += f"        explanation: \"{safe_explanation}\",\n"
    ts_content += f"        timer_seconds: {q['timer_seconds']},\n"
    
    if q.get('roast_message'):
        safe_roast = q['roast_message'].replace('"', '\\"')
        ts_content += f"        roast_message: \"{safe_roast}\",\n"
        
    if q.get('joke'):
        safe_joke = q['joke'].replace('"', '\\"')
        ts_content += f"        joke: \"{safe_joke}\",\n"
        
    if q.get('encouragement'):
        safe_enc = q['encouragement'].replace('"', '\\"')
        ts_content += f"        encouragement: \"{safe_enc}\",\n"
        
    ts_content += "    },\n"
    return ts_content

def main():
    main_questions = []
    recovery_questions = []
    
    for filename in FILES:
        print(f"Processing {filename}...")
        try:
            data = load_json(filename)
            for q in data:
                transformed = transform_question(q)
                if transformed['category'] == 'recovery':
                    recovery_questions.append(transformed)
                else:
                    main_questions.append(transformed)
        except Exception as e:
            print(f"Error processing {filename}: {e}")
            
    print(f"Total main questions: {len(main_questions)}")
    print(f"Total recovery questions: {len(recovery_questions)}")
    
    ts_content = generate_ts_content(main_questions, recovery_questions)
    
    with open(OUTPUT_FILE, 'w') as f:
        f.write(ts_content)
    
    print(f"Successfully generated {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
