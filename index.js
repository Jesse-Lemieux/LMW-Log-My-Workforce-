const inquirer = require('inquirer')
const db = require('./db/connection')

const init = () => {
    return inquirer
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
                    'Update an employee role.']
       }
    ])
    .then(answer=>{
        if (answer = 'View all departments.'){
           return console.log('success')
        }
        if (answer = 'View all roles.'){
            return console.log('success')
         }
         if (answer = 'View all employees.'){
            return console.log('success')
         }
         if (answer = 'Add a department.'){
            return console.log('success')
         }
         if (answer = 'Add a role.'){
            return console.log('success')
         }
         if (answer = 'Add an employee.'){
            return console.log('success')
         }
         if (answer = 'Update an employee role.'){
            return console.log('success')
         }
    })
    .then(repeat)
    .then(answer =>{
        if(answer.repeat){
            init()
        }
        else{
        console.log('Goodbye')
        process.exit()
        }
    })
}

const repeat = () => {
    return inquirer
    .prompt([
        {
            type:'confirm',
            name: 'repeat',
            message: 'Perform another action?',
        }
    ])
}

init();
    