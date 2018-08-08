const {Classes} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.deleteClasses= function(req,res){
  Classes.destroy({where : {id: req.param('id')}})
  .then((classes) => {
    res.send({
      "code":200,
      "message": "class was deleted"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while deleting class"
    });
  })
}
