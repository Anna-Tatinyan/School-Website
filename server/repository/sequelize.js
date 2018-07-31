// require('dotenv').config();
//
// const Sequelize=require('sequelize');
// const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
//   host: process.env.DB_HOST,
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
// });
//
// const student = sequelize.define('student', {
//   // Here are the columns of the table
//   f_name: {type: Sequelize.STRING},
//   l_name: {type: Sequelize.STRING},
//   age: {type: Sequelize.INTEGER},
//   email: {type: Sequelize.STRING},
//   phone: {type: Sequelize.STRING},
//   gender: {type: Sequelize.ENUM("female","male")}
// });
//
// student.sync().then(function () {
//   // Table created
//   return student.create({
//     f_name: 'Aram',
//     l_name: "Vardanyan",
//     age: 18,
//     email: "aram_vardanyan@gmail.com",
//     phone: "077854585",
//     gender: "male"
//   });
// });
