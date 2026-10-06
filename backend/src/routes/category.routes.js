import { Router } from "express";
import {
  getCategories,
  createCategory,
} from "../controllers/category.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getCategories);
router.post("/", authMiddleware, createCategory);

export default router;
