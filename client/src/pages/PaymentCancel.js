import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentCancel({ user }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleClickTryAgain = () => {
    navigate("/donate");
  };

  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-10 font-bold text-[#306F5E]">
          Payment Failed 😕
        </h1>
        <div>
          <button
            className="py-3 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#306F5E] text-white mr-8"
            onClick={handleClick}
          >
            Go to Home
          </button>
          <button
            className="py-3 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#306F5E] text-white"
            onClick={handleClickTryAgain}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
