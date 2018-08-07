const {Classes} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.addClasses = function(req,res){
  const {name, description} = req.body;

  Classes.create({
    name: name,
    description: description
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
