const Event = require("../../models/events");
const { v4: uuidv4 } = require("uuid");
async function getAllEvents(req, res) {
  console.log("here");
  try {
    const stories = await Event.find();
    res.status(200).json(stories);
  } catch (e) {
    res.status(404).send(e.message);
  }
}
async function getSingleEvent(req, res) {
  const { event_id } = req.query;
  try {
    const event = await Event.find({ event_id: event_id });
    res.status(200).json(event);
  } catch (e) {
    res.status(404).send(e.message);
  }
}
async function createEvent(req, res) {
  const { title, content, img_url } = req.body;
  const event_id = uuidv4();

  const event = new Event({
    event_id,
    title,
    content,
    img_url,
  });
  try {
    await event.save();
    res.status(201).json(event);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
async function updateEvent(req, res) {
  const { event_id, title, content, img_url } = req.body;
  try {
    const event = await Event.findOneAndUpdate(
      { event_id: event_id },
      { title, content, img_url }
    );
    res.status(200).json(event);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
async function deleteEvent(req, res) {
  const { event_id } = req.body;
  try {
    const event = await Event.findOneAndDelete({ event_id: event_id });
    res.status(200).json(event);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
module.exports = {
  getAllEvents,
  getSingleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
