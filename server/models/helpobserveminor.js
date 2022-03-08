'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class helpobserveminor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  helpobserveminor.init({
    hn: DataTypes.INTEGER,
    patient_name: DataTypes.STRING,
    diagnosis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'helpobserveminor',
  });
  return helpobserveminor;
};