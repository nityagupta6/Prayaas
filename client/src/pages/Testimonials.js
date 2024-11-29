import React, { useEffect, useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { Oval } from "react-loader-spinner";

export default function Testimonials({ user }) {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await api.getAllTestimonials();

      if (isSubscribed) {
        setTestimonials(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);

  // if (testimonials.length === 0) {
  //   return <></>;
  // }

  const handleClick = () => {
    if (user?.is_alumni || user?.is_admin) navigate("/createtestimonial");
    else navigate("/");
  };
  // console.log(testimonials);

  const testimonialss = testimonials.slice(0, 4);

  return (
    <section id="testimonials">
      <div className="border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl"></div>
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          Our Alumnis Say
        </h1>
        {testimonials.length === 0 ? (
          <div className="mt-10 flex justify-center">
            <Oval color="#306F5E" height={80} width={80} />
          </div>
        ) : (
          <div className="mt-12">
            {testimonialss.map((testimonial, _index) => (
              <TestimonialCard
                testimonial={testimonial}
                key={_index}
                ind={_index}
              />
            ))}
          </div>
        )}

        {(user?.is_alumni || user?.is_admin) && (
          <div className="flex justify-center mt-12">
            <button
              className="py-2 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#F7D770] text-[#636363]"
              onClick={handleClick}
            >
              Add Your Testimonial
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
