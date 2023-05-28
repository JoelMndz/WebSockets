create database if not exists usuariosdb;

use usuariosdb;

create table usuarios(
    nombre varchar(100),
    apellido varchar(100),
    edad int,
    sexo varchar(100)    
);

create table staff(
	id int auto_increment primary key,
	nombres varchar(100),
    email varchar(100),
    password varchar(100),
    dosFA text,
    qr text
);