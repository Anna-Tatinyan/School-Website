const {Teachers} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.getTeachers = function(req,res){

  Teachers.findAll().then(function (teacher) {
        res.send(teacher);

    }).error(function (err) {
        console.log("Error:" + err);
    });
  }
