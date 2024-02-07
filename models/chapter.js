'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chapters extends Model {
    static associate(models) {
      Chapters.belongsTo(models.Courses, {
        foreignKey: 'courseId',
        allowNull: false,
      });
      Chapters.hasMany(models.Pages, { foreignKey: 'chapterId' });
    }
  }

  Chapters.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        courseId: DataTypes.INTEGER,
        pages: {
          type: DataTypes.ARRAY(DataTypes.JSONB),
          allowNull: false,
          defaultValue: [],
        },
      },
      {
        sequelize,
        modelName: 'Chapters',
      },
  );

  return Chapters;
};
