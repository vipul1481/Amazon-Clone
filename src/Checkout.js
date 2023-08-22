import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct  from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
const [{ basket }] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkout_left">
      <img
        className="checkout_ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Bankoffer/1242x182/Apay.jpg                     "
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2> Your Shopping Baske is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* List out al of the Checkout Products */}
          {basket?.map((item) => (
            <CheckoutProduct
            id={item.id} 
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            
            ))}
        </div>
      )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          {/* <h1>Subtotal</h1> */}
           <Subtotal />

        </div>
      )}
    </div>
  );
}

export default Checkout;
