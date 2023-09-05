CREATE DATABASE IF NOT EXISTS sisgoadem;
USE sisgoadem;
CREATE TABLE cliente (
    id_cliente INT(11) PRIMARY KEY,
    nombre VARCHAR(45) DEFAULT NULL,
    apellido VARCHAR(45) DEFAULT NULL,
    telefono VARCHAR(45) DEFAULT NULL UNIQUE
);

INSERT INTO cliente VALUES
(1, 'Monica Andrea', 'Polanco Suarez', '3125825546'),
(2, 'Sergio Andres', 'Narvaez Fernandez', '3153128849'),
(3, 'Maria Paula', 'Embus Polanco', '3202472368'),
(4, 'Karol Tatiana', 'Angarita Valero', '3128819399'),

(5, 'Carlos Daniel', 'Leal Florez', '3115648523'),
(6, 'Mark', 'Martinez Kabo', '3225486186'),
(7, 'Laura Dayanna', 'Lasso Ortega', '3215486321'),
(8, 'Luis Eduard', 'Martinez', '3125486132'),
(9, 'Gabriela', 'Hernandez Arguello', '3154862559'),
(10, 'Cristhofer Andres', 'Delgado', '3132564235');

CREATE TABLE facturacion (
    id_factura INT(20) PRIMARY KEY,
    id_cliente INT(45) DEFAULT NULL,
    id_pedido INT(45) DEFAULT NULL,
    hora VARCHAR(45) DEFAULT NULL,
    fecha VARCHAR(45) DEFAULT NULL
);

INSERT INTO facturacion VALUES
(100, 1, 200, '03:00 p.m', '25-08-2023'),
(101, 2, 201, '04:30 p.m', '25-08-2023'),
(102, 3, 202, '06:00 p.m', '27-03-2023'),
(103, 4, 203, '08:00 p.m', '28-09-2023'),

(104, 5, 204, '01:30 p.m', '25-07-2023'),
(105, 6, 205, '12:30 p.m', '11-09-2023'),
(106, 7, 206, '4:00 p.m', '02-09-2023'),
(107, 8, 207, '11:20 a.m', '15-07-2023'),
(108, 9, 208, '12:00 p.m', '06-08-2023'),
(109, 10, 209, '11:30 p.m', '30-08-2023');


CREATE TABLE pedidos (
    id_pedido INT(20) PRIMARY KEY,
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

(204, '07:00 p.m', '25-06-2023', "Cancelado", 304),
(205, '03:45 p.m', '13-10-2023', "Activo", 305),
(206, '06:00 p.m', '09-11-2023', "Pendiente", 306),
(207, '02:35 p.m', '27-09-2023', "Activo", 307),
(208, '08:20 p.m', '19-12-2023', "Cancelado", 308),
(209, '05:30 p.m', '21-11-2023', "Pendiente", 309);



CREATE TABLE platos (
    id_plato INT(20) PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    Estado ENUM("Activo", "Agotado"),
    precio VARCHAR(50) NOT NULL
);  

INSERT INTO platos VALUES
(303, "Cerdo", "arroz mazorca y aguacate", "Activo", "$65.000");
(303, "Cerdo", "arroz mazorca y aguacate", "Activo", "$65.000"),
(304, "Arroz", "arroz mazorca y aguacate", "Activo", "$58.000"),

(305, "Carne", "arroz mazorca y aguacate", "Activo", "$58.000"),
(306, "Pescado", "arroz mazorca y aguacate", "Activo", "$58.000"),
(307, "Pollo", "arroz mazorca y aguacate", "Agotado", "$48.000"),
(308, "Pollo", "arroz mazorca y aguacate", "Agotado", "$48.000"),
(309, "Arroz", "arroz mazorca y aguacate", "Activo", "$58.000");

CREATE TABLE proveedores (
    id_proveedores INT(20) PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    contacto VARCHAR(40) NOT NULL,
    empresa VARCHAR(40) NOT NULL,
    id_producto INT(40) NOT NULL
);  

INSERT INTO proveedores VALUES
(400, "Carlos Rodriguez", "320247236879", "Zenu", 500 ),
(401, "Gilberto Amado", "3159874562", "TropiHuila", 501 ),
(402, "Esperanza Suarez", "32148965721", "UnoA", 502 ),
(403, "Ofelia Ramon", "3142502005", "Distribuciones Cardenaz", 503 ),

(404, "Hector Ramirez", "3154862643", "CARNES SANTACRUZ", 504 ),
(405, "Daniela Martinez", "3215488623", "Multimerca", 505 ),
(406, "Karla Fernandez", "3225468557", "PASEO GOURMET SAS", 506 ),
(407, "Felix Meza", "3214863321", "Pacific Burguer E.u.", 507 ),
(408, "Cristian Isaza", "3134685238", "El Corraje", 508 ),
(409, "Thalia Gallego", "3124861005", "La Tinaja", 509 );

CREATE TABLE producto (
    id_producto INT(20) PRIMARY KEY,
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
(503, "Distribuciones Cardenaz", "Salsas", "$350.000",  15, 403),

(504, "CARNES SANTACRUZ", "Carne de Cerdo", "$260.000",  20, 404),
(505, "Multimerca", "Multimercado", "$500.000",  18, 405),
(506, "PASEO GOURMET SAS", "Carne", "$350.000",  30, 406),
(507, "Pacific Burguer E.u.", "Pollo", "$340.000",  40, 407),
(508, "El Corraje", "Carne de Cerdo", "$390.000",  20, 408),
(509, "La Tinaja", "Maiz", "$160.000",  45, 409);

CREATE TABLE empleados (
    id_empleado INT(20)PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    salario VARCHAR(50) NOT NULL
);  

INSERT INTO empleados VALUES
(600, "Camilo", "Ceballes", "$150.000"),
(601, "Andres", "Jose", "$850.000"),
(602, "Karen", "Villanueva", "$360.148"),
(603, "Jose", "Embus", "$500.000"),

(604, "Jaime", "Leal", "$460.300"),
(605, "David", "Smith", "$650.000"),
(606, "Paola", "Gabo", "$450.000"),
(607, "Michael", "Gomez", "$240.500"),
(608, "Alejandra", "Botina", "$762.000"),
(609, "Angie", "Coral", "$700.000");


CREATE TABLE roles (
    id_rol INT(20) PRIMARY KEY,
    id_empleado INT(45) NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    cargo VARCHAR(50) NOT NULL
); 

INSERT INTO roles VALUES
(700, 600, "Camilo", "Ceballes","Cajero"),
(701, 601, "Andres", "Jose","Cajero"),
(702, 602, "Karen", "Villanueva","Mesero"),
(703, 603, "Jose", "Embus","Mesero"),

(704, 604, "Jaime", "Leal", "Mesero"),
(705, 605, "David", "Smith", "Repartidora delivery"),
(706, 606, "Paola", "Gabo", "Repartidora delivery"),
(707, 607, "Michael", "Gomez", "Mesero"),
(708, 608, "Alejandra", "Botina ","Cocinero"),
(709, 609, "Angie", "Coral", "Administrador");
