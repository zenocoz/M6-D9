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
    Article.hasMany(models.Review)
    Article.belongsTo(models.Category)
    Article.belongsToMany(models.Author, {
      through: { model: models.Story },
      unique: false,
      timestamps: false,
    })
  }

  return Article
}

//Creating a categoryid in articles table
//Category.hasMany(Article)
//Article.belongsTo(Category)
