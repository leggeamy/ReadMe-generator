const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("../Utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      }
]

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
