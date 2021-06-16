const fs = require ('fs');
const {prompt} = require('inquirer');
const engineer= require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const manager = require('./lib/manager.js');
const questions = require('./src/questions.js');
const inquirer = require('inquirer');
const { dirname } = require('path');


async function mainMenu () {
    // mainMenu questions
    const mainMenu = await inquirer.prompt(questions.mainMenuQuestions);
    // switch
                switch(mainMenu) {
                    // engineer
                    case "add another Engineer": promptEngineer();
                    // intern
                    case "add an Intern": promptIntern();
                    // done
                    case "bye": return;
                }
            
async function init () {
    // generates questions
    const managerAnswers = await prompt(questions.managerQuestions);

    const managerObj = new manager(...Object.values(managerAnswers));

    const employeeCard = generateEmployeeHtml(managerObj);
    
        // push to htmlCardArray
    htmlCardArray.push(employeeCard);
        // back to mainMenu
    mainMenu();
}

    
async function promptEngineer() {

    const engineerAnswers = await inquirer.prompt(questions.engineerQuestions);

    const engineerParameters = Object.values(engineerAnswers);

    const engineerObj = new engineer(...engineerParameters);

    const employeeCard = generateEmployeeHtml(engineerObj);

    htmlCardArray.push(employeeCard);
    console.log("promptEngineer");
    mainMenu();
}

async function promptIntern() {

    const internAnswers = await inquirer.prompt(questions.internQuestions);

    const internParameters = Object.values(internAnswers);

    const internObj = new intern(...internParameters);

    const employeeCard = generateEmployeeHtml(internObj);

    htmlCardArray.push(employeeCard);
    console.log("promptIntern");
    mainMenu();
}
    // build htmlString
function generateEmployeeHtml(htmlCardArray){
        return`<!DOCTYPE html>
        <html lang="en" class="h-100">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <link rel="stylesheet" href="assets/styles/style.css" />
            <title>Project01 Boilerplate</title>
            <style></style>
        </head>
        <body class="h-100">
            <nav class="h-25 color-white p-4" style="background:rgba(0, 0, 255, 0.5)">
                <a href="#here"><div class="btn btn-dark rounded-0">Go here!</div></a>
            </nav>
            <main class="container text-center h-50 p-5">
                <div class="row"><div class="col"><div class="col">feature A.</div></div>
                <div class="row"><div class="col"><div class="col">feature B.</div></div>
                <div class="row"><div class="col"><div class="col">feature C.</div></div>
            </main>
            <footer class="h-25">
                <div class="card bg-dark text -white rounded-0 h-100">
                    <div class="card-header">Footer</div>
                    <div class="card-body">
                        <div>github: <a href="#github-repo">project repo</a></div>
                        </div>
                </div>
                </html>`
            }

    //  save string to index.html
   function saveTeam(htmlCardArray){
       const htmlString = buildHtmlString(htmlCardArray)
       saveFile(htmlString)
   };
   
   function saveFile(htmlString){
       writeFileSync(path.join(__dirname, "dist/index.html"), htmlString)
       open(path.join(__dirname, "dist/index.html"))

   }

function generateEmployeeHtml(_employee){
    return`
    <div> <p>name:<p> </div>`
};
init();
}
mainMenu();

// start
