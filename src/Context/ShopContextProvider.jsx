import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const clearSpecificItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Update quantity in the cart using your specific function
    addToCart(productId, newQuantity);
  };

  // Calculate subtotal
  const subtotal = all_product.reduce(
    (acc, product) => acc + product.new_price * cartItems[product.id],
    0
  );
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const decreaseQuantity = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };
  
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    clearSpecificItem,
    clearCart,
    subtotal,
    getTotalCartItems,
    handleQuantityChange,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
