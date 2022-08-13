use udemy;

DROP TABLE cats;

CREATE TABLE cats
(
cat_id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100),
breed VARCHAR(100),
age INT,
PRIMARY KEY( cat_id )
);

INSERT INTO cats(name, breed, age) 
VALUES ('Ringo', 'Tabby', 4),
       ('Cindy', 'Maine Coon', 10),
       ('Dumbledore', 'Maine Coon', 11),
       ('Egg', 'Persian', 4),
       ('Misty', 'Tabby', 13),
       ('George Michael', 'Ragdoll', 9),
       ('Jackson', 'Sphynx', 7);

SELECT * FROM cats;
SELECT name, breed FROM cats;
SELECT age FROM cats;
SELECT cat_id FROM cats;

SELECT * FROM cats WHERE age=4;
SELECT * FROM cats WHERE name='Egg';
SELECT * FROM cats WHERE breed ='tabby';
SELECT name, age FROM cats WHERE breed ='tabby';
SELECT cat_id, age FROM cats WHERE cat_id =age;
SELECT * FROM cats WHERE cat_id=age;
SELECT cat_id AS id, name FROM cats;
SELECT name AS 'cat name', breed AS 'kitty breed' FROM cats;

UPDATE cats SET breed = 'Shorthair' WHERE breed='Tabby';
UPDATE cats SET age=14 WHERE name='Misty';

set sql_safe_updates=0;
SELECT * FROM cats WHERE name ='Jackson';
UPDATE cats SET name='jack' WHERE name= 'Jackson';
UPDATE cats SET breed='British Shorthair' WHERE name='Ringo';
SELECT * FROM cats WHERE breed ='Maine Coon';
UPDATE cats SET age =12 Where  breed = 'Maine Coon';

SELECT * FROM cats;
SELECT * FROM cats WHERE name='egg';
DELETE FROM cats WHERE name='Egg';

SELECT * FROM cats WHERE age='4';
DELETE FROM cats WHERE age='4';
SELECT * FROM cats WHERE age = cat_id;
DELETE FROM cats WHERE age = cat_id;
DELETE FROM cats;

desc cats;