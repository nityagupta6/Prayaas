import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8000/v1" });
export const api = {
  login: (data) => API.post("/auth/login", data),
  signup: (data) => API.post("/auth/signup", data),
  getAllEvents: () => API.get("/events/events"),
  getSingleEvent: (event_id) => API.get(`/events/event?event_id=${event_id}`),
  createEvent: (data) => API.post("/events/event", data),
  updateEvent: (data) => API.put("/events/event", data),
  deleteEvent: (data) => API.delete("/events/event", data),

  getAllStories: () => API.get("/stories/stories"),
  getSingleStory: (story_id) => API.get(`/stories/story?story_id=${story_id}`),
  createStory: (data) => API.post("/stories/story", data),
  updateStory: (data) => API.put("/stories/story", data),
  deleteStory: (data) => API.delete("/stories/story", data),

  getAllTestimonials: () => API.get("/testimonials/testimonials"),
  getSingleTestimonial: (testimonial_id) =>
    API.get(`/testimonials/testimonial?testimonial_id=${testimonial_id}`),
  createTestimonial: (data) => API.post("/testimonials/testimonial", data),
  updateTestimonial: (data) => API.put("/testimonials/testimonial", data),
  deleteTestimonial: (data) => API.delete("/testimonials/testimonial", data),

  getSingleUser: (user_id) => API.get(`/users/user?user_id=${user_id}`),
};
