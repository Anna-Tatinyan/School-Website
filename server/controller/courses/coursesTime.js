const {courseTime} = require('../../models/index');
const sequelize = require('sequelize');
const express = require('express');


exports.addCoursesTime = function(req, res) {
  let allTime = [];
  const {courseId,weekDay,startTime,endTime,classId} = req.body;

  courseTime.findAll({
      include: ["Courses"],
      attributes: ['id', 'courseId', 'weekDay', 'startTime', 'endTime', "classId"],
      where: {
        weekDay: weekDay,
        classId: classId
      }
    })

    .then(allTime => {
      let isValid = true;
      for (let i = 0; i < allTime.length; i++) {

        if ((allTime[i].endTime <= req.body.startTime || allTime[i].startTime >= req.body.endTime)) {
          isValid = false;
          res.send({
            "code": 416,
            "message": "Course is overlapping with other courses, the time has not been set, you can add it later"
          })
          break;

        }
        if (!isValid) {
          break;
        }
      }
      if (isValid) {
        courseTime.create({
          courseId: courseId,
          weekDay: weekDay,
          startTime: startTime,
          endTime: endTime,
          classId: classId

        }).then((course) => {
          res.send({
            "code": 200,
            "message": `Course with timetable was added`
          })
        })
      }
    }).catch(function(error) {
      res.send({
        "error": error,
        "code": 400,
        "message": "error occured while adding a time"
      });
    });

}



exports.updateTime = function(req, res) {
  const {
    courseId,
    weekDay,
    startTime,
    endTime,
    classId
  } = req.body;

  courseTime.findAll({
      include: ["Courses"],
      attributes: ['id', 'courseId', 'weekDay', 'startTime', 'endTime', "classId"],
      where: {
        weekDay: weekDay,
        classId: classId
      }
    })

    .then(allTime => {
      let isValid = true;
      for (let i = 0; i < allTime.length; i++) {

        if ((allTime[i].endTime <= req.body.startTime || allTime[i].startTime >= req.body.endTime)) {
          isValid = false;
          res.send({
            "code": 416,
            "message": "Course is overlapping with other courses, the time has not been changed. Please write another time"
          })
          break;

        }
        if (!isValid) {
          break;
        }
      }
      if (isValid) {

        courseTime.update({
            weekDay: weekDay,
            startTime: startTime,
            endTime: endTime

          }, {
            where: {
              courseId: courseId
            }
          })
          .then((time) => {
            if (time[0] === 0) {
              courseTime.create({
                courseId: courseId,
                weekDay: weekDay,
                startTime: startTime,
                endTime: endTime

              }).then((course) => {
                res.send({
                  "code": 200,
                  "message": `Course with timetable was added`
                })
              }).catch(function(error) {
                res.send({
                  "error": error,
                  "code": 400,
                  "message": "error occured while adding a time"
                });
              });

            }
            res.send({
              "code": 200,
              "message": "time was updated"
            });
          })
      }
    }).catch(function(error) {
      res.send({
        "error": error,
        "code": 404,
        "message": "error occured while updating the time"
      });
    })
}
