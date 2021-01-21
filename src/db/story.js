module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "story",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { timestamps: false }
  )
  //   Story.associate = (models) => {
  //     Story.belongsTo(models.Article)
  //     Story.belongsTo(models.Author)
  //   }

  return Story
}
