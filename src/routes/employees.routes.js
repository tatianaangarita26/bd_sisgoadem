import { Router } from "express";

const router = Router()

router.get('/employees',(req,res)=>res.send('Obteniendo Empleados'))
router.post('/employees',(req,res)=>res.send('Creando Empleados'))
router.put('/employees',(req,res)=>res.send('Actualizando Empleados'))
router.delete('/employees',(req,res)=>res.send('Eliminando Empleados'))


export default router