import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { useStateValue } from "../stateprovider/StateProvider";
import "./Payment.css";
import PaymentOption from "./PaymentOption";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

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
            {/* stripe work */}
           <PaymentOption/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
