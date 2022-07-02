const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
  var encrypted = await CryptoJS.AES.encrypt(
    req.body.password,
    process.env.CRIPTOJS_SEC
  );
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: encrypted,
  });
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      var decrypted = await CryptoJS.AES.decrypt(
        user.password,
        process.env.CRIPTOJS_SEC
      );
      password = decrypted.toString(CryptoJS.enc.Utf8);
      if (password === req.body.password) {
        const Token = jwt.sign(
          {
            _id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, Token });
      } else {
        res.status(401).json({ message: "password is incorrect" });
      }
    } else {
      res.status(401).json({ message: "user not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
