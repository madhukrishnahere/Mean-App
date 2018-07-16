const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_EXPIRESIN);
    req.memberData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Auth failed"
    });
  }
};
