module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      c_name: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  )

  Category.associate = (models) => {
    Category.hasMany(models.Article)
  }

  return Category
}
