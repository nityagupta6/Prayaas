const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user_id: String,
  name: String,
  email: String,
  password: String,
  is_alumni: {
    type: Boolean,
    default: false,
  },
  is_member: {
    type: Boolean,
    default: false,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  profile_completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
