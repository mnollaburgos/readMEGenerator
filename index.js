// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generate = require("./develop/generateMarkdown.js")



// TODO: Create an array of questions for user input
const question =
    [
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
            name: "project",
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
            choices: ["MIT", "APACHE 2.0"]
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
    ]


// .then((data) => {
//     const filename = `${data.project.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('Success!')
//     );
// });



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(question).then((data) => {
        console.log(data);
        writeToFile("README.md", generate({
            ...data
        }));
    })
}

// Function call to initialize app
init();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// }