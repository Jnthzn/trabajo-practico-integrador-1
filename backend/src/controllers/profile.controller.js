import { Profile } from "../models/relaciones.js";

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await Profile.findOne({ where: { userId } });

    if (!profile) {
      return res.status(404).json({ message: "Perfil no encontrado." });
    }

    return res.status(200).json(profile);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor.", error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { firstName, lastName, biography, avatarUrl } = req.body;

    let [profile, created] = await Profile.findOrCreate({
      where: { userId },
      defaults: { firstName, lastName, biography, avatarUrl },
    });

    if (!created) {
      await profile.update({ firstName, lastName, biography, avatarUrl });
    }

    return res.status(200).json({
      message: "Perfil actualizado correctamente.",
      profile,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor.", error: error.message });
  }
};
