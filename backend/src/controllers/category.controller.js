import { Category } from "../models/relaciones.js";

// Obtener todas las categorías
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor.", error: error.message });
  }
};

// Crear una categoría
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "El nombre es obligatorio." });
    }
    const newCategory = await Category.create({ name });
    return res
      .status(201)
      .json({
        message: "Categoría creada correctamente.",
        category: newCategory,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor.", error: error.message });
  }
};
