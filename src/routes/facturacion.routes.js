import { Router } from "express";
import { getFacturacion, getFacturacionid,  createFacturacion, updateFacturacion, deleteFacturacion} from "../controllers/facturacion.controller.js";

const router = Router()

router.get('/facturacion/', getFacturacion)
router.get('/facturacion/:id', getFacturacionid)
router.post('/facturacion', createFacturacion)
router.put('/facturacion/:id', updateFacturacion)
router.delete('/facturacion/:id',deleteFacturacion)


export default router