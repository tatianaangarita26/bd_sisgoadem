CREATE DATABASE IF NOT EXISTS sisgoadem;
USE sisgoadem;
CREATE TABLE cliente (
    id_cliente INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    apellido VARCHAR(45) DEFAULT NULL,
    telefono INT(45) DEFAULT NULL UNIQUE
);

CREATE TABLE facturacion (
    id_factura INT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_cliente INT(45) DEFAULT NULL,
    id_pedido INT(45) DEFAULT NULL,
    hora VARCHAR(45) DEFAULT NULL,
    fecha VARCHAR(45) DEFAULT NULL
);

CREATE TABLE pedido (
    id_pedido INT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    hora VARCHAR(45) NOT NULL,
    fecha VARCHAR(45) NOT NULL,
    Estado ENUM("Activo", "Pendiente", "Cancelado"),
    id_platos INT(20) NOT NULL
);  

CREATE TABLE platos (
    id_plato INT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    Estado ENUM("Activo", "Agotado"),
    precio VARCHAR(50) NOT NULL
);  

CREATE TABLE proveedores (
    id_proveedores INT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    contacto VARCHAR(40) NOT NULL,
    empresa VARCHAR(40) NOT NULL,
    id_producto INT(40) NOT NULL
);  

CREATE TABLE producto (
    id_producto INT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    precio VARCHAR(50) NOT NULL,
    catidad_inventario INT(50) NOT NULL,
    id_proveedores INT(20) NOT NULL
);  

CREATE TABLE empleados (
    id_empleado INT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    salario VARCHAR(50) NOT NULL
);  

CREATE TABLE roles (
    id_rol INT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_empleado INT(45) NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    cargo VARCHAR(50) NOT NULL
); 