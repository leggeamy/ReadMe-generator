const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./Utils/generateMarkdown');


// array of questions for user
inquirer
.prompt ([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
])
.then(answers => console.log(answers));

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
