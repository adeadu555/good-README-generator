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
        message: "Which is the license?",
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
    }

  ]).then(function(response){

    const generateReadme =`
   # ${response.title}
   
    ${response.description}
  
    ${response.installation}

    ${response.usage}
   
    ${response.contributing}
   
    ${response.license}
   
    ${response.test} `;
    
      
     fs.writeFile("README.md", generateReadme, function(err) {
    
    
            if (err) {
                return console.log(err);
            }
    
            console.log("Project README has been generated!")


 });
});