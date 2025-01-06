export type Scope = "C#" | "JavaScript" | "General Coding" | "All" | "None";

export type QuizQuestion = {
    question: string;
    scope: Scope;
    answer: string;
    wrongAnswers: string[];
};
