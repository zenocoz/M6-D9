module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "review",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: { type: DataTypes.STRING, allowNull: true },
    },
    { timestamps: true }
  )

  Review.associate = (models) => {
    Review.belongsTo(models.Article)
    Review.belongsTo(models.Author)
  }

  return Review
}
