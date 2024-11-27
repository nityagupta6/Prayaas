const express = require("express");
const {
  getAllStories,
  getSingleStory,
  createStory,
  updateStory,
  deleteStory,
} = require("./stories.controller");
const storyRouter = express.Router();
storyRouter.get("/stories/", getAllStories);
storyRouter.get("/story/", getSingleStory);
storyRouter.post("/story/", createStory);
storyRouter.put("/story/", updateStory);
storyRouter.delete("/story/", deleteStory);
module.exports = storyRouter;
