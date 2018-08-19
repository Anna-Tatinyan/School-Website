'use strict';
module.exports = (sequelize, DataTypes) => {
  var courseTime = sequelize.define('courseTime', {
    weekDay: DataTypes.STRING,
    courseId: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    classId: DataTypes.INTEGER
  }, {});
  courseTime.associate = function(models) {
    courseTime.belongsTo(models.Courses,  {foreignKey: 'courseId', targetKey: 'id', as: "Courses"}),
    courseTime.belongsTo(models.Classes, {foreignKey: 'classId', targertKey: 'id', as: 'Classes'});

  };
  return courseTime;
};
