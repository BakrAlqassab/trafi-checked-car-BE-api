'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarInspectionInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CarInspectionInfo.init({
    model_year: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    rejection_percentage: DataTypes.STRING,
    reason_1: DataTypes.TEXT,
    reason_2: DataTypes.TEXT,
    reason_3: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CarInspectionInfo',
  });
  return CarInspectionInfo;
};