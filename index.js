// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",  
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "Project Title",
    },
    {
        type: "input",
        message: "Write a short description about your project.",
        name: "Description",
    },
    {
        type: "list",
        message: "What license should your project have?",
        name: "Licenses",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies",
        name: "Dependencies",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "Tests",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "Usage",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "Contributions",
    }

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
