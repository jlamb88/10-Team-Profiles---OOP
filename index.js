const inquirer = require('inquirer')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const generateHTML = require('./src/generateHTML')
const fs = require('fs')
const path = require('path')

emps = []

init();

function init() {
    const mgrQuestions = [
        {
            name: 'name',
            message: 'What is the name of the team manager?',
        },
        {
            name: 'id',
            message: "What is the team manager's employee id?",
        },
        {
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            name: 'office',
            message: "What is the team manager's office number?",
        },

    ]
    inquirer.prompt(mgrQuestions)
        .then((mgrData) => {
            const { name, id, email, office } = mgrData
            manager = new Manager(name, id, email, office)
            emps.push(manager)
            addEmps()
        })

}

addEmps = () => {
    menu = [{
        type: 'list',
        name: 'empType',
        message: 'Select a type of employee to add to the department',
        choices: ['Engineer', 'Intern', 'Done']
    }]
    inquirer.prompt(menu).then((data) => {
        switch (data.empType) {
            case "Engineer": {
                addEngineer()
                break;
            }
            case "Intern": {
                addIntern()
                break;
            }
            case "Done": {
                writeFile()
                break
            }
        }
    })
}

addEngineer = () => {
    engQuestions = [
        {
            name: 'name',
            message: "What is employee's name",
        },
        {
            name: 'id',
            message: "What is the employee's id?",
        },
        {
            name: 'email',
            message: "What is the employee's email?",
        },
        {
            name: 'github',
            message: "What is the employee's github page?"
        }
    ]

    inquirer.prompt(engQuestions)
        .then((empData) => {
            const { name, id, email, github } = empData
            employee = new Engineer(name, id, email, github)
            emps.push(employee)
            addEmps()
        })
}

addIntern = () => {
    intrnQuestions = [
        {
            name: 'name',
            message: "What is the intern's name",
        },
        {
            name: 'id',
            message: "What is the intern's id?",
        },
        {
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            name: 'school',
            message: "What school does the intern attend?"
        }
    ]

    inquirer.prompt(intrnQuestions)
        .then((intData) => {
            const { name, id, email, school } = intData
            employee = new Intern(name, id, email, school)
            emps.push(employee)
            addEmps()
        })
}

writeFile = () => {
    fs.writeFileSync(path.join(__dirname, "./dist/index.html"), generateHTML(emps))
}



