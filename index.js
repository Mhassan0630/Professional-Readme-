


// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
   {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm install"
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for usage:"
  },
  {
    type: "input",
    name: "credits",
    message: "Please provide guidelines for contributing to your project:"
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "list",
    name: "license",
    message: "Which license does your project use?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  } 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("README.md file created successfully!");
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        const markdown = generateMarkdown(data);
        writeToFile("README.md", markdown);
      });
}

// Function call to initialize app
init();
