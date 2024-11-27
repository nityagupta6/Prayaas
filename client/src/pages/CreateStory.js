import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
// import { Oval } from "react-loader-spinner";

export default function CreateStory({ user }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = React.useState({
    title: "",
    content: "",
    img_url: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newObject = {
      title: formData.title,
      content: formData.content,
      img_url: formData.img_url,
    };
    // console.log(newObject);
    try {
      setLoading(true);
      const res = await api.createStory(newObject);
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
        Add a Story
      </h2>

      <form
        className="justify-center w-[50%] ml-[25%] md:w-[36%] md:ml-[32%]"
        onSubmit={handleSubmit}
      >
        <section className="flex flex-col">
          <label htmlFor="title" className="mt-2.5 text-start">
            Title
          </label>
          <input
            className="p-2 md:p-3 mt-2.5 w-[100%] mb-2.5 text-base border-[#2f2e41] border-2 rounded-lg"
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            required={true}
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="content" className="mt-2.5 text-start">
            Content
          </label>
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
          <label htmlFor="img_url" className="mt-2.5 text-start">
            Image Url
          </label>
          <input
            className="p-2 md:p-3 mt-2.5 w-[100%] mb-2.5 text-base border-[#2f2e41] border-2 rounded-lg"
            id="img_url"
            type="text"
            name="img_url"
            placeholder="Img Url"
            required={true}
            value={formData.img_url}
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
