'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teachers = sequelize.define('Teachers', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Teachers.associate = function(models) {
    // associations can be defined here
  };
  return Teachers;
};
