CREATE DATABASE IF NOT EXISTS sisgoadem;
USE sisgoadem;
CREATE TABLE cliente (
    id_cliente INT(11) NOT NULL PRIMARY KEY,
    nombre VARCHAR(45) DEFAULT NULL,
    apellido VARCHAR(45) DEFAULT NULL,
    telefono VARCHAR(45) DEFAULT NULL UNIQUE
);

INSERT INTO cliente VALUES
(1, 'Monica Andrea', 'Polanco Suarez', '3125825546'),
(2, 'Sergio Andres', 'Narvaez Fernandez', '3153128849'),
(3, 'Maria Paula', 'Embus Polanco', '3202472368'),
(4, 'Karol Tatiana', 'Angarita Valero', '3128819399');

CREATE TABLE facturacion (
    id_factura INT(20) PRIMARY KEY NOT NULL,
    id_cliente INT(45) DEFAULT NULL,
    id_pedido INT(45) DEFAULT NULL,
    hora VARCHAR(45) DEFAULT NULL,
    fecha VARCHAR(45) DEFAULT NULL
);

INSERT INTO facturacion VALUES
(100, 1, 200, '03:00 p.m', '25-08-2023'),
(101, 2, 201, '04:30 p.m', '25-08-2023'),
(102, 3, 202, '06:00 p.m', '27-03-2023'),
(103, 4, 203, '08:00 p.m', '28-09-2023');


CREATE TABLE pedidos (
    id_pedido INT(20) NOT NULL PRIMARY KEY,
    hora VARCHAR(45) NOT NULL,
    fecha VARCHAR(45) NOT NULL,
    Estado ENUM("Activo", "Pendiente", "Cancelado"),
    id_platos INT(20) NOT NULL
);  

INSERT INTO pedidos VALUES
(200, '03:00 p.m', '5-08-2023', "Cancelado", 300),
(201, '08:00 p.m', '25-09-2023', "Activo", 301),
(202, '05:00 p.m', '28-08-2023', "Pendiente", 302),
(203, '07:00 p.m', '15-12-2023', "Activo", 303);



CREATE TABLE platos (
    id_plato INT(20) NOT NULL PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    Estado ENUM("Activo", "Agotado"),
    precio VARCHAR(50) NOT NULL
);  

INSERT INTO platos VALUES
(300, "pescado", "arroz mazorca y aguacate", "Activo", "$58.000"),
(301, "Carne", "arroz mazorca y aguacate", "Activo", "$38.000"),
(302, "Pollo", "arroz mazorca y aguacate", "Agotado", "$48.000"),
(303, "Cerdo", "arroz mazorca y aguacate", "Activo", "$65.000");



CREATE TABLE proveedores (
    id_proveedores INT(20) NOT NULL PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    contacto VARCHAR(40) NOT NULL,
    empresa VARCHAR(40) NOT NULL,
    id_producto INT(40) NOT NULL
);  

INSERT INTO proveedores VALUES
(400, "Carlos Rodriguez", "320247236879", "Zenu", 500 ),
(401, "Gilberto Amado", "3159874562", "TropiHuila", 501 ),
(402, "Esperanza Suarez", "32148965721", "UnoA", 502 ),
(403, "Ofelia Ramon", "3142502005", "Distribuciones Cardenaz", 503 );

CREATE TABLE producto (
    id_producto INT(20) NOT NULL PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    precio VARCHAR(50) NOT NULL,
    catidad_inventario INT(50) NOT NULL,
    id_proveedores INT(20) NOT NULL
); 

INSERT INTO producto VALUES
(500, "Zenu", "Salchichas", "$150.000",  50, 400),
(501, "TropiHuila", "Arroz", "$100.000",  20, 401),
(502, "UnoA", "Chocolate", "$200.000",  30, 402),
(503, "Distribuciones Cardenaz", "Salsas", "$350.000",  15, 403);

CREATE TABLE empleados (
    id_empleado INT(20) NOT NULL PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    salario VARCHAR(50) NOT NULL
);  

INSERT INTO empleados VALUES
(600, "Camilo", "Ceballes", "$150.000"),
(601, "Andres", "Jose", "$850.000"),
(602, "Karen", "Villanueva", "$360.148"),
(603, "Jose", "Embus", "$500.000");

CREATE TABLE roles (
    id_rol INT(20) NOT NULL PRIMARY KEY,
    id_empleado INT(45) NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    cargo VARCHAR(50) NOT NULL
); 

INSERT INTO roles VALUES
(700, 600, "Camilo", "Ceballes","Cajero"),
(701, 601, "Andres", "Jose","Cajero"),
(702, 602, "Karen", "Villanueva","Mesero"),
(703, 603, "Jose", "Embus","Mesero");