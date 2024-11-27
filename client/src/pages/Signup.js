/* eslint-disable */
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../api";

export default function Signup() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("other");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    if (password === confPassword) {
      try {
        data = await api.signup({email, password, name, type});
        setCookie("AuthToken", data.data.token);
        setCookie("UserId", data.data.userId);
        navigate("/");
        window.location.reload();
      } catch (e) {
        notify(e.response.data);    
      }
    } else {
      notify("Passwords don't match.");
    }
  };

  const notify = (error) =>
    toast.error(error, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <ToastContainer
        className="mt-20"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="onboarding flex flex-col lg:flex-row items-center justify-center bg-[#F8F4E9] h-[100vh] bg-opacity-25 bg-auto">
        <div className="rounded-2xl bg-white drop-shadow-2xl overflow-auto">
          <form
            onSubmit={handleSubmit}
            className="max-w-[320px] w-[240px] md:w-[300px] lg:w-[320px] mr-5 ml-5 mt-8 mb-8 md:mt-10 md:mb-10 md:mr-7 md:ml-7 lg:mr-10 lg:ml-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#306F5E] text-center">
              Signup
            </h2>
            <label className="block mr-auto ml-auto mt-6 mb-6 md:mt-8 md:mb-8">
              <span className="block mb-2 text-left text-md md:text-lg text-[#2f2e41] font-medium">
                Name:
              </span>
              <input
                className="p-2 md:p-3 w-[100%] border-[#2f2e41] border-2 rounded-lg focus:bg-[#FFD9C0] focus:bg-opacity-10"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
              />
            </label>
            <label className="block mr-auto ml-auto mt-6 mb-6 md:mt-8 md:mb-8">
              <span className="block mb-2 text-left text-md md:text-lg text-[#2f2e41] font-medium">
                Email:
              </span>
              <input
                className="p-2 md:p-3 w-[100%] border-[#2f2e41] border-2 rounded-lg focus:bg-[#FFD9C0] focus:bg-opacity-10"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              />
            </label>
            <label className="block mr-auto ml-auto mt-6 mb-6 md:mt-8 md:mb-8">
              <span className="block mb-2 text-left text-md md:text-lg text-[#2f2e41] font-medium">
                Set Password:
              </span>
              <input
                className="p-2 md:p-3 w-[100%] border-[#2f2e41] border-2 rounded-lg focus:bg-[#FFD9C0] focus:bg-opacity-10"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                maxLength={13}
                minLength={6}
              />
            </label>
            <label className="block mr-auto ml-auto mt-6 mb-6 md:mt-8 md:mb-8">
              <span className="block mb-2 text-left text-md md:text-lg text-[#2f2e41] font-medium">
                Confirm Password:
              </span>
              <input
                className="p-2 md:p-3 w-[100%] border-[#2f2e41] border-2 rounded-lg focus:bg-[#FFD9C0] focus:bg-opacity-10"
                type="password"
                onChange={(e) => setConfPassword(e.target.value)}
                value={confPassword}
                placeholder="Password"
                maxLength={13}
                minLength={6}
              />
            </label>
            <label className="mt-2.5 text-start">I am a/an:</label>
            <div className="multiple-input-container flex flex-row">
              <input
                className="hidden p-2 md:p-3 mt-2.5 mb-2.5 mr-2 text-base border-[#2f2e41] border-2 rounded-lg"
                id="alumni-identity"
                type="radio"
                name="type"
                value="alumni"
                onChange={(e)=>setType(e.target.value)}
                checked={type === "alumni"}
              />
              <label
                htmlFor="alumni-identity"
                className="mt-2.5 mb-2.5 p-2.5 border-gray-400 border-2 rounded-lg mr-2.5 transition-all duration-300 cursor-pointer"
              >
                Alumni
              </label>
              <input
                className="hidden p-2 md:p-3 mt-2.5 mb-2.5 mr-2 text-base border-[#2f2e41] border-2 rounded-lg"
                id="member-identity"
                type="radio"
                name="gender_identity"
                value="member"
                onChange={(e)=>setType(e.target.value)}
                checked={type === "member"}
              />
              <label
                htmlFor="member-identity"
                className="mt-2.5 mb-2.5 p-2.5 border-gray-400 border-2 rounded-lg mr-2.5 transition-all duration-300 cursor-pointer"
              >
                Member
              </label>
              <input
                className="hidden p-2 md:p-3 mt-2.5 mb-2.5 mr-2 text-base border-[#2f2e41] border-2 rounded-lg"
                id="none-identity"
                type="radio"
                name="none_identity"
                value="none"
                onChange={(e)=>setType(e.target.value)}
                checked={type === "none"}
              />
              <label
                htmlFor="none-identity"
                className="mt-2.5 mb-2.5 p-2.5 border-gray-400 border-2 rounded-lg mr-2.5 transition-all duration-300 cursor-pointer"
              >
                None
              </label>
            </div>
            <div className="w-[100%] flex justify-center items-center">
              <button className="text-white bg-[#306F5E] px-4 py-2 md:px-6 md:py-3 m-2 rounded-full font-semibold w-fit text-lg md:text-xl cursor-pointer hover:opacity-75">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
