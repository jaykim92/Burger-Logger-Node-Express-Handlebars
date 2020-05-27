// set up MYSQL connection
const mysql = require("mysql");
require("dotenv").config();

// set up connection, hide info in a .env file
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DB
});

// start connection
connection.connect(err => {
    if (err) {
        console.error(`Error connecting ${err.stack}`);
        return;
    };
    console.log(`Connected as id ${connection.threadId}`);
});

// export
module.exports = connection;