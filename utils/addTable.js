const db = require('../db/connection')
const index = require('./initialPrompt')

const addDepartment = (param) => {
    const sql = `INSERT INTO departments (department_name) VALUES (?)`
    param = param.name
    console.log(param)
    db.query(sql, param, (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        console.log(param + ' has been added.')
        index.init()
    })
}

const addRole = () => {
    const sql = `INSERT INTO roles (department_name) VALUES (?)`
    param = param.name
    console.log(param)
    db.query(sql, param, (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        console.log(param + ' has been added.')
        index.init()
    })
}

const addEmployee = () => {
    const sql = `SELECT * FROM employees`
    db.query(sql, (err, rows) =>{
        if(err){
            console.log(err)
            return
        }
        console.table(rows)
        index.init()
    })
}

module.exports = {addDepartment, addEmployee, addRole}