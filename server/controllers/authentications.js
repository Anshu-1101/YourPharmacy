const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const verifyUser = async (request, response) => {

  const token = request.cookies.token;

  try {
    if (!token) {
      return response.status(200).json({ tokenVerified : false });
    }

    const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
    request.user = decrypt.userName;

    return response.status(200).json({ tokenVerified : true });
  } catch (error) {
    response.clearCookie("token");
    return response.status(401).send(error.message);
  }
};

module.exports = {verifyUser};