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
      aut_img: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  )

  return Author
}
