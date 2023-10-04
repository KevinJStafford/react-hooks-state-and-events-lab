import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, updateCart] = useState(false)
  const renderCartText = inCart ? "Remove From Cart" : "Add To Cart"
  
  function handleAddToCart() {
    updateCart((currentState) => !currentState)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">{renderCartText}</button>
    </li>
  );
}

export default Item;
