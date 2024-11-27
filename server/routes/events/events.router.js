const express = require("express");
const {
  getAllEvents,
  getSingleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("./events.controller");
const eventRouter = express.Router();
eventRouter.get("/events/", getAllEvents);
eventRouter.get("/event/", getSingleEvent);
eventRouter.post("/event/", createEvent);
eventRouter.put("/event/", updateEvent);
eventRouter.delete("/event/", deleteEvent);
module.exports = eventRouter;
