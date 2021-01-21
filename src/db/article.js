//associate category author reviews

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
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
  })

  return Article
}
