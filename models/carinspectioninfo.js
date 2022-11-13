"use strict";
const { Model } = require("sequelize");
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
  }
  CarInspectionInfo.init(
    {
      plateNumber: DataTypes.STRING,
      year: DataTypes.INTEGER,
      Model: DataTypes.STRING,
      rejectionReason1: DataTypes.TEXT,
      rejectionReason2: DataTypes.TEXT,
      rejectionReason3: DataTypes.TEXT,
      pass: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "CarInspectionInfo",
    }
  );
  return CarInspectionInfo;
};
