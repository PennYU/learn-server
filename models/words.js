'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Words extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Words.init({
    english: DataTypes.STRING,
    chinese: DataTypes.STRING,
    right: DataTypes.INTEGER,
    wrong: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Words',
  });
  return Words;
};