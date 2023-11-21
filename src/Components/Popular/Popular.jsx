import React from "react";
import product_data from "../Assets/data";
import Item from "../Item/Item";
const Popular = () => {
  return (
    <div className="py-10 min-h-screen">
      <h1 className="uppercase text-2xl font-semibold text-center">
        Popular In Men
      </h1>
      <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 justify-center">
        {product_data.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
