import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { HiXCircle } from "react-icons/hi2";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, addToCart, clearCart } =
    useContext(ShopContext);

  // Calculate subtotal
  const subtotal = all_product.reduce(
    (acc, product) => acc + product.new_price * cartItems[product.id],
    0
  );

  // Placeholder values for shipping, total, and currency
  const shipping = 4.99;
  const total = subtotal + shipping;
  const currency = "৳";

  const handleQuantityChange = (productId, newQuantity) => {
    // Update quantity in the cart using your specific function
    addToCart(productId, newQuantity);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:space-x-6">
        <div className="rounded-lg md:w-2/3 w-full">
          {/* Product */}
          <div className="justify-between mb-6 rounded-lg bg-white p-3 shadow-md flex flex-col md:flex-row">
            {all_product.map((product) => (
              <div
                key={product.id}
                className="flex flex-col lg:flex-row w-full md:w-auto"
              >
                {cartItems[product.id] > 0 && (
                  <>
                    <img
                      src={product.image}
                      alt={`product-pic-${product.id}`}
                      className="w-20 md:w-32 h-full md:h-32 rounded-lg"
                    />
                    <div className="md:ml-4  w-full justify-between py-4 md:py-10">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {product.name}
                        </h2>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 space-x-6">
                        <div className="flex items-center border-gray-100">
                          <button
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => removeFromCart(product.id)}
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
                            onClick={() =>
                              handleQuantityChange(
                                product.id,
                                cartItems[product.id] + 1
                              )
                            }
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="mt-1 text-lg text-gray-700">
                            {currency}
                            {product.new_price * cartItems[product.id]}
                          </p>
                          <button onClick={() => clearCart(product.id)}>
                            {/* Use clearCart instead of removeFromCart */}
                            <HiXCircle size={30} color="red" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Subtotal */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 w-full">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">
              {currency}
              {subtotal}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">
              {currency}
              {shipping}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {currency}
                {total.toFixed(2)}
              </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
