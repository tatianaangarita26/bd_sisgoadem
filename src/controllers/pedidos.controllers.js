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
        id: rows.insertId,
        id_pedido,
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