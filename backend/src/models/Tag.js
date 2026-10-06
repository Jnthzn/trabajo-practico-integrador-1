import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Tag = sequelize.define(
  "Tag",
  {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "tags",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
  },
);
