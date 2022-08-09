USE sesac;

CREATE TABLE user (
id varchar(20) not null primary key,
password varchar(20) not null,
name varchar(20) not null,
age int not null
);

drop table user;

INSERT INTO user VALUES( 'idd', '12345', '홍길동', '22');

DESC user;