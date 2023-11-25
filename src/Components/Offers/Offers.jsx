import React from "react";
import exclusive_image from "../Assets/exclusive_image.jpg";
import "../Offers/Offers.css";
const Offers = () => {
  return (
    <div className="offers min-h-screen lg:px-20 md:px-20 px-5">
      <div className="grid md:grid-cols-2 py-32 gap-y-10">
        <div className="flex  flex-col justify-center items-center  gap-5">
          <h1 className="text-4xl font-medium">Exclusive</h1>
          <h1 className="text-2xl font-medium">Offers For You</h1>
          <p className="font-medium">Only On Best Sellers Products</p>
          <button
            type="button"
            className=" flex gap-4 items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 group-hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-2xl lg:text-lg px-5 py-3.5 text-center me-2 duration-300 w-40"
          >
            Check Now!
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={exclusive_image}
            className=" w-80 shadow-md rounded-lg"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
