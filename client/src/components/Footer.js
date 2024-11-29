import React from "react";
import logo from "../img/logo.png";

export default function Footer() {
  return (
    <section id="contact">
      <div className="bg-[#F7D770]">
        <div className="flex flex-row pt-12 pb-12 lg:px-32">
          <div className="flex flex-col basis-1/2 m-auto justify-center items-center md:items-start">
            <img src={logo} alt="logo" className="h-20 w-32 md:h-24 md:w-36 lg:h-28 lg:w-40" />
          </div>
          <div className="basis-1/2">
            <h1 className="text-md md:text-lg font-bold mb-2">Contact Info:</h1>
            <div className="text-sm md:text-md text-[#636363] mt-4">
              <p>
                Address: IIIT Allahabad, Jhalwa, Devghat, Prayagraj - 211012
              </p>
              <div className="flex flex-row text-2xl mt-4">
                <a
                  href="https://www.facebook.com/PrayaasIIITAOfficial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook-f mr-8"></i>
                </a>
                <a
                  href="https://www.instagram.com/prayaasiiita/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram mr-8"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/prayaas-iiita-9234b217a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#306F5E] flex flex-row pt-2 pb-2 justify-center">
        <p className="text-xs md:text-sm text-white text-center">
          © 2024 nitya24gupta@gmail.com
        </p>
      </div>
    </section>
  );
}
