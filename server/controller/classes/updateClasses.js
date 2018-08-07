const {Classes} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const op = sequelize.Op;

exports.updateClasses = function(req,res){

  Classes.update(
    {description: req.body.description},
  {where: {
    [op.or]: [
      { id : req.body.id},
    ]
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
