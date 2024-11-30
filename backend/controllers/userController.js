const userModel = require("../models/userModel.js");
const userService = require("../services/userServices.js");
const { validationResult } = require("express-validator");

module.exports.resgisterUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { fullname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({
    token,
    user,
    message: "User registered successfully !",
  });
  next();
};
