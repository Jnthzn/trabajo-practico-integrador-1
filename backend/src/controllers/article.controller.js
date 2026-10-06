import { Article, Category, Tag, User } from "../models/relaciones.js";

// Obtener todos los artículos con sus relaciones
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [
        { model: User, attributes: ["id", "username", "email"] },
        { model: Category, attributes: ["id", "name"] },
        { model: Tag, attributes: ["id", "name"], through: { attributes: [] } },
      ],
    });
    return res.status(200).json(articles);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor.", error: error.message });
  }
};

// Crear un artículo nuevo
export const createArticle = async (req, res) => {
  try {
    const { title, content, categoryId, tags } = req.body;
    const userId = req.user.id; // Viene del middleware de auth

    const newArticle = await Article.create({
      title,
      content,
      categoryId,
      userId,
    });

    // Asocia los IDs de las etiquetas si se enviaron en el body (ej: [1, 2])
    if (tags && tags.length > 0) {
      await newArticle.setTags(tags);
    }

    return res.status(201).json({
      message: "Artículo creado correctamente.",
      article: newArticle,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor.", error: error.message });
  }
};
