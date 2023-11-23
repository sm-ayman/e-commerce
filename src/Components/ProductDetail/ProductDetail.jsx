import React from "react";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";

const ProductDetail = (props) => {
  const { product } = props;
  return (
    <div class="md:px-20 px-10 pb-10">
      <div class="lg:col-gap-10 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5">
        {/* image-list */}
        <div class="lg:col-span-3 lg:row-end-1">
          <div class="lg:flex lg:items-start">
            <div class="lg:order-2 lg:ml-5">
              <div class="max-w-xl overflow-hidden rounded-lg">
                <img
                  class="h-full w-full max-w-full object-cover"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>

            <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
              <div class="flex flex-row items-start lg:flex-col">
                <button
                  type="button"
                  class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                >
                  <img
                    class="h-full w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                >
                  <img
                    class="h-full w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                >
                  <img
                    class="h-full w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
          <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.name}
          </h1>
          {/* reviews */}
          <div class="mt-5 flex">
            <div class="flex items-center pb-5">
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
            </div>
            <p class="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
          </div>
          {/* price */}
          <div class="flex gap-x-5 py-2 items-center">
            <h1 class="text-3xl text-purple-600 font-semibold">
              ৳{product.new_price}
            </h1>
            <h1 class="text-2xl text-gray-500 line-through">
              ৳{product.old_price}
            </h1>
          </div>
          <hr />
          {/* sizes */}
          <div class="flex flex-col py-5">
            <span class="font-bold">Select Size:</span>
            <div class="flex items-center mt-2">
              <button class="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
                S
              </button>
              <button class="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
                M
              </button>
              <button class="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
                L
              </button>
              <button class="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
                XL
              </button>
              <button class="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
                XXL
              </button>
            </div>
          </div>
          <hr />
          {/* quantity */}
          <div className="py-5 flex flex-col gap-y-1">
            <p className="font-bold mb-2">Quantity:</p>
            <div className="flex items-center max-w-xs">
              <button
                // onClick={handleDecrease}
                className="text-gray-500 dark:text-gray-400 focus:outline-none"
              >
                <HiMinusCircle size={25} />
              </button>
              <input
                className="w-12 text-center border-t border-b border-gray-300 dark:border-gray-600 focus:outline-none"
                type="number"
                // value={quantity}
                placeholder="0"
              />
              <button
                // onClick={handleIncrease}
                className="text-gray-500 dark:text-gray-400 focus:outline-none"
              >
                <HiPlusCircle size={25} />
              </button>
            </div>
          </div>
          <hr />
          {/* add-to-cart */}
          <div className="py-10 flex justify-center">
            <a
              href="#_"
              className="uppercase w-full py-2 shadow-lg text-xl font-bold text-center text-white transition-all duration-300 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 ease-in-out px-9 md:w-auto rounded-md"
            >
              Add To Cart
            </a>
          </div>
        </div>

        {/* description and  reviews */}
        <div class="lg:col-span-3">
          <div class="border-b border-gray-300">
            <nav class="flex gap-4">
              <a
                href="/"
                title=""
                class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
              >
                {" "}
                Description{" "}
              </a>

              <a
                href="/"
                title=""
                class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
              >
                Reviews
                <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                  {" "}
                  1,209{" "}
                </span>
              </a>
            </nav>
          </div>

          <div class="mt-8 flow-root sm:mt-12">
            <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
            <p class="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              accusantium nesciunt fuga.
            </p>
            <h1 class="mt-8 text-3xl font-bold">
              From the Fine Farms of Brazil
            </h1>
            <p class="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              numquam enim facere.
            </p>
            <p class="mt-4">
              Amet consectetur adipisicing elit. Optio numquam enim facere.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              rerum nostrum eius facere, ad neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
