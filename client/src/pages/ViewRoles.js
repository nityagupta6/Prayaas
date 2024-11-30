import React, { useEffect, useState } from "react";
import MultiSlider from "../components/MultiSlider";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

export default function Events({ user }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    const roles = [
        {
            id: 1,
            title: "Admin",
            icon: (
                <i
                    className="fa-solid fa-user-gear"
                    style={{ color: 'white', fontSize: '110px', paddingTop: '40px', paddingBottom: '10px' }}
                ></i>
            ),
            content: [
                "Add Event",
                "Add Story",
                "Add Testimonial",
                "View Users",
                "Donate",
            ],
        },
        {
            id: 2,
            title: "Member",
            icon: (
                <i
                    className="fa-solid fa-user"
                    style={{ color: 'white', fontSize: '110px', paddingTop: '40px', paddingBottom: '10px' }}
                ></i>
            ),
            content: [
                "Add Event",
                "Add Story",
                "Donate",
            ],
        },
        {
            id: 3,
            title: "Alumni",
            icon: (
                <i
                    className="fa-solid fa-user-graduate"
                    style={{ color: 'white', fontSize: '110px', paddingTop: '40px', paddingBottom: '10px' }}
                ></i>
            ),
            content: [
                "Add Testimonial",
                "Donate",
            ],
        },
        {
            id: 4,
            title: "None",
            icon: (
                <i
                    className="fa-solid fa-users"
                    style={{ color: 'white', fontSize: '110px', paddingTop: '40px', paddingBottom: '10px' }}
                ></i>
            ),
            content: [
                "Donate",
            ],
        },
    ];

    return (
        <section id="events">
            <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
                <div className="grid grid-cols-2 justify-items-stretch items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734] justify-self-start">
                        Roles
                    </h1>
                    <div
                        className="text-[#636363] hover:text-[#306F5E] cursor-pointer text-lg justify-self-end underline underline-offset-1"
                        onClick={handleClick}
                    >
                        Go to home
                    </div>
                </div>

                {roles.length === 0 ? (
                    <div className="mt-10 flex justify-center">
                        <Oval color="#306F5E" height={80} width={80} />
                    </div>
                ) : (
                    <div className="m-auto mt-10">
                        <MultiSlider items={roles} event={false} story={false} role={true} />
                    </div>
                )}
            </div>
        </section>
    );
}
