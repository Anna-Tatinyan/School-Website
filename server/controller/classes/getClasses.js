const {Classes} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const models = require('../../models')

exports.getClasses = function(req,res){
  Classes.findAll({
    include: [{ model: models.Teachers}],
     attributes: ['id', 'name']
  })
  .then(function (classes) {
        res.send(classes);

    }).error(function (err) {
        console.log("Error:" + err);
    });
  }
