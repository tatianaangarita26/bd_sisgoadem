import express from 'express'
import { pool } from './db.js'


const app = express()

app.get('/ping',async (req,res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result[0])
})


app.listen(5000)
console.log('Servidor en el puerto', 5000)
