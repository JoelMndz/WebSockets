create database usuariosdb;
go
use usuariosdb;
go
create table usuarios(
    nombre varchar(100),
    apellido varchar(100),
    edad int,
    sexo varchar(100)
);