import { pool } from '../db.js'

export const getClientes = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM cliente')
        res.json(rows)
    } catch (error) {
        return res.sendStatus(error)
    }
}

export const getCliente = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM cliente WHERE id = ?', [
            req.params.id
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Cliente no encontrado'
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    } 
};

export const createClientes = async (req,res) => {
    try{
        const {nombre, apellido, telefono} = req.body;
        const [rows] = await pool.query(
            'INSERT INTO cliente (nombre, apellido, telefono) VALUES (?, ?, ?)',
             [nombre, apellido, telefono]
        );
    res.send({ 
        id: rows.insertId,
        nombre,
        apellido,
        telefono
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};


export const deleteCliente = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM cliente WHERE id = ?', [
            req.params.id,
        ]);
    
        if(result.affectedRows <= 0)
         return res.status(404).json({
         message: 'Cliente no encontrado',
        });
        res.sendStatus(204);
    }  catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};  

export const updateCliente = async (req,res) => {
    try{
        const {id} = req.params;
        const {nombre, apellido, telefono} = req.body;

        const [result] = await pool.query(
            'UPDATE cliente SET nombre= IFNULL(?, nombre), apellido = IFNULL(?,apellido), telefono = IFNULL(?,telefono) WHERE id = ?',
             [nombre, apellido, telefono, id]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Cliente no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM cliente WHERE id = ?',[
        id,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};
    