const {Classes} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.getClasses = function(req,res){

  Classes.findAll().then(function (classes) {
        res.send(classes);

    }).error(function (err) {
        console.log("Error:" + err);
    });
  }
