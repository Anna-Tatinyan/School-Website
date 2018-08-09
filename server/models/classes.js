'use strict';
module.exports = (sequelize, DataTypes) => {
  var Classes = sequelize.define('Classes', {
    name: DataTypes.STRING
  }, {});
  Classes.associate = function(models) {
    // associations can be defined here
  };
  return Classes;
};
