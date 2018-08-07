const {Students} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const op = sequelize.Op;

exports.updateStudent = function(req,res) {
  Students.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email
  }, {
    where: {
      id: req.param('id')
    }
  }).then(() => {
    res.send({
      "code":200,
      "message": `Student ${req.body.firstName} ${req.body.lastName} was edited`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while editing students"
    });
  });
}
