const {Students} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.addStudent = function(req,res){
  const {firstName, lastName, age, gender, phone, email} = req.body;

  Students.create({
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    phone: phone,
    email: email
  })
  .then((students) => {
    res.send({
      "code":200,
      "message": "Student was created"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while adding a student"
    });
  })
}
