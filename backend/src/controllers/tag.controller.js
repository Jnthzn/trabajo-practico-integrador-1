import { Tag } from "../models/relaciones.js";

export const getTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    return res.status(200).json(tags);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor.", error: error.message });
  }
};

export const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "El nombre es obligatorio." });
    }
    const newTag = await Tag.create({ name });
    return res
      .status(201)
      .json({ message: "Etiqueta creada correctamente.", tag: newTag });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor.", error: error.message });
  }
};
