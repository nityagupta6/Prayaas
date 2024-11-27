const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  event_id: String,
  title: String,
  content: String,
  img_url: String,
});

module.exports = mongoose.model("Event", eventSchema);
