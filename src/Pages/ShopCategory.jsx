import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContextProvider";
import { RxDropdownMenu } from "react-icons/rx";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt="" />
      <div className="flex justify-between p-5 font-medium text-lg">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <button
          type="button"
          class="flex gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-3 py-1"
        >
          Sort By <RxDropdownMenu size={20} />
        </button>
      </div>
      <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 justify-center">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                details={item.details}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center py-10">
        <a
          href="#_"
          class="relative inline-flex items-center justify-center px-16 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
        >
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Button Text
          </span>
          <span class="relative invisible">More</span>
        </a>
      </div>
    </div>
  );
};

export default ShopCategory;
