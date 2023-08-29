import express from 'express'
import { pool } from './db.js'
<<<<<<< HEAD:index.js
=======
import employeesRoutes from './routes/sisgoadem.routes.js'
>>>>>>> eb1b7ca2ad1fe612ae13ae943167518ab2d31aee:src/index.js


const app = express()

app.get('/ping',async (req,res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
})

<<<<<<< HEAD:index.js
=======
app.use(sisgoademRoutes)
>>>>>>> eb1b7ca2ad1fe612ae13ae943167518ab2d31aee:src/index.js

app.listen(5000)
console.log('Servidor en el puerto', 5000)
