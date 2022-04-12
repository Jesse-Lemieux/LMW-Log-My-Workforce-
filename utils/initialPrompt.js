const inquirer = require('inquirer')
const db = require('../db/connection')
const view = require('./viewTables')
const add = require('./addTable')

module.exports.init = () => {
    db.connect(err => {
        if (err) throw err;
        
    inquirer
    .prompt([
       {
           type: 'list',
           name: 'init',
           message: 'What would you like to do?',
           choices: ['View all departments.',
                    'View all roles.',
                    'View all employees.',
                    'Add a department.',
                    'Add a role.',
                    'Add an employee.',
                    'Update an employee role.',
                    'Exit']
       }
    ])
    .then(answer=>{
        if (answer.init === 'View all departments.'){
            view.viewDepartments()
        }
        if (answer.init === 'View all roles.'){
            view.viewRoles()
         }
         if (answer.init === 'View all employees.'){
            view.viewEmployees()
         }
         if (answer.init === 'Add a department.'){
            return inquirer.prompt([
                {
                    name: "name",
                    type: "input",
                    message: "What is the department name?",
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log('You need to enter a department name!');
                          return false;
                        }
                    }
                }
            ])
            .then(answer=>{
                add.addDepartment(answer)
            })
         }
         if (answer.init === 'Add a role.'){
            return console.log('success')
         }
         if (answer.init === 'Add an employee.'){
            return console.log('success')
         }
         if (answer.init === 'Update an employee role.'){
            return console.log('success')
         }
         if (answer.init === 'Exit'){
            console.log('Goodbye')
            process.exit()
         }
    })
    })
}