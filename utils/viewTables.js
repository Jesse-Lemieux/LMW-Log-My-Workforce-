const db = require('../db/connection')
const index = require('./initialPrompt')

const viewDepartments = () => {
    const sql = `SELECT * FROM departments`
    db.query(sql, (err, rows) =>{
        if(err){
            console.log(err)
            return
        }
        console.table(rows)
        index.init()
    })
}

const viewRoles = () => {
    const sql = `SELECT * FROM roles`
    db.query(sql, (err, rows) =>{
        if(err){
            console.log(err)
            return
        }
        console.table(rows)
        index.init()
    })
}

const viewEmployees = () => {
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

module.exports = {viewDepartments, viewEmployees, viewRoles}