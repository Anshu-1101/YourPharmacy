const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateToken = (response, email, _id ) => {
  const token = jwt.sign({ email, _id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  return token;
};

module.exports = generateToken;