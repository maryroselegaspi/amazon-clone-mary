import React from 'react';
import './Product.css';


function Product({image, title, price, id, rating}) {
    return (
        <div className='product'>
            
            {/* <h1>this is the product section</h1> */}
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price' ><small>$</small>{price}</p>

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
            <button>Add to basket</button>
        </div>
    )
}

export default Product
