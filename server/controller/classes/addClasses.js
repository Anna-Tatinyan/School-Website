const {Classes} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.addClasses = function(req,res){
  const {name, description, teacher} = req.body;

  Classes.create({
    name: name,
    description: description,
    teacherId: teacher
  })
  .then((classes) => {
    res.send({
      "code":200,
      "message": "Class was created"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while adding a class"
    });
  })
}
