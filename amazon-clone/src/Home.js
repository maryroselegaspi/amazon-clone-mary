import React from 'react';
import './Home.css';
// import image1 from './image1.jpg'
// To make sliding imagec
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Home() {
    return (
        <div className='home'>
            {/* <h1> I am the home page</h1> */}
            <AliceCarousel 
                autoPlay 
                autoPlayInterval="3000"
                mouseDragEnabled='true'
            >
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/1500x600._CB404653907_.jpg' 
                    alt=''
                    className='home__image'
                />
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/pc_gw_ech_lr_annce_1x._CB404279216_.jpg' 
                    alt=''
                    className='home__image'
                />
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/be_1x._CB404650062_.jpg'
                    alt=''
                    className='home__image'
                />
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/pc_gw_smp_sn_annce_1x._CB404279219_.jpg'
                    alt=''
                    className='home__image'
                />
                <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/NjFmY2EzNTMt/NjFmY2EzNTMt-MTI0ZjBjZDMt-w1500._CB404658820_.jpg' 
                    alt=''
                    className='home__image'
                />
                 <img 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/1500x600._CB404653907_.jpg'
                    className='home__image'
                />
            </AliceCarousel>
            {/* <img 
                className='home__image'
                src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/scrt/gw/dajc8lx2fmqpb/1500x600._CB404653907_.jpg'
                alt=''
            /> */}
            
        </div>
    )
}

export default Home
