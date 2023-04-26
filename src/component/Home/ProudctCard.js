import { useState, useEffect } from "react";
import "./Home.css"

import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgbaa(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

const Product = ({ product }) => {   //yahan basically humne props ko destructure kiya hai.
  return <>
    <Link className="productCard" to={`/product/${product._id}`} >
        <h1>{product.name}</h1>
        <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/h/a/s/3xl-fo-shrt-499-skyblu-5th-anfold-original-imafkhhrgtwyheda-bb.jpeg?q=70" />
        <p>{product.name}</p>
        <div>
            <ReactStars {...options} /> <span>(256 reviews)</span>
        </div>
        <span>{product.price}</span>
    </Link>
  
  </>;
};

export default Product;
