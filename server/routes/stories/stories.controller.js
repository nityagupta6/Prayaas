const Story = require("../../models/stories");
const { v4: uuidv4 } = require("uuid");
async function getAllStories(req, res) {
  console.log("here is me");
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (e) {
    res.status(404).send(e.message);
  }
}
async function getSingleStory(req, res) {
  const { story_id } = req.query;
  console.log("here");
  console.log(story_id);
  try {
    const story = await Story.find({ story_id: story_id });
    res.status(200).json(story);
  } catch (e) {
    res.status(404).send(e.message);
  }
}
async function createStory(req, res) {
  const { title, content, img_url } = req.body;
  const story_id = uuidv4();

  const story = new Story({
    story_id,
    title,
    content,
    img_url,
  });
  try {
    await story.save();
    res.status(201).json(story);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
async function updateStory(req, res) {
  const { story_id, title, content, img_url } = req.body;
  try {
    const story = await Story.findOneAndUpdate(
      { story_id: story_id },
      { title, content, img_url }
    );
    res.status(200).json(story);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
async function deleteStory(req, res) {
  const { story_id } = req.body;
  try {
    const story = await Story.findOneAndDelete({ story_id: story_id });
    res.status(200).json(story);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
module.exports = {
  getAllStories,
  getSingleStory,
  createStory,
  updateStory,
  deleteStory,
};
