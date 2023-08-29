import { Router } from "express";
import { getSisgoadem, createSisgoadem, updateSisgoadem, deleteSisgoadem } from "../controllers/sisgoadem.controller";

const router = Router()

router.get('/sisgoadem', getSisgoadem)
router.post('/sisgoadem', createSisgoadem)
router.put('/sisgoadem', updateSisgoadem)
router.delete('/sisgoadem',deleteSisgoadem)


export default router