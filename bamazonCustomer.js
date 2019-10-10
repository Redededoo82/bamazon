var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "jigaboo1982",
    database: "bamazon_db"

});

function displayItems(){

    inquirer.prompt([

        {
            type: 'input',
            name: 'item_id',
            message: 'what uh ya buyin?'
        }

    ]).then(function(input){



    })

};
    displayItems();