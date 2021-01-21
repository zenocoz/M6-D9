module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "review",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  )

  return Review
}
