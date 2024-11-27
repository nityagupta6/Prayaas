import React from "react";
import success from "../img/success.jpg";

export default function PaymentSuccess({ user }) {
  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-10 font-bold text-[#306F5E]">
          Payment Success!
        </h1>
        <img src={success} className="h-72 w-96 m-auto" alt="" />
        <p className="text-4xl text-[#636363] mt-10">
          Thank you, {user?.name} for your Contribution!
        </p>
      </div>
    </div>
  );
}
