const {Users} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');
const create = require('./tokenCreator.js');
require('dotenv').config();
const bcrypt = require('bcrypt')

exports.login = function(req,res){
  const email= req.body.email;
  const password = req.body.password;
  Users.findOne({where : {email: email}})
  .then((results) => {
    if(results == null){
      res.status(404).send({
        code: 404,
        success: false,
        message: 'Email is not found'
      });
    }
    else{
      if(Object.keys(results).length > 0)  {
        if(bcrypt.compareSync(password, results.password)){
          const token = create.generateToken(results);

          res.status(200).send({
            message: "Logged successfully",
            error: false,
            code: 200,
            token: token
          });

      } else {
          res.status(409).send({success: false, code: 409, message: 'Email and Password do not match'});
        }
      }
    }
  })
  .catch(function(error){
    res.status(500).send(error)
  });
}
