import { verifyToken } from "../helpers/jwt.helper.js";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Acceso denegado. No se proporcionó un token." });
    }

    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado." });
  }
};
