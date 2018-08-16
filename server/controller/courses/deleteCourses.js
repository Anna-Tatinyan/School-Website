const {Courses} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.deleteCourses= function(req,res){
  Courses.destroy({where : {id: req.param('id')}})
  .then((courses) => {
    res.send({
      "code":200,
      "message": "course was deleted"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while deleting course"
    });
  })
}
