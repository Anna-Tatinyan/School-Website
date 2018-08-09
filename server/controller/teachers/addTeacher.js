const {Teachers} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.addTeacher = function(req,res){
  const {firstName, lastName, age, gender, phone, email} = req.body;

  Teachers.create({
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email
  })
  .then((teachers) => {
    res.send({
      "code":200,
      "message": "Teacher was created"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while adding a teacher"
    });
  })
}
