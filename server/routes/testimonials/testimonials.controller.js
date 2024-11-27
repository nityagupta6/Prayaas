const Testimonial = require("../../models/testimonial");
const { v4: uuidv4 } = require("uuid");
async function getAllTestimonials(req, res) {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (e) {
    res.status(404).send(e.message);
  }
}
async function getSingleTestimonial(req, res) {
  const { testimonial_id } = req.query;
  try {
    const testimonial = await Testimonial.find({
      testimonial_id: testimonial_id,
    });
    res.status(200).json(testimonial);
  } catch (e) {
    res.status(404).send(e.message);
  }
}
async function createTestimonial(req, res) {
  const { content, created_by } = req.body;
  const testimonial_id = uuidv4();

  const testimonial = new Testimonial({
    testimonial_id,
    content,
    created_by,
  });
  try {
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
async function updateTestimonial(req, res) {
  const { testimonial_id, cur_alum, content } = req.body;
  try {
    const testi = await Testimonial.findOne({ testimonial_id: testimonial_id });
    if (cur_alum !== testi.created_by) {
      return res
        .status(400)
        .send("You are not authorized to update this testimonial");
    }
    const testimonial = await Testimonial.findOneAndUpdate(
      { testimonial_id: testimonial_id },
      { created_by: cur_alum, content, testimonial_id }
    );
    res.status(200).json(testimonial);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
async function deleteTestimonial(req, res) {
  const { testimonial_id, cur_alum } = req.body;
  if (cur_alum !== testi.created_by) {
    return res
      .status(400)
      .send("You are not authorized to delete this testimonial");
  }
  try {
    const testimonial = await Testimonial.findOneAndDelete({
      testimonial_id: testimonial_id,
    });
    res.status(200).json(testimonial);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
module.exports = {
  getAllTestimonials,
  getSingleTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
