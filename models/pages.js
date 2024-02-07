const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pages extends Model {}

  Pages.init(
    {
      head: DataTypes.STRING,
      body: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
      chapterId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Pages',
    }
  );

  return Pages;
};
