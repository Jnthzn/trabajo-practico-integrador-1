import { Router } from "express";
import { getTags, createTag } from "../controllers/tag.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getTags);
router.post("/", authMiddleware, createTag);

export default router;
