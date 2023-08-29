import express from 'express'
import { pool } from './db.js'
import sisgoademRoutes from './routes/sisgoadem.routes.js'


const app = express()

app.get('/ping',async (req,res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
})

app.use(sisgoademRoutes)

app.listen(3000)
console.log('Servidor en el puerto', 3000)
