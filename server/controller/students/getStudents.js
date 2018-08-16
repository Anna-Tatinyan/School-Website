const {Students} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const models = require('../../models')

exports.studentResult = function(req,res){

  Students.findAll({
    include: [models.Classes],
     attributes: ['id', 'firstName', 'lastName', 'age', 'gender', 'email', 'phone']
  })
  .then(function (students) {
        res.send(students);

    }).error(function (err) {
        console.log("Error:" + err);
    });
  }
