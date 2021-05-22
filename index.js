const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineerer')
const Intern = require('./lib/Intern')

let allTeamMembers = [];
let allCards = [];

const managerQuestions = [
   
    {
        type: 'input',
        name: 'name',
        message: 'Manager Name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
    
];
const EmployeeQuestions = [
   
    {
        type: 'input',
        name: 'name',
        message: 'Employee Name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
    
];
const selectTeamMemberList = [
    {
        type: 'list',
        name: 'teamMembers',
        message: "Select which team member you'd like to add:",
        choices: ['Employee','Engineer', 'Intern', 'Finish building team'],
    }
];

const internQs = [
    {
        type: 'input',
        name: 'name',
        message: "Intern's Name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Intern's ID:",

    },
    {
        type: 'input',
        name: 'email',
        message: "Intern's Email:",

    },
    {
        type: 'input',
        name: 'school',
        message: "intern's School:",
    },
]
const engineerQs = [
  
    {
        type: 'input',
        name: 'name',
        message: "Engineer's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Engineer's ID:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Engineer's Email:"
    },
   
]
function init() {
    inquirer.prompt(EmployeeQuestions).then((EmployeeInfo)=>{
        let Employee = new Manager(`${EmployeeInfo.name}`, Number(`${EmployeeInfo.id}`), `${managerInfo.email}`, Number(`${managerInfo.officeNumber}`))
        allTeamMembers.push(Employee)
        createManagerCard(Employee)
     
        selectTeamMember()
    })
}

function init() {
    inquirer.prompt(managerQuestions).then((managerInfo)=>{
        let manager = new Manager(`${managerInfo.name}`, Number(`${managerInfo.id}`), `${managerInfo.email}`, Number(`${managerInfo.officeNumber}`))
        allTeamMembers.push(manager)
        createManagerCard(manager)
     
        selectTeamMember()
    })
}

function selectTeamMember(){
    inquirer.prompt(selectTeamMemberList).then((list)=>{
        if(list.teamMembers==="Engineer"){
            engineerPrompts()
        }
        if(list.teamMembers==="Intern"){
            internPrompts()
        }
        if(list.teamMembers==="Finish building team"){
            generateHtmlFile()
        }
    })
}

function engineerPrompts(){
    inquirer.prompt(engineerQs).then((engineerInfo)=>{
        let engineer = new Engineer(`${engineerInfo.name}`, Number(`${engineerInfo.id}`), `${engineerInfo.email}`, `${engineerInfo.github}`)
        allTeamMembers.push(engineer)

        createEngineerCard(engineer)

        selectTeamMember()
    })
}

function internPrompts(){
    inquirer.prompt(internQs).then((internInfo)=>{
        let intern = new Intern(`${internInfo.name}`, Number(`${internInfo.id}`), `${internInfo.email}`, `${internInfo.school}`)
        allTeamMembers.push(intern)
        createInternCard(intern)

        selectTeamMember()
    })
}

function generateHtmlFile(){
    fs.writeFile('team-profile-generetor/dist/index.html', `${generateHtml()}`, (error) => 
    error ? console.error(error) : console.log('Awsome')) 
}

function generateHtml(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    </head>
    <body>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
    
    
    ${allCards}
    </div>
    </div>
  
</body>
</html>
    `
}
function createManagerCard(Employee){
    let cardElement =  `<div class="tile is-parent is-vertical">
    <article class="tile is-child notification is-primary">
      <p class="title">Employee</p>
      <p class="subtitle">Employee</p>
      <input class="input is-primary" type="text" placeholder="Full name: ${Employee.getName()}">
      <input class="input is-primary" type="text" placeholder="Id: ${Employee.getId()} ">
      <div class="control">
      <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com":${Employee.getEmail()}>
    </div>
    </article>
    
       `
  allCards.push(cardElement)
}
function createManagerCard(manager){
    let cardElement = `<div class="tile is-parent">
    <article class="tile is-child notification is-info">
      <p class="title">Manager</p>
      <p class="subtitle">With an image</p>
      <input class="input is-primary" type="text" placeholder="Full Name: ${manager.getName()}">
      <input class="input is-primary" type="text" placeholder="Id:  ${manager.getId()}">
      <div class="control">
      <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com":${manager.getEmail()}>
    </div>
      <input class="input is-primary" type="text" placeholder="role: ${manager.getRole()}">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/640x480.png">
      </figure>
    </article>
  </div>
</div>
       `
  allCards.push(cardElement)
}
function createEngineerCard(engineer){
    let cardElement = `<div class="tile is-parent is-vertical">
    <article class="tile is-child notification is-warning">
                <p class="title">Engineer</p>
                <p class="subtitle">Engineer</p>
                <input class="input is-primary" type="text" placeholder="Full Name: ${engineer.getName()}">
                <input class="input is-primary" type="text" placeholder="Id: ${engineer.getId()}">
                <div class="control">
                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com":${engineer.getEmail()}>
              </div>
                <input class="input is-primary" type="text" placeholder="Role: ${engineer.getRole()}">
              </article>
            </div>
    `
  allCards.push(cardElement)

}
function createInternCard(intern){
    let cardElement =  `<div class="tile is-parent">
    <article class="tile is-child notification is-danger">
      <p class="title">Intern</p>
      <p class="subtitle">Aligned with the right tile</p>
      <input class="input is-primary" type="text" placeholder="Full Name:${intern.getName()}">
      <input class="input is-primary" type="text" placeholder="Id: ${intern.getId()}">
      <div class="control">
         <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com":${intern.getEmail()}>
      </div>
      <li>School: ${intern.getSchool()}</li>
      <p class="card-text">Role: ${intern.getRole()}</p>
      <div class="content">
        <!-- Content -->
      </div>
    </article>
  </div>
   `
  allCards.push(cardElement)
}

init()