import { pool } from '../db.js'

export const getFacturacion = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM facturacion')
        res.json(rows)
    } catch (error) {
        return res.sendStatus(error)
    }
}

export const getFacturacionid = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM facturacion WHERE id = ?', [
            req.params.id
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Facturacion no encontrado'
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    } 
};

export const createFacturacion = async (req,res) => {
    try{
        const {hora, fecha} = req.body;
        const [rows] = await pool.query(
            'INSERT INTO facturacion (hora, fecha) VALUES (?, ?, ?)',
             [hora, fecha]
        );
    res.send({ 
        id: rows.insertId,
        hora,
        fecha
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};


export const deleteFacturacion = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM facturacion WHERE id = ?', [
            req.params.id,
        ]);
    
        if(result.affectedRows <= 0)
         return res.status(404).json({
         message: 'Facturacion no encontrado',
        });
        res.sendStatus(204);
    }  catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};  

export const updateFacturacion = async (req,res) => {
    try{
        const {id} = req.params;
        const {fecha, hora} = req.body;

        const [result] = await pool.query(
            'UPDATE facturacion SET hora= IFNULL(?, hora), fecha = IFNULL(?,fecha)  WHERE id = ?',
             [fecha, hora, id]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Facturacion no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM facturacion WHERE id = ?',[
        id,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};
    