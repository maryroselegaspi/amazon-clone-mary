import React from 'react'
import './Subtotal.css';
import  CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    console.log('SUBTOTAL IN BASKET', basket)
    return (
        <div className='subtotal'>
            {/* Price */}

            <CurrencyFormat 
                rendertext={(value) => (
                    <>
                        {/* <p></p> */}
                        <p>Subtotal ({basket.length} items):<strong>{' ${price}'}</strong></p>
                        {/* <small className='subtotal__gift'>
                            <input type='checkbox'>This order contains a gift</input>
                        </small> */}
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
