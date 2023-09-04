import { pool } from '../db.js'

export const getProveedores = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM proveedores')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}

export const getProveedor = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM proveedores WHERE id_proveedores = ?', [
            req.params.id_proveedores,
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Proveedor no encontrado',
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    } 
};

export const createProveedores = async (req,res) => {
    try{
        const {id_proveedores, nombre, contacto, empresa, id_producto} = req.body
        const [rows] = await pool.query(
            "INSERT INTO proveedores (id_proveedores, nombre, contacto, empresa, id_producto)VALUES (?, ?, ?, ?, ?)",
             [id_proveedores, nombre, contacto, empresa, id_producto]
        );
    res.send({ 
        id_proveedores,
        nombre,
        contacto,
        empresa,
        id_producto
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};



export const deleteProveedor = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM proveedores WHERE id_proveedores = ?', [
            req.params.id_proveedores,
        ]);
    
        if(result.affectedRows <= 0)
         return res.status(404).json({
         message: 'Proveedor no encontrado',
        });
        res.sendStatus(204);
    }  catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};  

export const updateProveedor = async (req,res) => {
    try{
        const {id_proveedores} = req.params;
        const {nombre, contacto, empresa} = req.body;

        const [result] = await pool.query(
            "UPDATE proveedores SET nombre= IFNULL(?, nombre), contacto = IFNULL(?,contacto), empresa = IFNULL(?,empresa) WHERE id_proveedores = ?",
             [nombre, contacto, empresa, id_proveedores]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Proveedor no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM proveedores WHERE id_proveedores = ?',[
        id_proveedores,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};