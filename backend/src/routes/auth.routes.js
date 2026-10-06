import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import {
  registerValidation,
  loginValidation,
} from "../validators/auth.validator.js";
import { validateFields } from "../middlewares/validator.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerValidation, validateFields, register);
router.post("/login", loginValidation, validateFields, login);
router.post("/logout", authMiddleware, logout);

export default router;
