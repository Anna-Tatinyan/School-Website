const {Classes, Teachers} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const models = require('../../models')

exports.addClasses = function(req,res){

  const {name, teacherId} = req.body;

  Classes.create({
    name: name,
    teacherId: teacherId
  })
  .then((classes) => {
    res.send({
      "id": classes.id,
      "code":200,
      "message": "Class was created"
    });
  }).catch(function(error){
    res.send({
      "error": error,
      "code":404,
      "message": "error occured while adding a class"
    });
  })
}



exports.deleteClasses= function(req,res){
  Classes.destroy({where : {id: req.param('id')}})
  .then((classes) => {
    res.send({
      "code":200,
      "message": "class was deleted"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while deleting class"
    });
  })
}


exports.getClasses = function(req,res){
  Classes.findAll({
    include: [{ model: models.Teachers}],
     attributes: ['id', 'name']
  })
  .then(function (classes) {
        res.send(classes);

    }).error(function (err) {
        console.log("Error:" + err);
    });
  }




  exports.updateClasses = function(req,res){

    Classes.update({
        name: req.body.name,
        teacherId: req.body.teacherId
      }, {
        where: {
          id: req.param('id')
        }
      })
    .then((classes) => {
      res.send({
        "code":200,
        "message": "Class was updated"
      });
    }).catch(function(error){
      res.send({
        "code":404,
        "message": "error occured while updating the class"
      });
    })
  }
