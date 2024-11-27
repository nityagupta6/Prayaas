const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
  story_id: String,
  title: String,
  content: String,
  img_url: String,
});

module.exports = mongoose.model("Story", storySchema);
