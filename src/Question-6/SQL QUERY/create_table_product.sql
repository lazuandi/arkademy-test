CREATE TABLE products (
id INT(6) UNSIGNED AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
category_id INT(6) UNSIGNED,
created_date TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (category_id) REFERENCES product_categories(id)
)