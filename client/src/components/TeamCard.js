import React from "react";

export default function TeamCard({ member }) {
  return (
    <div className="flex flex-col items-center bg-white">
      <img src={member.img_url} alt="img" className="rounded-full h-32 mt-4" />
      <h1 className="mt-6 font-bold text-lg">{member.name}</h1>
      <p></p>
      <div className="flex flex-row text-xl md:text-2xl mt-4 mb-4">
        <a href={`mailto:${member.email}`}><i class="fa-solid fa-envelope mr-4 cursor-pointer"></i></a>
        <a href={member.linkedin}><i className="fa-brands fa-linkedin cursor-pointer"></i></a>
      </div>
    </div>
  );
}
