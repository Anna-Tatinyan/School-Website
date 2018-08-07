var jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.generateToken = function(user) {
  return token = jwt.sign({email:user.email}, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}
