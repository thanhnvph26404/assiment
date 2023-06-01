import express from "express";
import {get, create, update, remove} from '../controllers/categories'
const router = express.Router()



router.get("/categories/:id", get);
router.post("/categories", create);
router.delete("/categories/:id", remove);
router.patch("/categories/:id", update);

export default router;