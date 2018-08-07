const {Students} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.studentResult = function(req,res){

  Students.findAll().then(function (student) {
        res.send(student);

    }).error(function (err) {
        console.log("Error:" + err);
    });
  }
