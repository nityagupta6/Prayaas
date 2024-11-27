const express = require("express");
const { checkout } = require("./payment.controller");
const paymentRouter = express.Router();
paymentRouter.post("/pay", checkout);
module.exports = paymentRouter;
