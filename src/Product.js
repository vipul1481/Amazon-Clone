import React from "react";
import "./Product.css";
function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p> ⭐</p>
          ))}
      </div>
    </div>
  );
}

export default Product;
