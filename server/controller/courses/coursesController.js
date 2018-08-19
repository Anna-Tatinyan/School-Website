const {Courses, courseTime} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');

const models = require('../../models')


exports.addCourses = function(req,res){

  const {name, startDate, endDate, classId, teacherId} = req.body;

  Courses.create({
    name: name,
    startDate: startDate,
    endDate: endDate,
    classId: classId,
    teacherId: teacherId,

  })
  .then((courses) => {
    res.send({
      "id": courses.id,
      "code":200,
      "message": "Course was created"
    });
  }).catch(function(error){
    res.send({
      "error": error,
      "code":404,
      "message": "error occured while adding a course"
    });
  })
}




exports.deleteCourses= function(req,res){
  Courses.destroy({where : {id: req.param('id')}})
  .then((courses) => {
    res.send({
      "code":200,
      "message": "course was deleted"
    });
  }).catch(function(error){
    res.send({
      "code":404,
      "message": "error occured while deleting course"
    });
  })
}


exports.getCourses = (req,res) => {
  let courseTime = [];
  let courseWithTime = [];
  models.courseTime.findAll(
   {include: ['Courses'],
    attributes: ['id', 'courseId', 'weekDay', 'startTime', 'endTime']
  })
  .then((result) =>  {
      courseTime = result;
    Courses.findAll({
      include: ["Teachers", "Classes"],
      attributes: ['id', 'name', "startDate", "endDate", "teacherId", "classId"],
    })

  .then((courses) => {
    courseWithTime = [...courses];
         for(let i = 0; i<courseWithTime.length; i++){
           courseWithTime[i].dataValues.time = []
           for(let j = 0; j<courseTime.length; j++){
             if(courseWithTime[i].id === courseTime[j].courseId){
               courseWithTime[i].dataValues.time.push(courseTime[j])
             }
           }
         }
         res.send(courseWithTime)
          })
        })
       .error(function (err) {
              console.log("Error:" + err);
          });

}


exports.updateCourses = function(req,res){
  Courses.update({
      name: req.body.name,
      teacherId: req.body.teacherId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      classId: req.body.classId
    }, {
      where: {
        id: req.param('id')
      }
    })
  .then((courses) => {
    res.send({
      "code":200,
      "message": "Course was updated"
    });
  }).catch(function(error){
    res.send({
      "error":error,
      "code":404,
      "message": "error occured while updating the course"
    });
  })
}
