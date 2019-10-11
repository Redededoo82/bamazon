var inquirer = require('inquirer');
var mysql = require('mysql');



    require("dotenv").config();
var connection = mysql.createConnection({
 host: process.env.DB_HOST,
 port: process.env.DB_PORT,
 user: process.env.DB_USER,
 password: process.env.DB_PASSWORD,
 database: process.env.DB_DATABASE
});




function questions(){

    inquirer.prompt([

        {
            type: 'input',
            name: 'item_id',
            message: 'what uh ya buyin (enter item id)?'
        },{
            type: 'input',
            name: 'stock_quantity',
            message: 'How many?'
        }

    ]).then(function(input) {

		var item = input.item_id;
		var quantity = input.stock_quantity;

		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;


			if (data.length === 0) {
				console.log('I am afraid I can not do that.');
				displayInventory();

			} else {
				var productData = data[0];


				if (quantity <= productData.stock_quantity) {
					console.log('Congratulations, the product you requested is in stock! ');

					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Order confirmed! Your total is $' + productData.price * quantity);
						console.log("\n---------------------------------------------------------------------\n");
						connection.end();

					})
				} else {
					console.log('Sorry, there is not enough product in stock, your order can not be placed.');
					console.log("\n---------------------------------------------------------------------\n");
					

					displayInventory();
				}
			}
		})
	})

};
   

function displayInventory() {

	queryStr = 'SELECT * FROM products';

	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log(' Inventory: ');
		console.log('...................\n');

		var dataTerm = '';
		for (var i = 0; i < data.length; i++) {
			dataTerm = '';
			dataTerm += 'Item ID: ' + data[i].item_id + '  //  ';
			dataTerm += 'Product Name: ' + data[i].product_name + '  //  ';
			dataTerm += 'Department: ' + data[i].department_name + '  //  ';
			dataTerm += 'Price: $' + data[i].price + ' // ';
            dataTerm += 'In Stock: ' + data[i].stock_quantity + '\n';
			console.log(dataTerm);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	questions();
	})
}

function bamazon() {

    displayInventory();
    
}

bamazon();