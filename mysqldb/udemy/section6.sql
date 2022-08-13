CREATE TABLE shirts (
shirt_id INT NOT NULL auto_increment primary key,
article VARCHAR(100),
color VARCHAR(100),
shirt_size VARCHAR(100),
last_worn int);

INSERT INTO shirts (article, color, shirt_size, last_worn) VALUES ('t-shirt', 'white', 'S', 10),
('t-shirt', 'green', 'S', 200),
('polo shirt', 'black', 'M', 10),
('tank top', 'blue', 'S', 50),
('t-shirt', 'pink', 'S', 0),
('polo shirt', 'red', 'M', 5),
('tank top', 'white', 'S', 200),
('tank top', 'blue', 'M', 15);

INSERT INTO shirts (article, color, shirt_size, last_worn) 
VALUE ('polo shirt', 'purple', 'M', 50);

SELECT * FROM shirts;

SELECT article, color FROM shirts;
SELECT * FROM shirts WHERE shirt_size='M';
SELECT article, color, shirt_size, last_worn FROM shirts WHERE shirt_size='M';

SELECT * FROM shirts WHERE article = 'polo shirt';
UPDATE shirts SET shirt_size='L' WHERE shirt_size='M';

SELECT * FROM shirts WHERE last_worn=15;
UPDATE shirts SET last_worn=0 WHERE last_worn=15;

SELECT * FROM shirts WHERE color='white';
UPDATE shirts SET color='off white', shirt_size='XS' WHERE color='white';

SELECT * FROM shirts WHERE last_worn=200;
DELETE FROM shirts WHERE last_worn=200;
select * from shirts;

SELECT * FROM shirts WHERE article='tank top';
DELETE FROM shirts WHERE article='tank top';

DELETE FROM shirts;
DROP table shirts;

show databases;