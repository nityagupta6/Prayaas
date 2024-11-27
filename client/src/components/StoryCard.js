import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading from '../img/loading.png'

export default function StoryCard({ story, ind }) {
  const desc =
    story.content.length > 700
      ? story.content.slice(0, 700) + "..."
      : story.content;
  // console.log(story.img_url);
  return (
    <>
      <div className="block lg:hidden w-[95%] m-auto">
        <div className="flex flex-col items-center justify-center bg-white w-[100%]">
          <div className="basis-1/2">
            {/* <img
              src={story.img_url}
              className="h-80"
              alt={story.title}
            /> */}
            <LazyLoadImage src={story.img_url} placeholderSrc={loading} className="h-80" alt={story.title} />
          </div>
          <div className=" flex flex-col justify-center w-[90%] h-[25em] m-auto">
            <h4 className="text-xl lg:text-2xl font-bold mt-4 lg:mt-6 text-[#2C3734]">
              {story.title}
            </h4>
            <p className="text-sm mt-2 mb-4 lg:mb-6 text-[#636363] font-light leading-relaxed tracking-wide">
              {desc}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-row bg-white h-[30rem] w-[100%]">
          {ind % 2 === 0 && (
            <div className="basis-2/5">
              {/* <img src={story.img_url} className="w-[100%] h-[100%]" alt="" /> */}
              <LazyLoadImage src={story.img_url} placeholderSrc={loading} className="w-auto h-[30rem]" alt={story.title} />
            </div>
          )}
          <div className="basis-3/5 m-auto">
            <h4 className="w-[80%] m-auto text-4xl font-bold mt-4 lg:mt-6 text-[#2C3734]">
              {story.title}
            </h4>
            <p className="w-[80%] m-auto text-md mt-4 mb-4 lg:mb-6 text-[#636363] font-light leading-relaxed tracking-wide">
              {desc}
            </p>
          </div>
          {ind % 2 === 1 && (
            <div className="basis-2/5">
              <LazyLoadImage src={story.img_url} placeholderSrc={loading} className="w-auto h-[30rem]" alt={story.title} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
