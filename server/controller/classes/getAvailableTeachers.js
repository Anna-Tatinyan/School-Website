const {Classes, Teachers} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const op = sequelize.Op;

exports.getAvailableTeachers = function(req,res){
  let availableTeachersArray = [];
  let teachersArray = [];
  let isBusy = false;

  Teachers.findAll().then((teacher) => {
      teachersArray = teacher;
      Classes.findAll()
      .then((classes) => {
          for(let i = 0; i< teachersArray.length; i++) {
            for(let j = 0; j< classes.length; j++){

                if(teachersArray[i].id === classes[j].teacherId){
                  isBusy = true;
                }
            }
            if(!isBusy) {
              availableTeachersArray.push(teachersArray[i])
            }
            isBusy = false;

          }
          res.send(availableTeachersArray)

      }).catch(function(error){
        res.send({
          "code":404,
          "message": "request failed"
        });
      })

    }).error(function (err) {
        console.log("Error:" + err);
    });



}
