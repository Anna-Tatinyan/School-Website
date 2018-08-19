const {Students} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');

const models = require('../../models')


exports.addStudent = function(req,res){
  const {firstName, lastName, age, gender, phone, email, classId} = req.body;

  Students.create({
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    phone: phone,
    email: email,

    classId: classId
  })
  .then((students) => {
    res.send({
      "id": students.dataValues.id,
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


exports.deleteStudent = function(req,res){

  Students.destroy({where : {id: req.param('id')}})
  .then((students) => {
    res.send({
      "code":200,
      "message": "Student was deleted"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while deleting students"
    });
  })
}

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
