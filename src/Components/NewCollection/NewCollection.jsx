import React from "react";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div className="py-10 min-h-screen">
      <h1 className="uppercase text-2xl font-semibold text-center">
        NEW COLLECTION
      </h1>
      <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 justify-center">
        {new_collection.map((item, i) => {
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

export default NewCollection;
