import { Router } from "express";
import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/article.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// Rutas públicas
router.get("/", getArticles);
router.get("/:id", getArticleById);

// Rutas protegidas
router.post("/", authMiddleware, createArticle);
router.put("/:id", authMiddleware, updateArticle);
router.delete("/:id", authMiddleware, deleteArticle);

export default router;
