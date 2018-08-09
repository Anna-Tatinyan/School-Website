const {Teachers} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const op = sequelize.Op;

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
