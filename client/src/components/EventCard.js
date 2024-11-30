import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading from '../img/loading.png'

export default function EventCard({ event }) {
  const desc =
    event.content.length > 300
      ? event.content.slice(0, 300) + "..."
      : event.content;
  // console.log(event)
  return (
    <div className="flex flex-col items-center justify-center bg-[#F7D770] w-[95%] m-auto">
      <div className="w-full h-[14rem] sm:h-[17rem] lg:h-[16rem] flex items-center justify-center">
        {/* This ensures the image covers the container without altering the aspect ratio */}
        <LazyLoadImage
          src={event.img_url}
          placeholderSrc={loading}
          className="w-full h-full object-cover"
          alt={event.title}
        />
      </div>
      <div className="flex flex-col w-[90%] h-[14rem] sm:h-[17rem] lg:h-[16rem]">
        <h4 className="text-base md:text-lg lg:text-xl font-bold mt-2 lg:mt-4 text-[#306F5E]">
          {event.title}
        </h4>
        <p className="text-xs sm:text-sm mt-2 mb-4 lg:mb-4 text-[#636363] font-light leading-relaxed tracking-wide">
          {desc}
        </p>
      </div>
    </div>


  );
}
