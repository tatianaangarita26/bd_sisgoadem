import { Router } from "express";
import { getProveedores, getProveedor,  createProveedores, updateProveedor,  deleteProveedor } from "../controllers/proveedores.controller.js";

const router = Router()

router.get('/proveedores', getProveedores)
router.get('/proveedores/:id', getProveedor)
router.post('/proveedores', createProveedores)
router.put('/proveedores/:id', updateProveedor)
router.delete('/proveedores/:id',deleteProveedor)


export default router