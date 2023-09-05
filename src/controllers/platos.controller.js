import { pool } from '../db.js'

export const getPlatos = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM platos')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}

export const getPlato = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM platos WHERE id_plato = ?', [
            req.params.id,
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Plato no encontrado',
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    } 
};

export const createPlatos = async (req,res) => {
    try{
        const {nombre, descripcion, estado, precio} = req.body
        const [rows] = await pool.query(
            "INSERT INTO platos (nombre, descripcion, estado, precio) VALUES (?, ?, ?, ?)",
             [nombre, descripcion, estado, precio]
        );
    res.send({ 
        id_plato: rows.insertId,
        nombre,
        descripcion,
        estado,
        precio
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};


export const deletePlato = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM platos WHERE id_plato = ?', [
            req.params.id,
        ]);
    
        if(result.affectedRows <= 0)
         return res.status(404).json({
         message: 'Plato no encontrado',
        });
        res.sendStatus(204);
    }  catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};  

export const updatePlato = async (req,res) => {
    try{
        const {id_plato} = req.params;
        const {nombre, descripcion, estado, precio} = req.body;

        const [result] = await pool.query(
            "UPDATE platos SET nombre= IFNULL(?, nombre), descripcion = IFNULL(?,descripcion), estado= IFNULL(?, estado), precio= IFNULL(?, precio) WHERE id_plato = ?",
             [nombre, descripcion, estado, precio, id_plato]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Plato no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM platos WHERE id_plato = ?',[
        id_plato,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};