const {Classes} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.deleteClasses= function(req,res){
  const id = req.body.id;
  Classes.destroy({where : {id: id}})
  .then((classes) => {
    res.send({
      "code":200,
      "message": "Class was deleted"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while deleting class"
    });
  })
}
