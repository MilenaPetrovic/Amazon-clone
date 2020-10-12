import React from "react";
import "../Style/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} item):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalSkale={2}
        value={basket.reduce((total, item) => total + item.price, 0)} //todo
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$ "}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
