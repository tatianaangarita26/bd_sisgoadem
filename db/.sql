/*GRUPO 1*/
CREATE DATABASE IF NOT EXISTS sisgoadem;
USE sisgoadem;
CREATE TABLE inventario(
    id_inventario INT(11) PRIMARY KEY,
    nombre VARCHAR(45) DEFAULT NULL,
    cantidad_en_stock VARCHAR(45) DEFAULT NULL,
    fecha_reposicion VARCHAR(45) 
    id_proveedores INT(11)
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
    id_inventario INT(11)
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
    id_pedidos_cocina INT(11)
);

CREATE TABLE pedidos_cocina(
    id_pedidos_cocina INT(11) PRIMARY KEY,
    id_producto INT(11),
    cantidad INT(45) DEFAULT NULL,
    estado_pedido VARCHAR(45) DEFAULT NULL,
    notas_adicionales VARCHAR(100) DEFAULT NULL,
    id_empleados INT (11)
);

CREATE TABLE empleados(
    id_empleados INT(11) PRIMARY KEY,
    id_usuario INT(11),
    nombre VARCHAR(45) DEFAULT NULL,
    apellido VARCHAR(45)DEFAULT NULL,
    fecha_contratacion VARCHAR(40) DEFAULT NULL,
    horario VARCHAR(70) DEFAULT NULL,
    salario VARCHAR(45) DEFAULT NULL,
    contacto INT(35) DEFAULT NULL
);

CREATE TABLE usuario(
    id_usuario INT(11) PRIMARY KEY,
    nombre_usuario VARCHAR(45) DEFAULT NULL,
    numero_identificacion INT(20) DEFAULT NULL,
    contraseña VARCHAR(45) DEFAULT NULL,
    nivel_acceso VARCHAR(45) DEFAULT NULL,
    id_adm INT(11) DEFAULT NULL
);

CREATE TABLE Administrador(
    id_adm INT(11) PRIMARY KEY,
    nombre VARCHAR(45) DEFAULT NULL,
    descripcion VARCHAR(200) DEFAULT NULL
);

/*GRUPO 2*/

CREATE TABLE detalles_venta(
    id_detalle_ventas INT(11) PRIMARY KEY,
    id_ventas INT(11) DEFAULT NULL,
    id_producto INT(11) DEFAULT NULL,
    cantidad INT(20) DEFAULT NULL,
    precio_unitario VARCHAR(50) DEFAULT NULL
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
    id_mesas INT(11) DEFAULT NULL
);

CREATE TABLE mesas(
    id_mesas INT(11) PRIMARY KEY,
    numeroMesa VARCHAR(45) DEFAULT NULL,
    capacidad VARCHAR(50) DEFAULT NULL
);

CREATE TABLE reservas(
    id_reservas INT(11) PRIMARY KEY,
    fechaHoraReserva VARCHAR(70) DEFAULT NULL,
    numComensales VARCHAR(45) DEFAULT NULL,
    estadoReserva VARCHAR(45) DEFAULT NULL,
    mesa VARCHAR(40) DEFAULT NULL,
    id_cliente INT(11) DEFAULT NULL,
    id_mesas INT(11) DEFAULT NULL
 );

CREATE TABLE clientes (
    id_cliente INT(11) PRIMARY KEY,
    nombre VARCHAR(45) DEFAULT NULL,
    apellido VARCHAR(45) DEFAULT NULL,
    telefono VARCHAR(45) DEFAULT NULL UNIQUE
    email VARCHAR(45) DEFAULT NULL,
    direccion VARCHAR(45) DEFAULT NULL,
    fachaRegistro VARCHAR(45) DEFAULT NULL
);

CREATE TABLE facturacion (
    id_facturacion INT(11) PRIMARY KEY,
    id_cliente INT(11) DEFAULT NULL,
    id_pedido INT(11) DEFAULT NULL,
    hora VARCHAR(45) DEFAULT NULL,
    fecha VARCHAR(45) DEFAULT NULL,
    platos VARCHAR(70) DEFAULT NULL,
    bebidas VARCHAR(40) DEFAULT NULL,
    cantidad_platos VARCHAR(20) DEFAULT NULL,
    valor_unitario VARCHAR(30) DEFAULT NULL,
    valor_total VARCHAR(30) DEFAULT NULL,
    id_caja INT(11) DEFAULT NULL
);

CREATE TABLE pedidos(
    id_pedido INT(11) PRIMARY KEY,
    id_cliente INT (11) DEFAULT NULL,
    fecha_pedido VARCHAR(45) DEFAULT NULL,
    hora_solicitud VARCHAR(45) DEFAULT NULL,
    estado VARCHAR(50) DEFAULT NULL,
    id_mesas INT(11) DEFAULT NULL,
    id_menu INT(11) DEFAULT NULL
);

CREATE TABLE menu (
    id_menu INT(11) PRIMARY KEY,
    id_platos INT(11) DEFAULT NULL,
    nombre_plato VARCHAR(50) DEFAULT NULL,
    descripcion VARCHAR(200) DEFAULT NULL,
    precio VARCHAR(45) DEFAULT NULL,
    tipo_plato VARCHAR(50) DEFAULT NULL,
    ingredientes VARCHAR(200) DEFAULT NULL
);

CREATE TABLE platos(
    id_platos INT(11) PRIMARY KEY,
    nombre_plato VARCHAR(50) DEFAULT NULL,
    descripcion VARCHAR(200) DEFAULT NULL,
    imagen VARCHAR(50) DEFAULT NULL,
    id_bebidas INT(11) DEFAULT NULL,
    id_pedidos_cocina INT(11) DEFAULT NULL
);

CREATE TABLE bebidas(
    id_bebidas INT(11) PRIMARY KEY,
    nombre VARCHAR(50) DEFAULT NULL,
    descripcion VARCHAR(200) DEFAULT NULL,
    precio VARCHAR(50) DEFAULT NULL,
    imagen VARCHAR(50) DEFAULT NULL
);


/*GRUPO 3*/

CREATE TABLE transacciones_bancarias(
    id_transaccion INT(11) PRIMARY KEY,
    fecha_hora_transaccion VARCHAR(100) DEFAULT NULL,
    tipo_transaccion VARCHAR(50) DEFAULT NULL,
    descripcion_transaccion VARCHAR(200) DEFAULT NULL,
    id_cuenta_bancaria INT(11) DEFAULT NULL
);


CREATE TABLE cuentas_bancarias(
    id_cuenta_bancaria INT(11) PRIMARY KEY,
    nombre_cuenta VARCHAR(50) DEFAULT NULL,
    tipo_cuenta VARCHAR(50) DEFAULT NULL,
    saldo_actual VARCHAR(50) DEFAULT NULL,
    id_ingresos INT(11) DEFAULT NULL
);

CREATE TABLE ingresos (
    id_ingresos INT(11) PRIMARY KEY,
    fecha_hora_transaccion VARCHAR(70) DEFAULT NULL,
    fuente_ingresos VARCHAR(50) DEFAULT NULL,
    monto_ingreso VARCHAR(50) DEFAULT NULL,
    id_caja INT(11) DEFAULT NULL
);

CREATE TABLE caja(
    id_caja INT(11) PRIMARY KEY,
    nombre_plato VARCHAR(50) DEFAULT NULL,
    precio VARCHAR(50) DEFAULT NULL,
    tipo_pago VARCHAR(50) DEFAULT NULL,
    id_facturacion INT(11) DEFAULT NULL,
    id_cajero INT(11) DEFAULT NULL
);

CREATE TABLE gastos(
    id_gastos INT(11) PRIMARY KEY,
    tipo_gastos VARCHAR(50) DEFAULT NULL,
    fecha VARCHAR(40) DEFAULT NULL,
    monto VARCHAR(50) DEFAULT NULL,
    descripcion VARCHAR(200) DEFAULT NULL,
    id_caja INT(11) DEFAULT NULL
);

CREATE TABLE reportes_financieros(
    id_reporte INT(11) PRIMARY KEY,
    fecha_reporte VARCHAR(45) DEFAULT NULL,
    resumen_ingresos_totales VARCHAR(100) DEFAULT NULL,
    resumen_gastos_totales VARCHAR(100) DEFAULT NULL,
    ganancias_netas VARCHAR(100) DEFAULT NULL,
    otros_indicadores VARCHAR(200) DEFAULT NULL,
    id_caja INT(11) DEFAULT NULL
);

CREATE TABLE cajero(
    id_cajero INT(11) DEFAULT NULL,
    fecha_hora_apertura VARCHAR(50) DEFAULT NULL,
    fecha_hora_cierre VARCHAR(50) DEFAULT NULL,
    saldo_inicial VARCHAR(45) DEFAULT NULL,
    saldo_final VARCHAR(45) DEFAULT NULL,
    ventas_totales VARCHAR(45) DEFAULT NULL,
    id_empleados INT(11) DEFAULT NULL
);