'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.patient.belongsToMany(models.doctor, {through: models.practice, foreignKey:"patient_id", otherKey:"doctor_id"})
      
    }
  }
  patient.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    insurance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patient',
  });
  return patient;
};