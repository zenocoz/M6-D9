module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "author",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      aut_name: { type: DataTypes.STRING, allowNull: false },
      aut_img: { type: DataTypes.STRING, allowNull: true },
    },
    { timestamps: false }
  )

  Author.associate = (models) => {
    Author.belongsToMany(models.Article, {
      through: { model: models.Story },
      unique: false,
      timestamps: false,
    })
    Author.hasMany(models.Story)
  }
  return Author
}
