import { pool } from '../db.js'

export const getProductos = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM producto')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}

export const getProducto = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM producto WHERE id_producto = ?', [
            req.params.id,
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Producto no encontrado',
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    } 
};

export const createProductos = async (req,res) => {
    try{
        const {id_producto, nombre, descripcion, precio, catidad_inventario, id_proveedores} = req.body
        const [rows] = await pool.query(
<<<<<<< HEAD
            "INSERT INTO producto (id_producto, nombre, descripcion, precio, catidad_inventario, id_proveedores) VALUES (?, ?, ?, ?, ?, ?)",
             [id_producto, nombre, descripcion, precio, catidad_inventario, id_proveedores]
        );
=======
            "INSERT INTO producto (nombre, descripcion, precio, catidad_inventario) VALUES (?, ?, ?, ?)",
             [nombre, descripcion, precio, catidad_inventario]);
>>>>>>> 0746495bc1e48343031521f29728ffce76a23b00
    res.send({ 
        id_producto: rows.insertId,
        nombre,
        descripcion,
        precio,
        catidad_inventario, 
        id_proveedores
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};


export const deleteProducto = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM producto WHERE id_producto = ?', [
            req.params.id,
        ]);
    
        if(result.affectedRows <= 0)
         return res.status(404).json({
         message: 'Producto no encontrado',
        });
        res.sendStatus(204);
    }  catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};  

export const updateProducto = async (req,res) => {
    try{
        const {id_producto} = req.params;
        const {nombre, descripcion, precio, catidad_inventario, id_proveedores} = req.body;

        const [result] = await pool.query(
            "UPDATE producto SET nombre= IFNULL(?, nombre), descripcion = IFNULL(?,descripcion), precio = IFNULL(?,precio), catidad_inventario = IFNULL(?, catidad_inventario ), id_proveedores = IFNULL(?, id_proveedores)  WHERE id_producto = ?",
             [nombre, descripcion, precio, catidad_inventario, id_proveedores, id_producto]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Producto no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM producto WHERE id_producto = ?',[
        id_producto,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};