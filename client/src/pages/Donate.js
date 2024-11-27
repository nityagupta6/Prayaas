import React, { useState } from "react";
import donate from "../img/donate.jpg";
import Navbar1 from "../components/Navbar1";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function Donate({ user, func }) {
  const baseURL = "https://prayaas.onrender.com";
  const [amount, setAmount] = useState(null);
  const [loading, setLoading] = useState(false);

  func(amount);

  const navigate = useNavigate();
  const payment = async () => {
    try {
      const stripe = await loadStripe(
        `pk_test_51N2AgSSCj3qeyMGvAo1HPe2M6PWZuIxfKTL6skMnncKP8N5V9YQO0EBAarnZIP5FoHmOHV0qEefJCiDPAO01SNTj00UQk6m28P`
      );
      const product = {
        name: "donation",
        price: amount,
      };
      const d = await axios.post(`${baseURL}/v1/payments/pay`, {
        product,
      });
      // console.log(d.data.id);
      const result = stripe.redirectToCheckout({
        sessionId: d.data.id,
      });
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    if (amount > 0) {
      setLoading(true);
      payment();
    } else{
      navigate("/");
    }
  };

  return (
    <div
      className="bg-cover"
      // style={{ backgroundImage: `url(${donate})` }}
    >
      <Navbar1 user={user} />
      <div className="mt-24 flex flex-col p-6 md:p-10 lg:p-14 bg-[#306F5E] text-white text-center text-lg md:text-2xl lg:text-3xl tracking-wide">
        <p className="m-auto">Charity is an act of a soft heart ❤️</p>
      </div>
      <div className="flex flex-col p-6 md:p-10 lg:p-14 bg-[#F7D770] text-w[#2C3734] text-center text-md md:text-xl lg:text-2xl tracking-wide">
        <p className="m-auto">
          Please Enter the Amount you wish to Donate (INR)
        </p>
        <input
          className="mt-6 w-56 m-auto p-2 border-2 border-[#636363]"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="Enter Amount"
        />
        <div>
          <button
            className="mt-4 py-3 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#306F5E] text-white"
            onClick={handleClick}
          >
            Donate Now
          </button>
        </div>
      </div>
      {loading && <div className="mt-8 flex justify-center"><Oval color="#306F5E" height={80} width={80} /></div>}
    </div>
  );
}
