CREATE database shooting;
use shooting;

CREATE TABLE game (
id VARCHAR(20) NOT NULL primary key,
password VARCHAR(20) NOT NULL,
name VARCHAR(20) NOT NULL,
profile VARCHAR(20),
gamerank INT
);