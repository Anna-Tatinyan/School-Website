const {Users} = require('../models/index');
const sequelize = require('sequelize');
const expres = require('express');


exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  Users.findOne({where : {email: email}})
  .then((results) => {
    if(results == null){
      res.send({
        "code":204,
        "answer":"Email is not valid"
        });
    }
    else{
      if(Object.keys(results).length > 0)  {
        if(results.password == password){
          res.send({
            "code":200,
            "answer":"Credentials match. Sucessfull login"
          });
        }
        else {
        res.send({
          "code":204,
          "success":"Email and password does not match"
          });
        }
      }
    }
  })
  .catch(function(error){
    res.send({
      "code":400,
      "failed":"error occured"
    });
  });
}
