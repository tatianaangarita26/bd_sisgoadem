import { Router } from "express";
import { getEmpleados, getEmpleado,  createEmpleados, updateEmpleado,  deleteEmpleado } from "../controllers/empleados.controller.js";

const router = Router()

router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleado)
router.post('/empleados', createEmpleados)
router.patch('/empleados/:id_empleado', updateEmpleado)
router.delete('/empleados/:id',deleteEmpleado)


export default router