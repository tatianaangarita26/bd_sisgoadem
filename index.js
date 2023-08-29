import express from 'express'

const app = express()

app.get('/employees',(req,res)=>res.send('Obteniendo Empleados'))
app.post('/employees',(req,res)=>res.send('Creando Empleados'))
app.put('/employees',(req,res)=>res.send('Actualizando Empleados'))
app.delete('/employees',(req,res)=>res.send('Eliminando Empleados'))

app.listen(5000)
console.log('Servidor en el puerto', 5000)
