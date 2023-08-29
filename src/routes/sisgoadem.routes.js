import { Router } from "express";

const router = Router()

router.get('/sisgoadem',(req,res)=>res.send('Obteniendo Empleados'))
router.post('/sisgoadem',(req,res)=>res.send('Creando Empleados'))
router.put('/sisgoadem',(req,res)=>res.send('Actualizando Empleados'))
router.delete('/sisgoadem',(req,res)=>res.send('Eliminando Empleados'))


export default router