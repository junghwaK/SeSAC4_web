CREATE DATABASE sesac;
USE sesac;

CREATE TABLE visitor (
id int not null primary key auto_increment,
name varchar(10) not null,
comment mediumtext
);

drop table visitor;

INSERT INTO visitor VALUES( 1, '홍길동', '내가왔다');

DESC visitor;
