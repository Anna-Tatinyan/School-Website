// const {Users} = require('../models/index');
// const sequelize = require('sequelize');
// const express = require('express');
//
//
// exports.login = function(req,res){
//   var email= req.body.email;
//   var password = req.body.password;
//   Users.findOne({where : {email: email}})
//   .then((results) => {
//     if(results == null){
//       res.status(404).send({success: false, error: {message: 'Email is not found'}});
//
//     }
//     else{
//       if(Object.keys(results).length > 0)  {
//         if(results.password == password){
//           res.status(200).send({success: {message: "Logged successfully"}, error: false});
//
//
//
//         }
//         else {
//           res.status(409).send({success: false, error: {message: 'Email and Password do not match'}});
//
//         }
//       }
//     }
//   })
//   .catch(function(error){
//     res.status(500).send("error")
//   });
// }
