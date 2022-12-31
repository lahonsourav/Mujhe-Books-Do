import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateprovider/StateProvider";
import { getBasketTotal } from "../stateprovider/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong> {value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                Donate 10% of my payment
              </small>
            </>
          )}
          decimalState={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"₹"}
        />

        <button>Proceed to Checkout</button>
      </div>

      <div className="subtotal__two">
        <p>
          Thank you for purchasing books from our site, 10% of your purchase
          will be donated to charity as a part of 'Mujhe Books Do' helping hands
          initiative. This initiative aims to provide basic primary education
          facility to poor children.
        </p>
      </div>
    </>
  );
}

export default Subtotal;
