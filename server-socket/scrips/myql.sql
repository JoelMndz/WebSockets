create database if not exists usuariosdb;
use usuariosdb;
create table usuarios(
    nombre varchar(100),
    apellido varchar(100),
    edad int,
    sexo varchar(100)    
);