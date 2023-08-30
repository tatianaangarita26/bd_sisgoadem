import { Router } from "express";
import { getPedidos, getPedido,  createPedidos, updatePedido,  deletePedido } from "../controllers/pedido.controller.js";

const router = Router()

router.get('pedido', getPedidos)
router.get('pedido/:id', getPedido)
router.post('pedido', createPedidos)
router.put('pedido/:id', updatePedido)
router.delete('pedido/:id',deletePedido)


export default router