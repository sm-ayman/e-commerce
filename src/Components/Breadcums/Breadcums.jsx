import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Breadcums = (props) => {
  const { product } = props;
  return (
    <div className="ps-10 flex gap-x-2 py-2 font-thin">
      Home <MdKeyboardDoubleArrowRight size={24} /> Shop{" "}
      <MdKeyboardDoubleArrowRight size={24} /> {product.category}{" "}
      <MdKeyboardDoubleArrowRight size={24} /> {product.name}
    </div>
  );
};

export default Breadcums;
