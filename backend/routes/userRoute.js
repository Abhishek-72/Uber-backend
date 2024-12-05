const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 character long"),
    body("fullname.lastname")
      .isLength({ min: 3 })
      .withMessage("last name must be at least of 3 character long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.resgisterUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 charcters long"),
  ],
  userController.loginUser
);

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);
router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router;
