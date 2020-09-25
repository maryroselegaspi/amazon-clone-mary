import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
// import CurrencyFormat from 'react-currency-fotmat';

function Checkout() {
    const [{basket}]= useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img 
                className='checkout__ad'
                src='https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2020/img/Books/XCM_Manual_ORIGIN_1256958_1320870_AU_au_au_books_q3_promo_au_en_3307751_1500x300_en_AU.jpg'
                alt='' 
            />
            {basket?.length === 0? (
                <div>
                    <h2>Your Amazon Basket is empty</h2>
                <p>
                    The price and availability of items at Amazon.com.au are subject to change. 
                    The Shopping Cart is a temporary place to store a list of your items and 
                    reflects each item's most recent price.
                    Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
                </p>
                </div>

            ):(
                <div>
                    <h2 className='checkout__title'>Shopping Cart</h2>

                    {/* List out all of the Checkout Products */}
                    {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    {/* <h1>Subtotal</h1> */}
                    <Subtotal />
                </div>
            )}
             
        </div>
    )
}


export default Checkout
