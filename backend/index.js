import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize } from "./src/config/db.js";
import "./src/models/relaciones.js";
import authRoutes from "./src/routes/auth.routes.js";
import profileRoutes from "./src/routes/profile.routes.js";
import articleRoutes from "./src/routes/article.routes.js";
import categoryRoutes from "./src/routes/category.routes.js";
import tagRoutes from "./src/routes/tag.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
// Middlewares globales
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/tags", tagRoutes);

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
