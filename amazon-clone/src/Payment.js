
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
// Import stripe
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    // State for disable button and error
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    // For stripe payment React Hooks
    const stripe = useStripe();
    const elements = useElements();

    // Submit CardElement form
    const handleSubmit = e =>{

    }
    const handleChange = e =>{

    }
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout (
                    <Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

                {/* Payment section - delivery address*/}
                <div className='payment__section>'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                         <p>{user?.email}</p>
                         <p>123 Gordon Street</p>
                         <p>Brisbane, QLD</p>
                    </div>
                </div>

                {/* Payment section - Review Items*/}
                <div className='payment__section>'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
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
                </div>

                {/* Payment section - payment method*/}
                <div className='payment__section>'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement  onChange={handleChange}/>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
