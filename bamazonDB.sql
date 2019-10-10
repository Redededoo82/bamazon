DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE DATABASE bamazon_db;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Tomacco', 'Children', 5.75, 9000),
		('Moterized Skateboard', 'Sporting Goods', 6.25, 250),
		('Gluten Free Ebola', 'Grocery', 5.99, 1),
		('Happy Fun Ball', 'Toys', 4.25, 9000),
		('Bag of Glass', 'Toys', 5.99, 800),
		('Bag of Nails', 'Toys', 0.00, 10),
		('Johnny Spaceman', 'Toys', 4.45, 25),
		('Cherokee Tampons', 'Grocery', 4.50, 9000),
		('Shampoo', 'Children', 2.75, 1),
		('Brains', 'Grocery', 12.99, 1),
		('Meat', 'Children', 1.50, 1),
		