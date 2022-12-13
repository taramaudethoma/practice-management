'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class practice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  practice.init({
    doctor_id: DataTypes.INTEGER,
    patient_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'practice',
  });
  return practice;
};