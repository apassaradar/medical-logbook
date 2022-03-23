'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  group.init({
    userID: DataTypes.INTEGER,
    group: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'group',
    tableName: 'group'
  }, {timestamps: false});
  return group;
};