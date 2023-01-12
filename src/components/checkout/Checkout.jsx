import React, { useState } from "react";
import "./Checkout.css";
import CHARITY from "../../images/charity.png";
import Subtotal from "./Subtotal";
import { useStateValue } from "../stateprovider/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {


  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__left">
          <img className="checkout__ad" src={CHARITY} alt="10% charity image" />
          <div>
            <div>
              <h2 className="checkout__title">
                You are just one step away from owning this bookshelf:
              </h2>
            </div>
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>

      {/* check how to use the flipMove */}
      
        <div className="checkout__items-list">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              author={item.author}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      
    </div>
  );
}

export default Checkout;
