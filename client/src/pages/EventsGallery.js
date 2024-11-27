import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading from '../img/loading.png'

const donation = [
  {
    img: "https://images2.imgbox.com/fc/3a/ygsZW1jt_o.jpg",
  },
  {
    img: "https://images2.imgbox.com/cb/8b/6WV8vgsS_o.jpg",
  },
  {
    img: "https://images2.imgbox.com/46/b1/jH8H27Xg_o.jpg",
  },
  {
    img: "https://images2.imgbox.com/37/77/hJKA47Xh_o.jpg",
  },
];

const republic = [
  {
    img: "https://images2.imgbox.com/db/64/qMdSOlDw_o.jpg",
  },
  {
    img: "https://images2.imgbox.com/d0/30/WlWKeCSa_o.jpg",
  },
  {
    img: "https://images2.imgbox.com/36/12/1Y1kNaSn_o.jpg",
  },
  {
    img: "https://images2.imgbox.com/a7/17/5oYAnJ4z_o.jpg",
  },
];

export default function EventsGallery() {
  return (
    <div className="mt-24 mb-24">
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="mt-32 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          Donation Drive
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mt-7">
          {donation.map((item, _index) => (
            <div key={_index}>
              <LazyLoadImage src={item.img} placeholderSrc={loading}  className="h-40 sm:h-44 md:h-52 lg:h-60" width={"100%"} alt="donation" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="mt-32 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          Republic Day
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mt-7">
          {republic.map((item, _index) => (
            <div key={_index}>
              <LazyLoadImage src={item.img} placeholderSrc={loading} className="h-40 sm:h-44 md:h-52 lg:h-60" width={"100%"} alt="republic" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
