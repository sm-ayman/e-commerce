import React from "react";

const Item = (props) => {
  return (
    <div className="py-10 flex justify-center">
      <div className="card w-72 glass shadow-lg">
        <figure>
          <img className="w-2/5 rounded-md" src={props.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.details}</p>
          <div className="flex justify-between">
            <div className="line-through">৳{props.old_price}</div>
            <div>৳{props.new_price}</div>
          </div>
          <div className="card-actions justify-center pt-3">
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Buy Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
