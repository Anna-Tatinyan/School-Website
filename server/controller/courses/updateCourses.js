const {Courses} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const op = sequelize.Op;

exports.updateCourses = function(req,res){
console.log(req.body)
  Courses.update({
      name: req.body.name,
      teacherId: req.body.teacherId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      classId: req.body.classId
    }, {
      where: {
        id: req.param('id')
      }
    })
  .then((courses) => {
    res.send({
      "code":200,
      "message": "Course was updated"
    });
  }).catch(function(error){
    res.send({
      "error":error,
      "code":404,
      "message": "error occured while updating the course"
    });
  })
}
