import { pool } from '../db.js'

export const getFacturacion = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM facturacion')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}

export const getFacturacionid = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM facturacion WHERE id_factura = ?', [
            req.params.id,
        ]);
    
        if(rows.length <= 0)
         return res.status(404).json({
        message: 'Facturacion no encontrado',
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
        const {id_factura, id_cliente, id_pedido, hora, fecha} = req.body
        const [rows] = await pool.query(
            "INSERT INTO facturacion (id_factura, id_cliente, id_pedido, hora, fecha) VALUES (?, ?, ?, ?, ?)",
             [id_factura, id_cliente, id_pedido, hora, fecha]
        );
    res.send({ 
        id_factura: rows.insertId,
        id_cliente,
        id_pedido,
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
        const [result] = await pool.query('DELETE FROM facturacion WHERE id_factura = ?', [
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
        const {id_factura} = req.params;
        const {id_cliente, id_pedido, fecha, hora} = req.body;

        const [result] = await pool.query(
            "UPDATE facturacion SET id_cliente = IFNULL(?, id_cliente), id_pedido = IFNULL(?, id_pedido), hora= IFNULL(?, hora), fecha = IFNULL(?,fecha)  WHERE id_factura = ?",
             [id_cliente, id_pedido, fecha, hora, id_factura]
        );

    if(result.affectedRows === 0)
     return res.status(404).json({
        message: 'Facturacion no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM facturacion WHERE id_factura = ?',[
        id_factura,
    ]);

    res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};
    