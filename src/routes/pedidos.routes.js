import { Router } from "express";
import { getPedidos, getPedido, createPedidos} from "../controllers/pedidos.controllers.js";

const router = Router()

router.get('/pedidos', getPedidos)
router.get('/pedidos/:id', getPedido)
router.post('/pedidos', createPedidos)





export default router