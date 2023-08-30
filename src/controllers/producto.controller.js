import { pool } from '../db.js'

export const getProductos = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM productos')
        res.json(rows)
    } catch (error) {
        return res.sendStatus(error)
    }
}

export const getProducto = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?', [
            req.params.id
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Producto no encontrado'
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
        const {nombre, descripcion, precio, catidad_inventario} = req.body;
        const [rows] = await pool.query(
            'INSERT INTO productos (nombre, descripcion, precio, catidad_inventario) VALUES (?, ?, ?, ?)',
             [nombre, descripcion, precio, catidad_inventario]
        );
    res.send({ 
        id: rows.insertId,
        nombre,
        descripcion,
        precio, 
        catidad_inventario
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};


export const deleteProducto = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM productos WHERE id = ?', [
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
        const {id} = req.params;
        const {nombre, descripcion, precio, catidad_inventario} = req.body;

        const [result] = await pool.query(
            'UPDATE productos SET nombre= IFNULL(?, nombre), descripcion = IFNULL(?,descripcion), precio = IFNULL(?,precio), catidad_inventario = IFNULL(?, catidad_inventario ) WHERE id = ?',
             [nombre, descripcion, precio, catidad_inventario, id]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Producto no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?',[
        id,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};