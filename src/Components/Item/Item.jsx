import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="py-6 flex justify-center">
      <div className="card w-64 glass shadow-lg transition-transform transform hover:scale-105 duration-500">
        <Link to={`/product/${props.id}`}>
          <figure>
            <img
              onClick={window.scrollTo(0, 0)}
              className="w-60 h-full object-cover rounded-t-md"
              src={props.image}
              alt=""
            />
          </figure>
        </Link>
        <div className="card-body p-2">
          <h2 className="card-title text-base font-bold ">{props.name}</h2>
          <p className="text-gray-600">{props.details}</p>
          <div className="flex justify-between mt-4">
            <div className="text-gray-500 line-through">৳{props.old_price}</div>
            <div className="text-purple-600 font-semibold">
              ৳{props.new_price}
            </div>
          </div>
          {/* <div className="card-actions mt-4">
            <button className="bg-purple-600 text-white hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2">
              Buy Now!
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
