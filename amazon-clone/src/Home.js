import React,{useState} from 'react';
import './Home.css';
// To make sliding images;
import AliceCarousel, { slideNext } from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Product from './Product';

function Home() {
    // const handleOnDragStart =(e) => e.preventDefault();
    // const [currentIndex, setCurrentIndex] =useState(0);

    // images = [
    //     'https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/1500x600._CB404653907_.jpg' ,
    //     'https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/pc_gw_ech_lr_annce_1x._CB404279216_.jpg',
    //     'https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/be_1x._CB404650062_.jpg',
    //     'https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/pc_gw_smp_sn_annce_1x._CB404279219_.jpg',
    //     'https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/NjFmY2EzNTMt/NjFmY2EzNTMt-MTI0ZjBjZDMt-w1500._CB404658820_.jpg'
    // ];

    
    return (
        <div className='home'>
            {/* <h1> I am the home page</h1> */}
            <AliceCarousel 
                autoPlay 
                autoPlayInterval="5000"
                touchTrackingEnabled
                buttonsDisabled = 'true'
                className='home__carousel'
                dotsDisabled='true'
            >
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/1500x600._CB404653907_.jpg' 
                    alt=''
                    className='home__image'
                    // onDragStart={handleOnDragStart}
                />
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/pc_gw_ech_lr_annce_1x._CB404279216_.jpg' 
                    alt=''
                    className='home__image'
                    // onDragStart={handleOnDragStart}
                />
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/be_1x._CB404650062_.jpg'
                    alt=''
                    className='home__image'
                    // onDragStart={handleOnDragStart}
                />
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/pc_gw_smp_sn_annce_1x._CB404279219_.jpg'
                    alt=''
                    className='home__image'
                    // onDragStart={handleOnDragStart}
                />
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/NjFmY2EzNTMt/NjFmY2EzNTMt-MTI0ZjBjZDMt-w1500._CB404658820_.jpg' 
                    alt=''
                    className='home__image'
                    // onDragStart={handleOnDragStart}
                />
                 <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/1500x600._CB404653907_.jpg'
                    alt=''
                    className='home__image'
                    // onDragStart={handleOnDragStart}
                />
            </AliceCarousel>
            
            {/* Products here id, title, price, rating, image*/}
            <div className='home__row'>
                <Product 
                    id='123445'
                    title='The Survivors Kindle Edition'
                    price={14.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/51KZiLh+NYL.jpg'
                />
                <Product 
                    id='123446'
                    title='Nintendo Switch Console[Grey]'
                    price={449}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/51IfDSNqqXL._AC_UY218_.jpg'
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='123447'
                    title='Mario Kart Live: Home Circuit (luigi Set)- Nintendo Switch'
                    price={149}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/611Pm9iKaKL._AC_UY218_.jpg'
                />
                <Product 
                    id='123445'
                    title='Xiaomi Mi Band 5 (Global Version) Fitness Tracker Newest 1.1-inch Colour AMOLED 2.5D Display Bluetooth 5.0 Smart Bracelet Heart Rate Monitor SpO2 sensor 5 ATM Waterproof Android & iOS 125mAh Battery up to 14 Days Activity Tracker (Black)'
                    price={52.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/71KsTiNXbdL._AC_SL1500_.jpg'
                />
                 <Product 
                    id='123445'
                    title='CanonEOS M50 Single Digital Camera Kit with EF-M 15-45mm IS STM, Camera Assist, Black (Australian warranty)'
                    price={898.00}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81EOEwk-juL._AC_SL1500_.jpg'
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='123448'
                    title='
                    Family Classic Game Mini Console Built-in 600 classic video games HDMI- Out'
                    price={99.00}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/61liu2HqqcL._AC_SL1030_.jpg'
                />
            </div>           
        </div>
    )
}

export default Home
