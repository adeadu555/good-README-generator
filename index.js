var inquirer = require('inquirer');
var fs = require('fs');

inquirer
  .prompt([
      {
          type: "input",
          name: "title",
          message: "What is the title of your project?"
      },

      {
        type: "input",
        name: "description",
        message: "Describe your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation process?"
    },

    {
        type: "input",
        name: "usage",
        message: "How do you use your application?"
    },
    {
        type: "input",
        name: "license",
        message: "Which is the license?"
        options: ["MIT", "NoLicense"],

    },

    {
        type: "input",
        name: "contributing",
        message: "Who are the other contributors?"
    },

    {
        type: "input",
        name: "test",
        message: "How is your application tested?"
    },

    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });