import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./Axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { getBasketTotal } from "../stateprovider/reducer";
import { useStateValue } from "../stateprovider/StateProvider";
import "./Payments.css";
import PaymentOption from "./PaymentOption";
import { db } from "../../firebase";

const Payment = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  // payment  start
  // const stripe = useStripe();
  // const elements = useElements();

  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  // const [clientSecret, setClientSecret] = useState(true);

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       //stripe expects the total in a currcies subunits
  //       url: "/payments/create?total = ${getBasketTotal(basket) * 100}",
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [basket]);

  // console.log("The client secret is ", clientSecret);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   setProcessing(true);
  //   const payload = await stripe
  //     .confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     })
  //     .then(({ paymentIntent }) => {
  //       db.collection("users")
  //         .doc(user?.uid)
  //         .collection("orders")
  //         .doc(paymentIntent.id)
  //         .set({
  //           basket: basket,
  //           amount: paymentIntent.amount,
  //           created: paymentIntent.created,
  //         });

  //       setSucceded(true);
  //       setError(null);
  //       setProcessing(false);

  //       dispatch({
  //         type: "EMPTY_BASKET",
  //       });

  //       navigate("/orders", { replace: true });
  //     });
  // };

  // const handleChange = (event) => {
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };
  // payment end

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
            <p>{user?.displayName}</p>
            <p>This is a beta version of this website</p>
            <p>We are not actually delivering products for the time being</p>
            <p>
              However you can make a payment with Card or other options to
              support me, But I strongly suggest you not to pay with Card or
              Internet Banking for your security, Please select Pay on Delivery
              to make a demo checkout.
            </p>
            <p>
              Any money you pay via QR code will be treated as Donation and not
              an actual purchase, Thanks for being a user of "Mujhe Books Do"
            </p>
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
            <div className="payment__details__blank"></div>
            {/* stripe work */}

            <form>
              <CardElement className="payment__cardForm" />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <p>
                      Subtotal ({basket.length} items):{" "}
                      <strong> {value}</strong>
                    </p>
                  )}
                  decimalState={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"₹"}
                />
              </div>

              <button disabled={processing || disabled || succeded}>
                <span>
                  {processing ? <p>Processing</p> : "Pay with Card Now"}
                </span>
              </button>
              {error && <div>{error}</div>}
            </form>

            <PaymentOption />
            {/* <div className="payment__option__button">
              <button>Proceed and Order</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
