import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateprovider/StateProvider";
import { getBasketTotal } from "../stateprovider/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
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

        <button onClick={e => navigate("/payment", { replace: true })}>Proceed to Checkout</button>
      </div>

      <div className="subtotal__two">
        <p>
          Thank you for purchasing books from our site.
        </p>
      </div>
    </>
  );
}

export default Subtotal;
