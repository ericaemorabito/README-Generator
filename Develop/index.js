// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); //imported utils file

// Function to initialize app
const runCode = function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Write the steps required to install your project.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Write the instructions and examples of use.'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Write the contribution guidelines.'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Write the test instructions.'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your license.',
        choices: ['Github', 'MIT', 'GPLv3'
        ],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      }
    ])
    .then((data) =>
    //creating the README file with the data
      fs.writeFileSync('README.md', generateMarkdown(data)));
    //.catch((err) => console.log(err))
};

runCode();