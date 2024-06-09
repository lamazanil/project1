import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
    <div className="container">
      <div className="text">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <div className="description">
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES.
        </div>
        <div className="btn">
          <button className="shop">Shop Now</button>
          <button>Category</button>
        </div>
        <div className="available">
          <span>Also Avaible On</span>
          <div>
            <label htmlFor="">flipcard</label>
            <label htmlFor="">amozan</label>
          </div>
        </div>
      </div>
      <div className="picture">
        <img src="/image/1.jpg" alt="" width="600" height="500px"/>
      </div>
    </div>
    </>);
}
