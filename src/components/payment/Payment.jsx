import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { getBasketTotal } from "../stateprovider/reducer";
import { useStateValue } from "../stateprovider/StateProvider";
import "./Payment.css";
import PaymentOption from "./PaymentOption";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    //do all the stripe stuff here
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment Section = delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>This is a beta version of this website</p>
            <p>We are not actually delivering products for the time being</p>
            <p>Please select Pay on Delivery to make a demo checkout</p>
            <p>Thanks for being a beta user of "Mujhe Books Do"</p>
          </div>
        </div>

        {/* Payment Section = review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
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
        {/* Payment Section = payment method */}
        <div className="payment__section__last">
          <div className="payment__title">
            <h3>Payment Methods</h3>
          </div>
          <div className="payment__details">
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <p>
                    Subtotal ({basket.length} items): <strong> {value}</strong>
                  </p>
                )}
                decimalState={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"}
              />
            </div>

            {/* stripe work */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
            <button disabled={processing || disabled || succeded}>
              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
            <PaymentOption />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
