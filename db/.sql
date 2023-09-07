/*GRUPO 1*/
CREATE DATABASE IF NOT EXISTS sisgoadem;
USE sisgoadem;
CREATE TABLE inventario(
    id_inventario INT(11) PRIMARY KEY,
    nombre VARCHAR(45) DEFAULT NULL,
    cantidad_en_stock VARCHAR(45) DEFAULT NULL,
    fecha_reposicion VARCHAR(45) 
    id_proveedores INT(11),
);

CREATE TABLE proveedores(
    id_proveedores INT(11) PRIMARY KEY,
    id_producto INT(11),
    nombre VARCHAR(45) DEFAULT NULL,
    contacto VARCHAR(45) DEFAULT NULL,
    empresa VARCHAR(45) DEFAULT NULL,
    correo VARCHAR(45) DEFAULT NULL,
    direccion VARCHAR(45) DEFAULT NULL,
    total_productos VARCHAR(45) DEFAULT NULL,
    historial_compras VARCHAR(100) DEFAULT NULL,
    id_inventario INT(11),
);

CREATE TABLE producto(
    id_producto INT(11) PRIMARY KEY,
    nombre VARCHAR(45) DEFAULT NULL,
    descripcion VARCHAR(100) DEFAULT NULL,
    precio_unitario VARCHAR(45) DEFAULT NULL,
    cantidad_insumo VARCHAR(45) DEFAULT NULL,
    categoria VARCHAR(45) DEFAULT NULL,
    ingredientes VARCHAR(200) DEFAULT NULL,
    producto_imagen VARCHAR(45) DEFAULT NULL,
    id_pedidos_cocina INT(11),
);

CREATE TABLE pedidos_cocina(
    id_pedidos_cocina INT(11) PRIMARY KEY,
    id_producto INT(11),
    cantidad INT(45) DEFAULT NULL,
    estado_pedido VARCHAR(45) DEFAULT NULL,
    notas_adicionales VARCHAR(100) DEFAULT NULL,
    id_empleados INT (11),
);

CREATE TABLE empleados(
    id_empleados INT(11) PRIMARY KEY,
    id_usuario INT(11),
    nombre VARCHAR(45) DEFAULT NULL,
    apellido VARCHAR(45)DEFAULT NULL,
    fecha_contratacion VARCHAR(40) DEFAULT NULL,
    horario VARCHAR(70) DEFAULT NULL,
    salario VARCHAR(45) DEFAULT NULL,
    contacto INT(35) DEFAULT NULL,
);

CREATE TABLE usuario(
    id_usuario INT(11) PRIMARY KEY,
    nombre_usuario VARCHAR(45) DEFAULT NULL,
    numero_identificacion INT(20) DEFAULT NULL,
    contraseña VARCHAR(45) DEFAULT NULL,
    nivel_acceso VARCHAR(45) DEFAULT NULL,
    id_adm INT(11) DEFAULT NULL,
);

CREATE TABLE Administrador(
    id_adm INT(11) PRIMARY KEY,
    nombre VARCHAR(45) DEFAULT NULL,
    descripcion VARCHAR(200) DEFAULT NULL,
);

/*GRUPO 2*/

CREATE TABLE detalles_venta(
    id_detalle_ventas INT(11) PRIMARY KEY,
    id_ventas INT(11) DEFAULT NULL,
    id_producto INT(11) DEFAULT NULL,
    cantidad INT(20) DEFAULT NULL,
    precio_unitario VARCHAR(50) DEFAULT NULL,
);

CREATE TABLE ventas(
    id_ventas INT(11) DEFAULT NULL,
    fechaVenta VARCHAR(45) DEFAULT NULL,
    Cajero VARCHAR(45) DEFAULT NULL,
    totalVenta VARCHAR(45) DEFAULT NULL,
    metodoPago VARCHAR (50) DEFAULT NULL,
    mesa VARCHAR(45) DEFAULT NULL,
    productos_vendidos VARCHAR(100) DEFAULT NULL,
    id_empleados INT(11) DEFAULT NULL,
    id_mesas INT(11) DEFAULT NULL,
);

CREATE TABLE mesas(
    id_mesas INT(11) PRIMARY KEY,
    numeroMesa VARCHAR(45) DEFAULT NULL,
    capacidad VARCHAR(50) DEFAULT NULL,
);