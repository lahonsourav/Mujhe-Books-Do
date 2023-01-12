import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateprovider/StateProvider";
import { getBasketTotal } from "../stateprovider/reducer";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Subtotal() {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const proceed = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login", { replace: true });
    }
    if (user) {
      navigate("/payments", { replace: true });
    }
  };

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

        <button onClick={proceed}>Proceed to Checkout</button>
      </div>

      <div className="subtotal__two">
        <p>Thank you for purchasing books from our site.</p>
      </div>
    </>
  );
}

export default Subtotal;
