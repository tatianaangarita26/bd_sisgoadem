import { pool } from '../db.js'

export const getPedidos = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM pedidos')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}

export const getPedido = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM pedidos WHERE id_pedido = ?', [
            req.params.id,
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Pedido no encontrado',
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
        const {id_pedido, hora, fecha, estado, id_platos} = req.body
        const [rows] = await pool.query(
            "INSERT INTO pedidos (id_pedido, hora, fecha, estado, id_platos) VALUES (?, ?, ?, ?, ?)",
             [id_pedido, hora, fecha, estado, id_platos]
        );
    res.send({ 
        id_pedido: rows.insertId,
        hora,
        fecha,
        estado,
        id_platos
    });
    } catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }

};

export const deletePedido = async (req,res) =>{
    try{
        const [result] = await pool.query('DELETE FROM pedidos WHERE id_pedido = ?', [
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
        const {id_pedido} = req.params;
        const {hora, fecha, estado, id_platos} = req.body;

        const [result] = await pool.query(
            "UPDATE pedidos SET hora = IFNULL(?, hora), fecha= IFNULL(?, fecha), estado= IFNULL(?, estado), id_platos= IFNULL(?, id_platos) WHERE id_pedido = ?",
             [hora, fecha, estado, id_platos, id_pedido]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Pedido no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM pedidos WHERE id_pedido = ?',[
        id_pedido,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};