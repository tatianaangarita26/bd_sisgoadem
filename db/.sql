-- Crear la base de datos del restaurante
CREATE DATABASE sisgoadem;

-- Usar la base de datos
USE sisgoadem;

-- Crear la tabla de Clientes
CREATE TABLE clientes (
    id_clientes INT PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    telefono VARCHAR(15),
    email VARCHAR(100),
    direccion VARCHAR(200),
    fechaRegistro DATE
);

-- Crear la tabla de Facturación
CREATE TABLE facturacion (
    id_facturacion INT PRIMARY KEY,
    id_clientes INT,
    id_pedido INT,
    hora TIME,
    fecha DATE,
    platos VARCHAR(255),
    bebidas VARCHAR(255),
    cantidad_platos VARCHAR(45),
    valor_unitario VARCHAR(255),
    valor_total DECIMAL(10, 2),
    
);

-- Crear la tabla de Pedidos
CREATE TABLE pedidos (
    id_pedidos INT PRIMARY KEY,
    id_clientes INT,
    fecha_pedido DATE,
    hora_solicitud TIME,
    hora_entrega TIME,
    estado VARCHAR(50),
    id_platos INT
);

-- Crear la tabla de Platos
CREATE TABLE platos (
    id_platos INT PRIMARY KEY,
    nombre_plato VARCHAR(100),
    descripcion TEXT,
    imagen VARCHAR(255),
    id_bebidas INT
);

-- Crear la tabla de Bebidas
CREATE TABLE bebidas (
    id_bebidas INT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    imagen VARCHAR(255)
    precio VARCHAR(255),
    
);

-- Crear la tabla de Empleados
CREATE TABLE empleados (
    id_empleados INT PRIMARY KEY,
    id_rol INT,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    fecha_contratacion DATE,
    horario VARCHAR(50),
    salario VARCHAR(255),
    contacto VARCHAR(100)
);

-- Crear la tabla de Roles
CREATE TABLE roles (
    id_rol INT PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion TEXT
);

-- Crear la tabla de Proveedores
CREATE TABLE proveedores (
    id_proveedores INT PRIMARY KEY,
    id_producto INT,
    nombre VARCHAR(100),
    contacto VARCHAR(100),
    empresa VARCHAR(100),
    correo VARCHAR(100),
    direccion VARCHAR(200),
    total_productos INT,
    historial_compras TEXT
    id_inventario INT,
);

-- Crear la tabla de Inventario
CREATE TABLE inventario (
    id_inventario INT PRIMARY KEY,
    nombre VARCHAR(100),
    cantidad_en_stock INT,
    fecha_reposicion DATE,
    id_proveedores INT
);

-- Crear la tabla de Gastos
CREATE TABLE gastos (
    id_gastos INT PRIMARY KEY,
    tipo_gastos VARCHAR(100),
    fecha DATE,
    monto VARCHAR(255),
    descripcion TEXT
);

-- Crear la tabla de Producto
CREATE TABLE producto (
    id_producto INT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio_unitario VARCHAR(255),
    cantidad_insumo INT,
    categoria VARCHAR(50),
    ingredientes TEXT,
    producto_imagen VARCHAR(255),
    id_pedidos_cocina INT
);

-- Crear la tabla de Pedidos_Cocina
CREATE TABLE pedidos_cocina (
    id_pedidos_cocina INT PRIMARY KEY,
    id_producto INT,
    cantidad INT,
    estado_pedido VARCHAR(50),
    notas_adicionales TEXT,
    id_empleados INT
);

-- Crear la tabla de Ventas
CREATE TABLE ventas (
    id_ventas INT PRIMARY KEY,
    fechaVenta DATETIME NOT NULL,
    cajero INT,
    totalVenta VARCHAR(255),
    metodoPago VARCHAR(50),
    mesa INT,
    productos_vendidos TEXT,
    id_empleados INT,
    id_mesas INT
);

-- Crear la tabla de Detalles de Ventas
CREATE TABLE detalles_venta (
    id_detalle_ventas INT PRIMARY KEY,
    id_venta INT,
    id_producto INT,
    cantidad INT NOT NULL,
    precioUnitario VARCHAR(255) NOT NULL
);

-- Crear la tabla de Mesas
CREATE TABLE mesas (
    id_mesas INT PRIMARY KEY,
    numeroMesa INT NOT NULL,
    capacidad INT NOT NULL
);

-- Crear la tabla de Reservas
CREATE TABLE reservas (
    id_reservas INT PRIMARY KEY,
    fechaHoraReserva DATETIME NOT NULL,
    numComensales INT NOT NULL,
    estadoReserva VARCHAR(50),
    mesa
    id_clientes INT,
    id_mesas INT
);

-- Crear la tabla de Caja
CREATE TABLE caja (
    id_caja INT PRIMARY KEY,
    nombre_plato VARCHAR(100),
    precio VARCHAR(255),
    tipo_pago VARCHAR(50),
    id_facturacion
    id_cajero
);

-- Crear la tabla de Cajaro
CREATE TABLE cajero (
    id_cajero INT AUTO_INCREMENT PRIMARY KEY,
    fecha_Hora_Apertura DATETIME,
    fecha_Hora_Cierre DATETIME,
    Saldo_Inicial DECIMAL(10, 2),
    Saldo_Final DECIMAL(10, 2),
    Ventas_Totales DECIMAL(10, 2)
    id_empleados
);

-- Crear la tabla de Menú
CREATE TABLE menu (
    id_menu
    id_platos INT AUTO_INCREMENT PRIMARY KEY,
    Nombre_Plato VARCHAR(255),
    Descripcion TEXT,
    Precio DECIMAL(10, 2),
    Tipo_Plato ENUM('entrante', 'plato_principal', 'postre', 'bebida'),
    Ingredientes TEXT
);

-- Crear la tabla de Ingresos
CREATE TABLE ingresos (
    id_ingreso INT AUTO_INCREMENT PRIMARY KEY,
    Fecha_Hora_Transaccion DATETIME,
    Fuente_Ingresos VARCHAR(255),
    Monto_Ingreso DECIMAL(10, 2)
    id_caja
);


-- Crear la tabla de Cuentas Bancarias
CREATE TABLE Cuentas_Bancarias (
    id_Cuenta_Bancaria INT AUTO_INCREMENT PRIMARY KEY,
    Nombre_Cuenta VARCHAR(255),
    Tipo_Cuenta VARCHAR(255),
    Saldo_Actual DECIMAL(10, 2)
    id_ingresos
);

-- Crear la tabla de Transacciones Bancarias
CREATE TABLE Transacciones_Bancarias (
    id_Transaccion INT AUTO_INCREMENT PRIMARY KEY,
    Fecha_Hora_Transaccion DATETIME,
    Tipo_Transaccion VARCHAR(255),
    Monto_Transaccion DECIMAL(10, 2),
    Descripcion_Transaccion TEXT,
    id_Cuenta_Bancaria INT,
);

-- Crear la tabla de Reportes Financieros
CREATE TABLE Reportes_Financieros (
    id_Reporte INT AUTO_INCREMENT PRIMARY KEY,
    Fecha_Reporte DATE,
    Resumen_Ingresos_Totales DECIMAL(10, 2),
    Resumen_Gastos_Totales DECIMAL(10, 2),
    Ganancias_Netas DECIMAL(10, 2),
    Otros_Indicadores_Financieros TEXT
);


-- Crear la tabla de Usuarios 
CREATE TABLE Usuarios (
    id_Usuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre_Usuario VARCHAR(255),
    Numero_Identificacion VARCHAR(255),
    Contraseña VARCHAR(255),
    Nivel_Acceso ENUM('cajero', 'supervisor', 'administrador')
);

