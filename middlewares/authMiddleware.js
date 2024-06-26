const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ status:'failure',code:403, message: 'No token provided'});
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ status:'failure',code:500, message: 'Failed to authenticate token'});
    }
    req.userId = decoded.id;
    next();
  });
};
