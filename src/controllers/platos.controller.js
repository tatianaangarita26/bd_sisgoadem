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
        const [rows] = await pool.query('SELECT * FROM platos WHERE id = ?', [
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
        const {nombre, descripcion} = req.body
        const [rows] = await pool.query(
            "INSERT INTO platos (nombre, descripcion) VALUES (?, ?)",
             [nombre, descripcion]
        );
    res.send({ 
        id: rows.insertId,
        nombre,
        descripcion
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};


export const deletePlato = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM platos WHERE id = ?', [
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
        const {id} = req.params;
        const {nombre, descripcion} = req.body;

        const [result] = await pool.query(
            "UPDATE platos SET nombre= IFNULL(?, nombre), descripcion = IFNULL(?,descripcion) WHERE id = ?",
             [nombre, descripcion, id]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Plato no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM platos WHERE id = ?',[
        id,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};