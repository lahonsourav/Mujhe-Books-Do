import React from "react";
import { useStateValue } from "../stateprovider/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, author, price, rating }) {
  const [{ basket }, { orders }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    dispatch({
      type: "REMOVE_FROM_ORDERS",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="product Image "
      />
      <div className="checkoutProduct__info">
        <div className="only__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__author">{author}</p>
          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong className="rs">{price}</strong>
          </p>
          {/* <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div> */}
        </div>
        <button onClick={removeFromBasket}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
