import { pool } from '../db.js'

export const getPedidos = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM pedido')
        res.json(rows)
    } catch (error) {
        return res.sendStatus(error)
    }
}

export const getPedido = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM pedido WHERE id = ?', [
            req.params.id
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Pedido no encontrado'
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    } 
};

export const createPedidos = async (req,res) => {
    try{
        const {hora, fecha,} = req.body;
        const [rows] = await pool.query(
            'INSERT INTO pedido (hora, fecha,) VALUES (?, ?, ?)',
             [hora, fecha,]
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


export const deletePedido = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM pedido WHERE id = ?', [
            req.params.id,
        ]);
    
        if(result.affectedRows <= 0)
         return res.status(404).json({
         message: 'Pedido no encontrado',
        });
        res.sendStatus(204);
    }  catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};  

export const updatePedido = async (req,res) => {
    try{
        const {id} = req.params;
        const {hora, fecha} = req.body;

        const [result] = await pool.query(
            'UPDATE pedido SET hora= IFNULL(?, hora), fecha = IFNULL(?,fecha) WHERE id = ?',
             [hora, fecha, id]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Pedido no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM pedido WHERE id = ?',[
        id,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};