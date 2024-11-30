const express = require("express");
const { getSingleUser, getAllUsers } = require("./user.controller");
const userRouter = express.Router();

userRouter.get("/user/", getSingleUser);
userRouter.get("/viewusers/", getAllUsers);
module.exports = userRouter;
