import express from 'express'
import { pool } from './db.js'

const app = express()

app.get('/ping',async (req,res) => {
    const result = await pool.query('SELECT 1 + 1 AS result')
    res.json(result)
})

app.get('/employees',(req,res)=>res.send('Obteniendo Empleados'))
app.post('/employees',(req,res)=>res.send('Creando Empleados'))
app.put('/employees',(req,res)=>res.send('Actualizando Empleados'))
app.delete('/employees',(req,res)=>res.send('Eliminando Empleados'))

app.listen(5000)
console.log('Servidor en el puerto', 5000)
