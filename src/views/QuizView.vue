<template>
    <div class="mainContainer">
        <div class="selectorButtons">
            <button
                :disabled="selectedScope === 'All'"
                v-on:click="changeScope('All')"
                class="selectorButton"
            >
                All
            </button>

            <button
                :disabled="selectedScope === 'C#'"
                v-on:click="changeScope('C#')"
                class="selectorButton"
            >
                C#
            </button>
            <button
                :disabled="selectedScope === 'JavaScript'"
                v-on:click="changeScope('JavaScript')"
                class="selectorButton"
            >
                JavaScript
            </button>
            <button
                :disabled="selectedScope === 'General Coding'"
                v-on:click="changeScope('General Coding')"
                class="selectorButton"
            >
                General Coding
            </button>
        </div>
        <Question v-bind="getQuestions()" />
    </div>
</template>

<script setup lang="ts">
import type { QuizQuestion, Scope } from "@/types/quizTypes";
import Question from "@/components/Quiz/Question.vue";
import { ref } from "vue";

const selectedScope = ref<Scope | "All">("All");

const changeScope = (scope: Scope | "All") => {
    console.log("test");
    selectedScope.value = scope;
};

const getQuestions = (): QuizQuestion => {
    if (selectedScope.value == "All") {
        const dataToReturn = testData[Math.floor(Math.random() * testData.length)];
        return dataToReturn;
    }

    const newData = testData.filter((x) => x.scope === selectedScope.value);
    if (newData.length === 0) {
        return {
            question: "No questions in this category",
            answer: "",
            scope: "None",
            wrongAnswers: ["", "", ""],
        };
    }
    return newData[Math.floor(Math.random() * newData.length)];
};

const testData: QuizQuestion[] = [
    {
        question: "What is an API?",
        answer: "A set of functions and protocols that allow different software applications to communicate with each other.",
        scope: "General Coding",
        wrongAnswers: [
            "A programming language used for front-end web development.",
            "A tool used to compile code into machine language.",
            "A type of database for storing large amounts of data.",
            "A protocol for transferring files between computers.",
            "A framework for designing mobile applications.",
            "A library for managing application state in Vue 3.",
            "A design pattern for object-oriented programming.",
            "A technique for encrypting sensitive data.",
            "A process that automatically tests software code.",
        ],
    },
    {
        question: "What is a variable in programming?",
        answer: "A named storage location in memory that holds a value.",
        scope: "General Coding",
        wrongAnswers: [
            "A type of function that executes code repeatedly.",
            "A method used to sort data within arrays.",
            "A process used to debug applications.",
            "A hardware component used for storing code.",
            "A syntax rule in programming languages.",
            "A constant value that cannot be changed.",
            "A part of the application used for user authentication.",
            "A design principle for creating responsive layouts.",
            "A library used for 3D graphics rendering.",
        ],
    },
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language.",
        scope: "General Coding",
        wrongAnswers: [
            "High-level Text Management Language.",
            "Hyperlink Transfer Modeling Language.",
            "Home Tool Management Layer.",
            "Host Transfer Mechanism Language.",
            "Hierarchical Template Markup Language.",
            "Hardware Text Manipulation Layout.",
            "Hyper Terminal Management Layer.",
            "HyperTransfer Mainframe Language.",
            "Host Tool Monitoring Language.",
        ],
    },
    {
        question: "What is the purpose of a function in programming?",
        answer: "To encapsulate a block of code that performs a specific task and can be reused.",
        scope: "General Coding",
        wrongAnswers: [
            "To store data in an array.",
            "To compile code into executable files.",
            "To create visual elements for a website.",
            "To define constants for the entire program.",
            "To establish network connections between servers.",
            "To manage memory allocation.",
            "To describe the structure of a database.",
            "To dynamically change CSS properties.",
            "To monitor CPU usage of an application.",
        ],
    },
    {
        question: "What is a class in object-oriented programming?",
        answer: "A blueprint for creating objects that defines attributes and methods.",
        scope: "General Coding",
        wrongAnswers: [
            "A function that processes large datasets.",
            "A part of the operating system kernel.",
            "A style rule in CSS for formatting text.",
            "A special loop that iterates over arrays.",
            "A specific section of HTML code.",
            "A command that executes system-level tasks.",
            "A library for handling HTTP requests.",
            "A protocol for securing web applications.",
            "A software testing methodology.",
        ],
    },
    {
        question: "What is the purpose of 'let' in JavaScript?",
        answer: "To declare a block-scoped variable.",
        wrongAnswers: [
            "To create an immutable constant.",
            "To define a function.",
            "To import external libraries.",
            "To declare a global variable.",
            "To assign a new class.",
            "To define an asynchronous function.",
            "To perform arithmetic operations.",
            "To create a CSS selector.",
            "To handle HTTP requests.",
        ],
        scope: "JavaScript",
    },
    {
        question: "What does 'NaN' represent in JavaScript?",
        answer: "A value representing Not-a-Number.",
        wrongAnswers: [
            "A method to call another function.",
            "A placeholder for null values.",
            "An object representing an empty array.",
            "A function that calculates numerical sums.",
            "A keyword to define classes.",
            "A tool for debugging code.",
            "A reference to the global object.",
            "A feature for nesting functions.",
            "A technique for looping over arrays.",
        ],
        scope: "JavaScript",
    },
    {
        question: "Which of the following is used to define types in TypeScript?",
        answer: "Interfaces and type aliases.",
        wrongAnswers: [
            "HTML tags.",
            "CSS selectors.",
            "SQL queries.",
            "Only variables.",
            "HTTP headers.",
            "Event handlers.",
            "DOM elements.",
            "API endpoints.",
            "Command-line arguments.",
        ],
        scope: "JavaScript",
    },
    {
        question: "How do you check the type of a variable in JavaScript?",
        answer: "Using the 'typeof' operator.",
        wrongAnswers: [
            "By calling .type() on the variable.",
            "By using 'instanceof' for primitives.",
            "By using 'typeof' for arrays.",
            "By writing a custom loop.",
            "With the 'isType' function.",
            "By inspecting console logs.",
            "By importing a special library.",
            "By declaring it again.",
            "With a while loop.",
        ],
        scope: "JavaScript",
    },
    {
        question: "What does 'Promise' represent in JavaScript?",
        answer: "An object representing the eventual completion or failure of an asynchronous operation.",
        wrongAnswers: [
            "A method to store data locally.",
            "A data type for defining arrays.",
            "A way to declare a variable.",
            "A function used to handle loops.",
            "A protocol for transferring data.",
            "A class used to generate numbers.",
            "A rule for styling web pages.",
            "A tool for building APIs.",
            "A type of HTML form element.",
        ],
        scope: "JavaScript",
    },
];
</script>
<style scoped>
.mainContainer {
    background-color: pink;
    color: black;
}

.selectorButtons {
    display: grid;
    grid-template-columns: repeat(4, 20vmin);
}

.selectorButton {
    background-color: gray;
    border: 1px #555 solid;
    line-height: 2vmin;
    font-size: 1.5vmin;
    padding: 0.5vmin;
    font-weight: bold;
    color: aliceblue;
    transition: 500ms;
}
.selectorButton:disabled {
    background-color: #333;
    border: 1px #333 solid;
    font-size: 1.8vmin;
    transition: 500ms;
}
</style>
