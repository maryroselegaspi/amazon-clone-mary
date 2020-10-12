import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("SUBTOTAL IN BASKET", basket);
  return (
    <div className="subtotal">
      {/* Price */}
      <p>Subtotal ({basket.length}) items:</p>
      <CurrencyFormat
        rendertext={(value) => (
          <div>
            {/* <p>Subtotal</p> */}
            <p>
              {/* Subtotal (${basket.length} items): */}
              {/* <strong>{price}</strong> */}
            </p>
            {/* <small className='subtotal__gift'>
                            <input type='checkbox'>This order contains a gift</input>
                        </small> */}
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* <small className="subtotal__gift">
        <input type="checkbox">This order contains a gift</input>
      </small> */}

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
