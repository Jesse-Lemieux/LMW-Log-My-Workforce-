//Export a connection to mysql to be used in all of our functions

const mysql = require('mysql2');
const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'lic2288388',
      database: 'workforce'
    },
    console.log('Connected to the workforce database.')
  );


  
  module.exports = connection;