const {Courses} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const models = require('../../models')

exports.getCourses = function(req,res){
  Courses.findAll({
    include: ["Teachers", "Classes"],
    attributes: ['id', 'name', "startDate", "endDate", "teacherId", "classId"],
  })
  .then(function (courses) {
        res.send(courses);

    }).error(function (err) {
        console.log("Error:" + err);
    });
  }
