const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema({
  testimonial_id: String,
  created_by: String,
  content: String,
});

const defaultTestimonials = [
  {
    testimonial_id: "1",
    created_by: "Puja",
    content: "   As a former student of IIIT Allahabad and a volunteer with Prayaas, I can say with confidence that their programs are making a real difference in the lives of young people in our community. I'm proud to have been a part of such a dedicated and passionate team.",
  },
  {
    testimonial_id: "2",
    created_by: "Rahul Singh",
    content: "   I've seen firsthand the impact that Prayaas is making in the lives of young people in our community. Their programs are empowering students to achieve their full potential and break the cycle of poverty.",
  },
  {
    testimonial_id: "3",
    created_by: "Simran Kaur",
    content: "   Working with Prayaas was one of the highlights of my time at IIIT Allahabad. It was a great way to connect with my peers and give back to our community, and I learned so much about leadership and teamwork along the way.",
  },
  {
    testimonial_id: "4",
    created_by: "Yash Gupta",
    content: "   The skills and experience I gained through volunteering with Prayaas were invaluable to my personal and professional growth. I'm so grateful for the opportunity to give back to my community and make a positive impact on the lives of others.",
  },
];

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

async function insertDefaultTestimonials() {
  try {
    const count = await Testimonial.countDocuments();
    if (count === 0) {
      await Testimonial.insertMany(defaultTestimonials);
      console.log("Default testimonials inserted.");
    } else {
      console.log("Testimonials already exist in the database.");
    }
  } catch (error) {
    console.error("Error inserting default testimonials:", error);
  }
}

mongoose.connection.once("open", () => {
  console.log("MongoDb connection ready");
  insertDefaultTestimonials();
});

module.exports = Testimonial;
