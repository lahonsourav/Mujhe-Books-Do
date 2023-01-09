import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "../stateprovider/StateProvider";

function Product({ id, title, author, image, price, rating }) {
  // const [state, dispatch] = useStateValue();
  const [{ basket }, dispatch] = useStateValue();
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        author: author,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const handleClick = () => {
    setMessage("Item added to Cart");
    setShowMessage(true);
    addToBasket();
  };

  if (!showMessage) {
    return (
      <div className="product">
        <div className="product__info">
          <p> {title}</p>
          <p className="author__name"> {author}</p>
          <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>

          {/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div> */}
        </div>
        <img src={image} alt="" />

        <button onClick={handleClick}>Add to Cart</button>
      </div>
    );
  }

  setTimeout(() => {
    setShowMessage(false);
  }, 3000);

  return (
    <div className="product">
      <div className="flash-message" role="alert">
        <p>{message}</p>
        {/* <button
          type="button"
          className="close"
          onClick={() => setShowMessage(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
      <div className="product__info">
        <p> {title}</p>
        <p className="author__name"> {author}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        {/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div> */}
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
