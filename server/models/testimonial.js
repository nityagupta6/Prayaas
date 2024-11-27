const mongoose = require("mongoose");

const testimonalSchema = mongoose.Schema({
  testimonial_id: String,
  created_by: String,
  content: String,
});

module.exports = mongoose.model("Testimonial", testimonalSchema);
