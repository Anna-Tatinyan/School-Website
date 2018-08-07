const {Students} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.deleteStudent = function(req,res){
  const id = req.body.id;
  Students.destroy({where : {id: id}})
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
