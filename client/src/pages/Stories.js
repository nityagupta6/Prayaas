import React, { useEffect, useState } from "react";
import MultiSlider from "../components/MultiSlider";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

export default function Stories({ user }) {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await api.getAllStories();

      if (isSubscribed) {
        setStories(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);
  // console.log(stories);
  // if (stories.length === 0) {
  //   return <></>;
  // }

  const handleClick = () => {
    if (user?.is_member) navigate("/createstory");
    else navigate("/");
  };

  return (
    <section id="stories">
      <div className="border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl"></div>
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[90%] lg:w-[80%] m-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          Our Success Stories
        </h1>
        {stories.length === 0 ? (
          <div className="mt-10 flex justify-center">
            <Oval color="#306F5E" height={80} width={80} />
          </div>
        ) : (
          <div className="m-auto mt-10">
            <MultiSlider items={stories} event={false} story={true} />
          </div>
        )}

        {user?.is_member && (
          <div className="flex justify-center mt-12">
            <button
              className="py-2 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#F7D770] text-[#636363]"
              onClick={handleClick}
            >
              Add Story
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
