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
          title="The dash of dash is dash"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
        <Product
          id="12344321"
          title="The dash of dash is dash"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
        <Product
          id="12344321"
          title="The dash of dash is dash"
          price={1000}
          rating={5}
          image="https://m.media-amazon.com/images/I/71c7GQvm79L._AC_SX522_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12344321"
          title="The dash of dash is dash"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
        <Product
          id="12344321"
          title="The dash of dash is dash"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12344321"
          title="The dash of dash is dash"
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
