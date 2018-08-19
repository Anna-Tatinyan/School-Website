const {Teachers} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const models = require('../../models')


exports.getTeachers = function(req,res){

  Teachers.findAll().then(function (teacher) {
        res.send(teacher);

    }).error(function (err) {
        console.log("Error:" + err);
    });
  }


  exports.deleteTeacher = function(req,res){

    Teachers.destroy({where : {id: req.param('id')}})
    .then((teachers) => {
      res.send({
        "code":200,
        "message": "Teacher was deleted"
      });
    }).catch(function(error){
      res.send({
        "code":404,
        "error": error
      });
    })
  }

  exports.addTeacher = function(req,res){
    const {firstName, lastName,  phone, email} = req.body;

    Teachers.create({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email
    })
    .then((teachers) => {
      res.send({

        "id": teachers.dataValues.id,
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

  exports.updateTeachers = function(req,res){
    Teachers.update(
      {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email},
    {where: {
      id: req.param('id')
    }
  })
    .then((teachers) => {
      res.send({
        "code":200,
        "message": "Teacher was updated"
      });
    }).catch(function(error){
      res.send({
        "code":404,
        "message": "error occured while updating teachers"
      });
    })
  }
