
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Payment.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
// Import stripe
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import axios from './axios';
import {db} from './firebase';

// for currency
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    // State for disable button and error
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    // Succeeded payment or Processing
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('')

    // client secret
    const  [clientSecret, setClientSecret]= useState(true);

    // For stripe payment React Hooks
    const stripe = useStripe();
    const elements = useElements();

    const history = useHistory();

    //For Client Secret
    useEffect(() => {
        // generate special stripe secret which allows us to change customer
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits 10 = 10000
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
            
        }
        getClientSecret();

    },[basket])
    console.log("client secret:", clientSecret)
    console.log(('user', user))
    // Submit CardElement form
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setProcessing(true);

        // // client secret
        // const history =useHistory;

        // Payload card
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
            
        }).then(({paymentIntent}) => {
            
            // Push to database firestore
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
           .set({
               basket:basket,
               amount: paymentIntent.amount,
               created: paymentIntent.created
           }) 

            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }
    const handleChange = e =>{
            setDisabled(e.empty);
            setError(e.error? e.error.message:'');
    }

    // Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };
    return (

            <div className='payment'>
                {/* <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1> */}

 
                {/* <div className='payment__sectionAddress>'>
                    <div className='payment__title'>
                        <h3 >Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                         <p>{user?.email}</p>
                         <p>123 Gordon Street</p>
                         <p>Brisbane, QLD</p>
                    </div>
                </div> */}

 
                {/* <div className='payment__section>'>
                    <div className='payment__title'>
                        <h3  >Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
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
                </div> */}

                <div className='payment__section>'>
                    <div className='payment__title'>
                        <h3 >Payment Method</h3>
                    </div>
                    <p>Credit/Debit Card</p>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement  
                            onChange={handleChange}
                            id="card-element"
          options={CARD_ELEMENT_OPTIONS}
          />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h4>Order Total: {value} </h4>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded} >
                                    <span>{processing ? <p>Processing</p>:'Buy Now'}</span>
                                </button>

                                {/* Error */}
                                {error && <div>{error}</div>}
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
   
    )
}

export default Payment
