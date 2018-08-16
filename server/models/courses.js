'use strict';
module.exports = (sequelize, DataTypes) => {
  var Courses = sequelize.define('Courses', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    teacherId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER
  }, {});
  Courses.associate = function(models) {
      Courses.belongsTo(models.Classes, {foreignKey: 'classId', targertKey: 'id', as: 'Classes'});
      Courses.belongsTo(models.Teachers, {foreignKey: 'teacherId', targertKey: 'id', as: 'Teachers'})
  };
  return Courses;
};
