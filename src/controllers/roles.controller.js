import { pool } from '../db.js'

export const getRoles = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM roles')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}

export const getRol = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM roles WHERE id = ?', [
            req.params.id,
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Rol no encontrado',
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    } 
};

export const createRoles = async (req,res) => {
    try{
        const {nombre, apellido, cargo} = req.body
        const [rows] = await pool.query(
            "INSERT INTO roles (nombre, apellido, cargo) VALUES (?, ?, ?)",
             [nombre, apellido, cargo]
        );
    res.send({ 
        id: rows.insertId,
        nombre,
        apellido,
        cargo
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};


export const deleteRol = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM roles WHERE id = ?', [
            req.params.id,
        ]);
    
        if(result.affectedRows <= 0)
         return res.status(404).json({
         message: 'Rol no encontrado',
        });
        res.sendStatus(204);
    }  catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};  

export const updateRol = async (req,res) => {
    try{
        const {id} = req.params;
        const {nombre, apellido, cargo} = req.body;

        const [result] = await pool.query(
            "UPDATE roles SET nombre= IFNULL(?, nombre), apellido = IFNULL(?,apellido), cargo = IFNULL(?,cargo) WHERE id = ?",
             [nombre, apellido, cargo, id]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Rol no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM roles WHERE id = ?',[
        id,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};