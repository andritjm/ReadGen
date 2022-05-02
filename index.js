// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, { encoding: 'utf-8' }, (err) => {
        if(err) throw err;
        console.log('File Saved!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userAnswers) => {
        console.log(userAnswers);
        const response = generateMarkdown(userAnswers);
        console.log(response);
        writeToFile('sample.md', response)
    });
}

// Function call to initialize app
init();
