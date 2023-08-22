import React from "react";
import Product from "./Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product Id , title,price,rating,image */}
      <div className="home_row">
        <Product
          id="12344321"
          title="Apple MacBook Pro M2 Chip (13-inch, 16GB RAM, 256GB SSD Storage) - Space Gray (2022 Model) - Z16R0005S"
          price={1100}
          rating={5}
          image="https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="12344321"
          title="Origin: A Novel"
          price={8}
          rating={4}
          image="https://m.media-amazon.com/images/I/51LvRvp2AiL._SX319_BO1,204,203,200_.jpg"
        />
        <Product
          id="12344321"
          title="Apple Watch"
          price={1000}
          rating={5}
          image="https://m.media-amazon.com/images/I/71c7GQvm79L._AC_SX522_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12344321"
          title="Nike Women's Gymnastics Shoes"
          price={800}
          rating={5}
          image="https://m.media-amazon.com/images/I/51mNlxDSv1L._AC_UL600_FMwebp_QL65_.jpg"
        />
        <Product
          id="12344321"
          title="
          Apple AirPods Max Wireless Over-Ear Headphones. Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital Crown for Volume Control. Bluetooth Headphones for iPhone - Silver"
          price={250}
          rating={5}
          image="https://m.media-amazon.com/images/I/71xEVEjRHWL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12344321"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
