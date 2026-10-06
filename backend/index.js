import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { sequelize } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

// Middlewares globales
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

// Sincronizar BD y levantar servidor
sequelize
  .sync({ force: false })
  .then(() => {
    console.log(" Base de datos sincronizada correctamente.");
    app.listen(PORT, () => {
      console.log(` Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(" Error al conectar con la base de datos:", error);
  });
