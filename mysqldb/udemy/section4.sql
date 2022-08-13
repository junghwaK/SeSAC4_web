CREATE DATABASE udemy;

use udemy;
create table cats (
name varchar(50),
age INT
);

INSERT INTO cats (name, age) VALUES( 'blue', 1);
INSERT INTO cats VALUES ("Draco", 2);

insert into cats (name, age)
values('peanut',2)
,('Butter',4)
,('Jelly', 7);

SELECT*FROM cats;

drop tables pastries;
desc pastries;
show tables;

create table people ( 
first_name varchar(20),
last_name varchar(20),
age int);

insert into people (first_name, last_name, age) values('Tina', 'Belcher', 13);
select * from people;
insert into people (first_name, last_name, age) values('Bob', 'Belcher', 42);
insert into people (age, last_name, first_name) values(
45, 'Belcher', 'Linda'),
(38, 'Frond', 'Phillip'),
(70, 'Fishoeder', 'Calvin');
select*from people;
show tables;
desc people;

CREATE TABLE cats3
(
name VARCHAR(20) DEFAULT 'no name provided',
age INT DEFAULT 99
);

INSERT INTO cats3(age) VALUES(13);
INSERT INTO cats3() VALUES();
SELECT * FROM cats3;

DESC cats3;

CREATE TABLE cats4
(
name VARCHAR(100) NOT NULL DEFAULT 'unnamed',
age INT NOT NULL DEFAULT 99
);

INSERT INTO cats4 (name, age) VALUES('Cali',NULL);
INSERT INTO cats(name, age) VALUES('Helena', 6);

CREATE TABLE unique_cats ( cat_id INT NOT NULL,
name VARCHAR(100)
,age int
,primary key (cat_id));

INSERT INTO unique_cats(cat_id, name, age) VALUES(1, 'Fred', 1);
INSERT INTO unique_cats(cat_id, name, age) VALUES(2, 'Louise', 3);
SELECT*FROM unique_cats;
DESC unique_cats;

CREATE TABLE unique_cats2 ( cat_id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100)
,age int
,primary key (cat_id));

INSERT INTO unique_cats2(name, age) VALUES('Skippy', 4);
INSERT INTO unique_cats2(name, age) VALUES('Jiff', 3);

SELECT*FROM unique_cats2;

