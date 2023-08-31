import { Router } from "express";
import { getPedidos, getPedido } from "../controllers/pedidos.controllers.js";

const router = Router()

router.get('/pedidos', getPedidos)
router.get('/pedidos/:id', getPedido)




export default router