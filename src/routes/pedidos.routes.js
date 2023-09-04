import { Router } from "express";
import { getPedidos, getPedido, createPedidos, deletePedido, updatePedido} from "../controllers/pedidos.controllers.js";

const router = Router()

router.get('/pedidos', getPedidos)
router.get('/pedidos/:id', getPedido)
router.put('/pedidos', createPedidos)
router.delete('/pedidos/:id', deletePedido)
router.patch('/pedidos/:id_pedido', updatePedido)






export default router