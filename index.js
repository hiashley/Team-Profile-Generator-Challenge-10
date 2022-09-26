const inquirer = require('inquirer');
const fs = require('fs');

const createHTML = require('./src/createHTML');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const teamList = [];

const createManager = () => {
  return inquirer.prompt([
    {
      type:'input',
      name: 'name',
      message: 'Who is the team manager?',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('You must input a value.');
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's ID?",
      validate: input => {
        if (isNaN(input)) {
          console.log('You must input a number');
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email?",
      validate: input => {
        accept = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
        if (accept) {
          return true;
        } else {
          console.log('Please enter a valid email address.');
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?",
      validate: input => {
        if (isNaN(input)) {
          console.log('You must input a number');
        } else {
          return true;
        }
      }
    }
  ])
  .then(managerAnswers => {
    const {name, id, email, officeNumber} = managerAnswers;
    const manager = new Manager(name, id, email, officeNumber);
    teamList.push(manager);
    console.log(manager);
  })
};

const createTeam = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: 'What employee would you like to add?',
      choices: ['Engineer', 'Intern']
    },
    {
      type:'input',
      name: 'name',
      message: "What is your employee's name?",
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('You must input a value.');
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID?",
      validate: input => {
        if (isNaN(input)) {
          console.log('You must input a number');
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email?",
      validate: input => {
        accept = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
        if (accept) {
          return true;
        } else {
          console.log('Please enter a valid email address.');        
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's github username?",
      when: (input) => input.role === 'Engineer',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Please input the engineer's github.");  
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the the intern's school?",
      when: (input) => input.role === 'Intern',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Please input the intern's school.");
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmEmployee',
      message: 'Would you like to add more employees?',
      default: false
    }
  ])
  .then(employeeAnswers => {
    const {name, id, email, role, github, school, confirmEmployee} = employeeAnswers;
    let employee;
    
    if (role === 'Engineer') {
      employee = new Engineer (name, id, email, github);
      console.log(employee);
    } else if (role === 'Intern') {
      employee = new Intern (name, id, email, school);
      console.log(employee);
    }
    teamList.push(employee);

    if (confirmEmployee) {
      return createTeam(teamList);
    } else {
      return teamList;
    }
  })
};

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Your team profile has been created.');
    }
  })
};

createManager()
  .then(createTeam)
  .then(teamList => {
    return createHTML(teamList);
  })
  .then(data => {
    return writeFile(data);
  })
  .catch(err => {
    console.log(err);
  });