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
        const [rows] = await pool.query('SELECT * FROM proveedores WHERE id = ?', [
            req.params.id,
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
        const {nombre, contacto, empresa} = req.body
        const [rows] = await pool.query(
            "INSERT INTO proveedores (nombre, contacto, empresa) VALUES (?, ?, ?)",
             [nombre, contacto, empresa]
        );
    res.send({ 
        id: rows.insertId,
        nombre,
        contacto,
        empresa
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};


export const deleteProveedor = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM proveedores WHERE id = ?', [
            req.params.id,
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
        const {id} = req.params;
        const {nombre, contacto, empresa} = req.body;

        const [result] = await pool.query(
            "UPDATE proveedores SET nombre= IFNULL(?, nombre), contacto = IFNULL(?,contacto), empresa = IFNULL(?,empresa) WHERE id = ?",
             [nombre, contacto, empresa, id]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Proveedor no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM proveedores WHERE id = ?',[
        id,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};