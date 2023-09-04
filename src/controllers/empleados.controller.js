import { pool } from '../db.js'

export const getEmpleados = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM empleados')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}

export const getEmpleado = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [
            req.params.id,
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Empleado no encontrado',
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    } 
};

export const createEmpleados = async (req,res) => {
    try{
        const {id_empleado, nombre, apellido, salario} = req.body
        const [rows] = await pool.query(
            "INSERT INTO empleados (id_empleado, nombre, apellido, salario) VALUES (?, ?, ?, ?)",
             [id_empleado, nombre, apellido, salario]
        );
    res.send({ 
        id_empleados: rows.insertId,
        nombre,
        apellido,
        salario
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};


export const deleteEmpleado = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM empleados WHERE id_empleado = ?', [
            req.params.id,
        ]);
    
        if(result.affectedRows <= 0)
         return res.status(404).json({
         message: 'Empleado no encontrado',
        });
        res.sendStatus(204);
    }  catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};  

export const updateEmpleado = async (req,res) => {
    try{
        const {id_empleado} = req.params;
        const {nombre, apellido, salario} = req.body;

        const [result] = await pool.query(
            "UPDATE empleados SET nombre= IFNULL(?, nombre), apellido = IFNULL(?,apellido), salario = IFNULL(?,salario) WHERE id_empleado = ?",
             [nombre, apellido, salario, id_empleado]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Empleado no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?',[
        id_empleado,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};