import { User } from "./User.js";
import { Profile } from "./Profile.js";

// Relación 1:1 entre Usuario y Perfil
User.hasOne(Profile, { foreignKey: "userId", onDelete: "CASCADE" });
Profile.belongsTo(User, { foreignKey: "userId" });

export { User, Profile };
