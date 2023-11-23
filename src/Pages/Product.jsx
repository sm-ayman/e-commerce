import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContextProvider";
import { useParams } from "react-router-dom";
import Breadcums from "../Components/Breadcums/Breadcums";
import ProductDetail from "../Components/ProductDetail/ProductDetail";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();
  const product = all_product.find((e) => e.id === Number(productID));
  return (
    <div>
      <Breadcums product={product} />
      <ProductDetail product={product}/>
    </div>
  );
};

export default Product;
