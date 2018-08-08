const {Teachers} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


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
      "message": "error occured while deleting the teacher"
    });
  })
}
