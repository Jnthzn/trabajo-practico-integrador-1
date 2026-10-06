import { body } from "express-validator";

export const registerValidation = [
  body("username")
    .isLength({ min: 3, max: 20 })
    .withMessage("El username debe tener entre 3 y 20 caracteres.")
    .isAlphanumeric()
    .withMessage("El username solo puede contener letras y números."),
  body("email").isEmail().withMessage("Debe proporcionar un email válido."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres.")
    .matches(/[A-Z]/)
    .withMessage("La contraseña debe incluir al menos una letra mayúscula.")
    .matches(/[a-z]/)
    .withMessage("La contraseña debe incluir al menos una letra minúscula.")
    .matches(/\d/)
    .withMessage("La contraseña debe incluir al menos un número."),
];

export const loginValidation = [
  body("email").isEmail().withMessage("Debe proporcionar un email válido."),
  body("password").notEmpty().withMessage("La contraseña es obligatoria."),
];
