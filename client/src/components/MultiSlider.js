/* eslint-disable */
import React from "react";

// import Carousel from 'better-react-carousel';
import EventCard from "./EventCard";
import StoryCard from "./StoryCard";
import RoleCard from "./RoleCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MultiSlider({ items, event, story, role }) {
  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 970 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 970, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 580 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 1,
    },
  };

  return (
    // <Carousel cols={count} rows={1} gap={20} loop={true} autoplay={5000}>
    //   {items.map((item, _index) => (
    //       <Carousel.Item key={_index}>
    //         {event && !testimonial && <EventCard event={item} />}
    //         {!event && !testimonial && <StoryCard story={item} ind={_index} />}
    //         {testimonial && !event && <TestimonialCard testimonial={item}/>}
    //       </Carousel.Item>
    //   ))}
    // </Carousel>

    <Carousel responsive={(event || role) ? responsive1 : responsive2}>
      {items.map((item, _index) => (
        <div key={_index}>
          {event && <EventCard event={item} />}
          {role && <RoleCard role={item} />}
          {story && <StoryCard story={item} ind={_index} />}
        </div>
      ))}
    </Carousel>
  );
}
