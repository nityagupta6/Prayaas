import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
// import { Oval } from "react-loader-spinner";

export default function CreateTestimonial({ user }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = React.useState({
    created_by: "",
    content: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newObject = {
      created_by: user.name,
      content: formData.content,
    };
    // console.log(newObject);
    try {
      setLoading(true);
      const res = await api.createTestimonial(newObject);
      setLoading(false);
      navigate("/");
      window.location.reload();
    } catch (e) {
      console.log(e.response.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Oval color="#306F5E" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className="onboarding bg-opacity-20">
      <h2 className="text-2xl md:text-3xl font-bold text-[#306F5E] text-center pt-8 pb-5">
        Create Testimonial
      </h2>

      <form
        className="justify-center w-[50%] ml-[25%] md:w-[36%] md:ml-[32%]"
        onSubmit={handleSubmit}
      >
        <section className="flex flex-col">
          <textarea
            className="p-2 md:p-3 mt-2.5 w-[100%] mb-2.5 text-base border-[#2f2e41] border-2 rounded-lg h-56"
            id="content"
            type="text"
            name="content"
            placeholder="Content"
            required={true}
            value={formData.content}
            onChange={handleChange}
          />
        </section>
        <button className="text-white bg-[#306F5E] px-4 py-2 md:px-6 md:py-3 m-2 font-semibold w-fit text-lg md:text-xl cursor-pointer hover:opacity-75">
          Submit
        </button>
      </form>
    </div>
  );
}
