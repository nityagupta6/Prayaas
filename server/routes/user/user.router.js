const express = require("express");
const { getSingleUser } = require("./user.controller");
const userRouter = express.Router();

userRouter.get("/user/", getSingleUser);
module.exports = userRouter;
