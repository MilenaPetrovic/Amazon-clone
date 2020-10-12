import React from "react";
import "../Style/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123123"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="456456"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4"
            price={359.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="789789"
            title="Fitbit Inspire Fitness Tracker, One Size (S and L Bands Included) "
            price={68.95}
            image="https://images-na.ssl-images-amazon.com/images/I/71TV3ac7tXL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="012012"
            title="Stand Mixer, Cusimax 800W Dough Mixer Tilt-Head Electric Mixer"
            price={115.49}
            image="https://images-na.ssl-images-amazon.com/images/I/617ZRPO4VZL._AC_SL1100_.jpg"
            rating={3}
          />
          <Product
            id="012012"
            title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound"
            price={26.95}
            image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="012012"
            title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI"
            price={1399.65}
            image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
