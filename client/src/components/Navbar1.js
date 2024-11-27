/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Navbar1({user}) {
  // console.log(user)
  const [navbarOpen, setNavbarOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const clickedOutside = (e) => {
      if (navbarOpen && ref.current && !ref.current.contains(e.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [navbarOpen]);

  return (
    <div className="fixed w-full top-0 z-20" ref={ref}>
      <nav
        className="relative flex flex-wrap items-center justify-between px-2 py-1 mb-3 bg-[#F8F4E9]"
      >
        <div className="container px-6 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed mr-4 my-2 whitespace-nowrap text-[#636363] flex flex-row"
              href="/"
              onClick={(e) =>{
                setNavbarOpen(!navbarOpen)
                let about = document.getElementById("home");
                e.preventDefault();
                about && about.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState("", "", "/");
              }}
            >
              <img src={logo} className="h-16 mt-2" alt="logo" />
            </a>
            <button
              className=" cursor-pointer leading-none mx-6 my-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen && (
                <i className="fa-solid fa-bars text-[#306F5E] text-2xl"></i>
              )}
              {navbarOpen && (
                <i className="fa-solid fa-x text-[#306F5E] text-2xl"></i>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center lg:items-center">
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-base font-normal leading-snug text-[#636363] hover:opacity-75 hover:text-[#306F5E]"
                  }
                  to="/"
                  onClick={(e) =>{
                    setNavbarOpen(!navbarOpen)
                  }}
                >
                  Go to Home
                </Link>
              </li>
              {!user && <li className="nav-item">
                <Link
                  className={
                "mx-6 my-2 lg:py-2 lg:px-6 flex items-center text-base font-normal leading-snug hover:opacity-75 text-[#636363] lg:text-[#306F5E] lg:border-2 lg:border-[#306F5E] "
                  }
                  to="/login"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Login
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
