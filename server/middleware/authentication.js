const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const verifyToken = async (request, response, next) => {
  const token = request.cookies.token;

  try {
    if (!token) {
      return response.status(404).json({ tokenVerified: false });
    }

    const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
    request.email = decrypt.email;

    //await userLastVisit(decrypt.userName);

    next();
  } catch (error) {
    response.clearCookie("token");
    return response.status(400).send(error.message);
  }
};

module.exports = verifyToken;
