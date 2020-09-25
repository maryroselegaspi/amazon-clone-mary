import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider'

function Product({image, title, price, id, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        // add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,   //if k==v no need for tittle:title just =>title
                image:image,
                price:price,
                rating:rating
            }
            
        })
    }
    return (
        <div className='product'>

            {/* <h1>this is the product section</h1> */}
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price' ><small>$</small><strong>{price}</strong></p>

                {/* Show the rating */}
                <div className='product__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (<p>&#9734;</p>))
                    }
                </div>
            </div>

            {/* Image */}
            <img src={image} alt='' />
            <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product
