module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "article",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      headline: { type: DataTypes.STRING, allowNull: false },
      subhead: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: true },
      claps: { type: DataTypes.INTEGER, allowNull: true },
      cover: { type: DataTypes.STRING, allowNull: true },
    },
    { timestamps: false }
  )

  Article.associate = (models) => {
    Article.belongsTo(models.Category)
  }

  return Article
}

//Creating a categoryid in articles table
//Category.hasMany(Article)
//Article.belongsTo(Category)
