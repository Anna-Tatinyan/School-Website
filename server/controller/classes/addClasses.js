const {Classes} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.addClasses = function(req,res){

  const {name, teacherId} = req.body;

  Classes.create({
    name: name,
    teacherId: teacherId
  })
  .then((classes) => {
    res.send({
      "id": classes.id,
      "code":200,
      "message": "Class was created"
    });
  }).catch(function(error){
    res.send({
      "error": error,
      "code":404,
      "message": "error occured while adding a class"
    });
  })
}
