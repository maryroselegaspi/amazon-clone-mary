import React, { useState } from "react";
import "./Home.css";
// To make sliding images;
import AliceCarousel, { slideNext } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Product from "./Product";
import Addposter from "./Addposter";

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
  const banner = [
    {
      id: 1,
      url:
        "https://images-fe.ssl-images-amazon.com/images/G/35/x-site/events/2020/Halloween/GW_DT_TallHero_Halloween_1500x600_V3._CB404740168_.jpg",
    },
    {
      id: 2,
      url:
        "https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2020/img/Beauty_Mass_/XCM_Manual_ORIGIN_1268526_1378844_AU_au_beauty_gw_desktop_tallhero_1x_3400970_1500x600_en_AU._CB402974631_.jpg",
    },
    {
      id: 3,
      url:
        "https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/merch/2020/TV/THBY_S2_00000_GWBleedingHero_1500x600_POST_Final_en-AU_PVD5401._CB406115769_.jpg",
    },
    {
      id: 4,
      url:
        "https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/MThkY2E5OWYt/MThkY2E5OWYt-MzllNTQ0NTgt-w1500._CB403789420_.jpg",
    },
    {
      id: 5,
      url:
        "https://images-fe.ssl-images-amazon.com/images/G/35/Events/2020/APDHF/XCM_CUTTLE_1246088_1299806_US_PD20_3276069_1500x600_AU_en._CB403702681_.jpg",
    },
    {
      id: 6,
      url:
        "https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/NjFmY2EzNTMt/NjFmY2EzNTMt-ZjY2N2ZlMjIt-w1500._CB404739069_.jpg",
    },
  ];

  return (
    <div className="home">
      {/* <h1> I am the home page</h1> */}
      <AliceCarousel
        autoPlay
        autoPlayInterval={5000}
        touchTrackingEnabled
        buttonsDisabled={true}
        className="home__carousel"
        dotsDisabled={true}
      >
        {banner.map((banner) => (
          <img
            key={banner.id}
            src={banner.url}
            alt=""
            className="home__image"
            // onDragStart={handleOnDragStart}
          />
        ))}
      </AliceCarousel>

      {/* Products here id, title, price, rating, image*/}
      <div className="home__row">
        <Product
          id="123445"
          title="The Survivors Kindle Edition"
          price={14.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51KZiLh+NYL.jpg"
        />
        <Product
          id="123446"
          title="Nintendo Switch Console[Grey]"
          price={449}
          rating={5}
          image="https://m.media-amazon.com/images/I/51IfDSNqqXL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123447"
          title="Mario Kart Live: Home Circuit (luigi Set)- Nintendo Switch"
          price={149}
          rating={4}
          image="https://m.media-amazon.com/images/I/611Pm9iKaKL._AC_UY218_.jpg"
        />
        <Product
          id="123448"
          title="Xiaomi Mi Band 5 (Global Version) Fitness Tracker Newest 1.1-inch Colour AMOLED 2.5D Display Bluetooth 5.0 Smart Bracelet Heart Rate Monitor SpO2 sensor 5 ATM Waterproof Android & iOS 125mAh Battery up to 14 Days Activity Tracker (Black)"
          price={52.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71KsTiNXbdL._AC_SL1500_.jpg"
        />
        <Product
          id="123449"
          title="CanonEOS M50 Single Digital Camera Kit with EF-M 15-45mm IS STM, Camera Assist, Black (Australian warranty)"
          price={898.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81EOEwk-juL._AC_SL1500_.jpg"
        />
      </div>

      {/* 4 row Addposter */}
      <div className="home__row">
        <Addposter
          id="123451"
          title="Children's books"
          price={0}
          rating={5}
          image="https://images-fe.ssl-images-amazon.com/images/G/35/wishlist/marketing/Wishlist_Desktop_Cat_Card_1._SY304_CB407264123_.jpg"
        />
        <Addposter
          id="123451"
          title="Pre-order Oculus Quest 2"
          price={0}
          rating={5}
          image="https://images-fe.ssl-images-amazon.com/images/G/35/CategoryMarketing/2020/Events/fenty._SY304_CB404124436_.jpg"
        />
        <Addposter
          id="123451"
          title="Savage X Fenty"
          price={0}
          rating={5}
          image="https://images-fe.ssl-images-amazon.com/images/G/35/img15/Oculus2/email/379x304._SY304_CB404426335_.jpg"
        />
        <Addposter
          id="123451"
          title="Create and share gift ideas"
          price={0}
          rating={5}
          image="https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2020/img/Beauty_Mass_/XCM_CUTTLE_1268137_1376754_AU_3378552_186x116_1X_en_AU._SY116_CB404078388_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123450"
          title="
                    Family Classic Game Mini Console Built-in 600 classic video games HDMI- Out"
          price={99.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61liu2HqqcL._AC_SL1030_.jpg"
        />
      </div>

      {/* 4 product row */}
      <div className="home__row">
        <Product
          id="123451"
          title="FITTIN Racerback Sports Bras - Padded Seamless High Impact Support for Yoga Gym Workout Fitness with Removable PadsFITTIN Racerback Sports Bras"
          price={29.99}
          rating={4}
          image="https://images-fe.ssl-images-amazon.com/images/I/41dzxtirfZL._AC_AA160_.jpg"
        />
        <Product
          id="123452"
          title="
          Compression Running Socks for Men & Women - Best Low Cut No Show Athletic Socks for Stamina Circulation"
          price={14.95}
          rating={4}
          image="https://images-fe.ssl-images-amazon.com/images/I/41012vBwQXL._AC_AA160_.jpg"
        />
        <Product
          id="123453"
          title="3 Pack Tersely Yoga Sports Headband, Men's Sweatband, Women's Elastic Athletic Hairband, Lightweight Working Out Headbands"
          price={16.95}
          rating={4}
          image="https://images-fe.ssl-images-amazon.com/images/I/41dxkRUpeHL._AC_AA160_.jpg"
        />
        <Product
          id="123454"
          title="Closemate Ankle Athletic Trainer Socks for Men Women, Cotton Non Slip Low Cut Running Socks for Sports 5 Pairs"
          price={18.99}
          rating={4}
          image="https://images-fe.ssl-images-amazon.com/images/I/51vc487rztL._AC_AA160_.jpg"
        />
      </div>
      {/* 1 row Add */}
      <div className="home__row">
        <Addposter
          id="123451"
          title=""
          price={0}
          rating={5}
          image="https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2020/img/Launchpad/XCM_Manual_ORIGIN_1268161_1376865_AU_PD20_au_launchpad_gw_editorial_2x_3407912_1150x323_1X_en_AU._CB402931479_.jpg"
        />
      </div>

      {/* 6 product row -Books */}
      <div className="home__row">
        <Product
          id="123451"
          title="The Survivors Paperback"
          price={16.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/517YnQpfuhL._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="123452"
          title="Never Split the Difference: Negotiating as if Your Life Depended"
          price={13.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/510nxbS0noL._SX324_BO1,204,203,200_.jpg"
        />
        <Product
          id="123453"
          title="Where the Crawdads Sing"
          price={12.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51jXWPV1PoL._SX316_BO1,204,203,200_.jpg"
        />
        <Product
          id="123454"
          title="The Barefoot Investor 2019 Update"
          price={19.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/51gksI6yl0L._AC_SY200_.jpg"
        />
        <Product
          id="123453"
          title="Humans Hardcover"
          price={28.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51pXkpstgcL._SX404_BO1,204,203,200_.jpg"
        />
        <Product
          id="123454"
          title="Everyday Fresh: Meals in Minutes"
          price={24.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/515pitG4yqL._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
