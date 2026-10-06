import { User } from "./User.js";
import { Profile } from "./Profile.js";
import { Category } from "./Category.js";
import { Article } from "./Article.js";
import { Tag } from "./Tag.js";

// Relación 1:1 (User - Profile)
User.hasOne(Profile, { foreignKey: "userId", onDelete: "CASCADE" });
Profile.belongsTo(User, { foreignKey: "userId" });

// Relación 1:N (User - Article)
User.hasMany(Article, { foreignKey: "userId", onDelete: "CASCADE" });
Article.belongsTo(User, { foreignKey: "userId" });

// Relación 1:N (Category - Article)
Category.hasMany(Article, { foreignKey: "categoryId", onDelete: "SET NULL" });
Article.belongsTo(Category, { foreignKey: "categoryId" });

// Relación N:M (Article - Tag)
Article.belongsToMany(Tag, {
  through: "article_tags",
  foreignKey: "articleId",
  timestamps: false,
});
Tag.belongsToMany(Article, {
  through: "article_tags",
  foreignKey: "tagId",
  timestamps: false,
});

export { User, Profile, Category, Article, Tag };
