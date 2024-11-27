const express = require("express");
const {
  getAllTestimonials,
  getSingleTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("./testimonials.controller");
const testimonialRouter = express.Router();
testimonialRouter.get("/testimonials/", getAllTestimonials);
testimonialRouter.get("/testimonial/", getSingleTestimonial);
testimonialRouter.post("/testimonial/", createTestimonial);
testimonialRouter.put("/testimonial/", updateTestimonial);
testimonialRouter.delete("/testimonial/", deleteTestimonial);
module.exports = testimonialRouter;
