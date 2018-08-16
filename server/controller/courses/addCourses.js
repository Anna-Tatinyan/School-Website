const {Courses} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.addCourses = function(req,res){

  const {name, startDate, endDate, classId, teacherId} = req.body;

  Courses.create({
    name: name,
    startDate: startDate,
    endDate: endDate,
    classId: classId,
    teacherId: teacherId,

  })
  .then((courses) => {
    res.send({
      "id": courses.id,
      "code":200,
      "message": "Course was created"
    });
  }).catch(function(error){
    res.send({
      "error": error,
      "code":404,
      "message": "error occured while adding a course"
    });
  })
}
