const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "wiki_game"
});

connection.connect((error) => { 
    if (!!error){
        console.log(error);
    }else{
        console.log("Database connected...");
    } 
})

module.exports = connection;