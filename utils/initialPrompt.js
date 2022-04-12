const inquirer = require('inquirer')
const db = require('../db/connection')
const view = require('./viewTables')
const add = require('./addTable')
const update = require('./updateTable')

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
                    'Update an employee manager',
                    'View employees by department',
                    'Delete a department',
                    'Delete a role',
                    'Delete an employee',
                    'View department budgets',
                    'Exit']
       }
    ])
    .then(answer=>{
        if (answer.init === 'View all departments.'){
            view.viewDepartments();
        }
        if (answer.init === 'View all roles.'){
            view.viewRoles();
         }
         if (answer.init === 'View all employees.'){
            view.viewEmployees();
         }
         if (answer.init === 'Add a department.'){
            add.addDepartment();
         }
         if (answer.init === 'Add a role.'){
            add.addRole();
         }
         if (answer.init === 'Add an employee.'){
            add.addEmployee();
         }
         if (answer.init === 'Update an employee role.'){
            update.updateEmployee();
         }
         if (answer.init === 'Update an employee manager'){
            update.updateManager();
        }
        if (answer.init === 'View employees by department'){
          
        }
        if (answer.init === 'Delete a department'){
          
        }
        if (answer.init === 'Delete a role'){
          
        }
        if (answer.init === 'Delete an employee'){
          
        }
        if (answer.init === 'View department budgets'){
          
        }
         if (answer.init === 'Exit'){
            console.log('Goodbye')
            process.exit()
         }
    })
    })
}