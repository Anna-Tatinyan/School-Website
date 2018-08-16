const {Classes} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const op = sequelize.Op;

exports.updateClasses = function(req,res){

  Classes.update({
      name: req.body.name,
      teacherId: req.body.teacherId
    }, {
      where: {
        id: req.param('id')
      }
    })
  .then((classes) => {
    res.send({
      "code":200,
      "message": "Class was updated"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while updating the class"
    });
  })
}
