'use strict';
module.exports = (sequelize, DataTypes) => {
  var Students = sequelize.define('Students', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    classId: DataTypes.INTEGER
  }, {});
  Students.associate = function(models) {
      Students.belongsTo(models.Classes)
  };
  return Students;
};
