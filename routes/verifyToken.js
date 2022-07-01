const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHedder = req.headers.token;
  if (authHedder) {
    const token = authHedder.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(401).json("token not valid");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("you are not authenticated !");
  }
};

const verifyTokenAndAutherization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not allowed !");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not allowed !");
    }
  });
};
module.exports = {
  verifyToken,
  verifyTokenAndAutherization,
  verifyTokenAndAdmin,
};
