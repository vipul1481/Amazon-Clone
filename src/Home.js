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
      <Product id="12344321" 
      title="The dash of dash is dash"
       price={11.96}
       rating={5}/>
      {/* Product */}
    </div>
  );
}

export default Home;
