const fs = require ('fs');
const path = require('path');
const inquirer = require('inquirer');
const engineer= require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const manager = require('./lib/manager.js');
const questions = require('./src/questions.js');

async function main () {
    
    console.log(questions.internQuestions)
    // htmlCardArray [];

    // generate Manager
        // ask questions
        // render new manager based on obj props
        // push to htmlCardArray
        // back to mainMenu

    // generate Intern
        // ask questions
        // render new intern based on obj props
        // push to htmlCardArray
        // back to mainMenu

    // generate Employee
        // ask questions
        // render new employee based on obj props
        // push to htmlCardArray
        // back to mainMenu

    // mainMenu questions
        // generate Engineer
        // generate Intern
        // bye

    // build htmlString

    function buildHtmlString(htmlCardArray){
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <title>Document</title>
        </head>
        <body>
           <main class ="container">
               ${htmlCardArray.join("")}
           </main>   
        </body>
        </html>`
    }

    //  save string to index.html

    // create a manager
        // ask
        // generate html string from answers, and push to complete team
        // ask for 
        // switch
            // intern
            // engineer
            // done
    
}

// start

main();
// Question objects contain questions for prompts



// Add manager function

// Switch case function