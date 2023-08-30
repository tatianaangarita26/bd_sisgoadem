import { Router } from "express";
import { getProductos, getProducto,  createProductos, updateProducto,  deleteProducto } from "../controllers/producto.controller.js";

const router = Router()

router.get('/productos', getProductos)
router.get('/productos/:id', getProducto)
router.post('/productos', createProductos)
router.put('/productos/:id', updateProducto)
router.delete('/productos/:id',deleteProducto)


export default router