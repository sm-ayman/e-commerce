import React from "react";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useNavigate } from "react-router-dom";

const ProductDetail = (props) => {
  const navigate = useNavigate();
  const { product } = props;
  const { cartItems, increaseQuantity, decreaseQuantity, addToCart } =
    useContext(ShopContext);

  return (
    <div className="md:px-20 px-10 pb-10">
      <div className="lg:col-gap-10 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5">
        {/* image-list */}
        <div className="lg:col-span-3 lg:row-end-1">
          <div className="lg:flex lg:items-start">
            <div className="lg:order-2 lg:ml-5">
              <div className="max-w-xl overflow-hidden rounded-lg">
                <img
                  className="h-full w-full max-w-full object-cover"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>

            <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
              <div className="flex flex-row items-start lg:flex-col">
                <button
                  type="button"
                  className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
          <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.name}
          </h1>
          {/* reviews */}
          <div className="mt-5 flex">
            <div className="flex items-center pb-5">
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                ></path>
              </svg>
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                ></path>
              </svg>
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                ></path>
              </svg>
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                ></path>
              </svg>
              <svg
                className="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  className=""
                ></path>
              </svg>
            </div>
            <p className="ml-2 text-sm font-medium text-gray-500">
              1,209 Reviews
            </p>
          </div>
          {/* price */}
          <div className="flex gap-x-5 py-2 items-center">
            <h1 className="text-3xl text-purple-600 font-semibold">
              ৳{product.new_price}
            </h1>
            <h1 className="text-2xl text-gray-500 line-through">
              ৳{product.old_price}
            </h1>
          </div>
          <hr />
          {/* sizes */}
          <div className="flex flex-col py-5">
            <span className="font-bold">Select Size:</span>
            <div className="flex items-center mt-2">
              <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
                S
              </button>
              <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
                M
              </button>
              <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
                L
              </button>
              <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
                XL
              </button>
              <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white">
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
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => decreaseQuantity(product.id)}
              >
                {" "}
                -{" "}
              </button>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value={cartItems[product.id]}
                min="1"
                readOnly
              />
              <button
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => increaseQuantity(product.id)}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <hr />
          {/* add-to-cart */}
          <div className="py-10 flex justify-start space-x-4">
            {/* <button
              onClick={() => handleAddToCart(product.id)}
              className="uppercase w-full py-2 shadow-lg text-xl font-bold text-center text-white transition-all duration-300 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 ease-in-out px-9 md:w-auto rounded-md"
            >
              Add To Cart
            </button> */}

            <button
              onClick={() => {
                // Replace '/checkout' with the actual path to your checkout page
                addToCart(product.id);
                navigate("/cart");
              }}
              className="uppercase w-full py-2 shadow-lg text-xl font-bold text-center text-white transition-all duration-300 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 ease-in-out px-9 md:w-auto rounded-md"
            >
              অর্ডার করুন
            </button>
          </div>
        </div>

        {/* description and  reviews */}
        <div className="lg:col-span-3">
          <div className="border-b border-gray-300">
            <nav className="flex gap-4">
              <a
                href="/"
                title=""
                className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
              >
                {" "}
                Description{" "}
              </a>

              <a
                href="/"
                title=""
                className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
              >
                Reviews
                <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                  {" "}
                  1,209{" "}
                </span>
              </a>
            </nav>
          </div>

          <div className="mt-8 flow-root sm:mt-12">
            <h1 className="text-3xl font-bold">
              Elevate Your Style with Fashion from Bangladesh
            </h1>
            <p className="mt-4">
              Discover the latest trends and redefine your wardrobe with our
              exclusive collection of fashion items from Bangladesh. Immerse
              yourself in the vibrant colors and exquisite designs crafted to
              enhance your unique style.
            </p>
            <h1 className="mt-8 text-3xl font-bold">
              Craftsmanship from Bangladeshi Artisans
            </h1>
            <p className="mt-4">
              Each fashion piece is a masterpiece, meticulously created by
              skilled artisans in Bangladesh. Experience the blend of tradition
              and modernity as our designs showcase the rich cultural heritage
              of the country.
            </p>
            <p className="mt-4">
              Elevate your fashion game with our carefully curated selection,
              where every stitch tells a story and every detail reflects the
              elegance of Bangladeshi craftsmanship.
            </p>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
