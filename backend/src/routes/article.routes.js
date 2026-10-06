import { Router } from "express";
import {
  getArticles,
  createArticle,
} from "../controllers/article.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// Ruta pública para ver todos los artículos
router.get("/", getArticles);

// Ruta protegida para crear un artículo
router.post("/", authMiddleware, createArticle);

export default router;
