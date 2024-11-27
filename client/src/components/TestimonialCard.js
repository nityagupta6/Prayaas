import React from "react";

export default function TestimonialCard({ testimonial, ind }) {
  return (
    <div className="grid justify-items-stretch">
      {ind % 2 === 0 && (
        <div className="text-start justify-self-start w-[80%] lg:w-[50%] mt-7">
          <h1 className="text-2xl text-[#306F5E] font-bold">
            {testimonial.created_by}
          </h1>
          <p>
            <i className="fa-sharp fa-solid fa-quote-left text-4xl text-[#F7D770]"></i>
            &nbsp;&nbsp;&nbsp;
            <span className="text-lg text-[#636363]">
              {testimonial.content}
            </span>
          </p>
        </div>
      )}
      {ind % 2 === 1 && (
        <div className="text-end justify-self-end w-[80%] lg:w-[50%] mt-7">
          <h1 className="text-2xl text-[#306F5E] font-bold">
            {testimonial.created_by}
          </h1>
          <p>
            <i className="fa-sharp fa-solid fa-quote-left text-4xl text-[#F7D770]"></i>
            &nbsp;&nbsp;&nbsp;
            <span className="text-lg text-[#636363]">
              {testimonial.content}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
