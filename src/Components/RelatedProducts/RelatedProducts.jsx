import React from "react";
import product_data from "../Assets/data";
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <div class="px-4 py-24">
      <h2 class="text-2xl font-bold tracking-tight text-gray-700">
        Customers also purchased
      </h2>

      <div class="grid md:grid-cols-3 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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

export default RelatedProducts;
