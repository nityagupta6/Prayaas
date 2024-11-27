const User = require("../../models/user");
async function getSingleUser(req, res) {
  try {
    const user = await User.findOne({ user_id: req.query.user_id });
    if (!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      });
    }
    res.send(user);
  } catch (err) {
    return res.status(500).send({
      message: "Error retrieving user with id " + req.params.id,
    });
  }
}

module.exports = {
  getSingleUser,
};
