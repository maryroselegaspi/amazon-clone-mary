import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className='header'>
            {/* Logo on the left => img */}
            <Link to='/login'>
            <img  
                className='header__logo' 
                src='http://pngimg.com/uploads/amazon/amazon_PNG25.png' 
                alt='' 
            />
            </Link>

            {/* Searchbox */}
            <div className='header__search'>
                <input 
                    className='header__searchInput'
                    type='text'
                />
                <SearchIcon 
                    className='header__searchIcon'
                />
            </div>
            
            {/* 3 links (Signin, Orders, Amazonprime) basket with numbers */}
            <div className='header__nav'>
                {/* 1st link */}
                <Link to='/login' className='header__link'>
                    <div className='header__option'>
                    <span className='header__optionLine1'>Hello Qausi</span>
                    <span className='header__optionLine2'>SignIn</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span  className='header__optionLine1'>Returns</span>
                        <span className='header__optionLine2'>& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLine1'>Your</span>
                        <span className='header__optionLine2'>Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to='/checkout' className='header__link'>
                    <div className='header__optionBasket'>
                        {/*Basket icon  */}
                        <ShoppingBasketIcon />
                        {/* Number of items */}
                        <span className='header__optionLine2 header__basketCount'>0</span>
                    </div>
                </Link>


            
                
            </div>
        </nav>
    )
}


export default Header 
