const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./Utils/generateMarkdown');


// array of questions for user
const promptUser = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    }, {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }, {
      type: 'input',
      name: 'title',
      message: "What is your project's name?"
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license does your project have?',
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be entered to install dependencies?',
      default: "npm i"
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be entered to run tests?',
      default: "npm test"
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo?',
    }
  ]);
};
promptUser().then(answers => console.log(answers));

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
