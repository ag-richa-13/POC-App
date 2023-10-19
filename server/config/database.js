const mysql = require('mysql2');
const { Sequelize } = require('sequelize');


// Create a connection to the MySQL database
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'local',
  user: 'root',
  password: 'Root@1234',
  database: 'poc',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);
});

// You can execute SQL queries using the 'query' method
connection.query('SELECT * FROM User', (err, results, fields) => {
  if (err) {
    console.error('Error executing the query: ' + err.stack);
    return;
  }
  console.log('Query result: ', results);
});

// Don't forget to close the connection when you're done
connection.end();
