import { Router } from "express";
import { getPlatos, getPlato,  createPlatos, updatePlato,  deletePlato } from "../controllers/platos.controller.js";

const router = Router()

router.get('/platos', getPlatos)
router.get('/platos/:id', getPlato)
router.post('/platos', createPlatos)
router.patch('/platos/:id_plato', updatePlato)
router.delete('/platos/:id',deletePlato)


export default router