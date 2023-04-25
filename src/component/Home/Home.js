import React, { Fragment, useEffect } from "react";
import "./Home.css";
// import { CgMouse } from "react-icons/all";
import Product from "./ProudctCard";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

// const product = {
//   name: "blue shirt",
//   price: "2000",
//   _id: "himanshu",
// };

const Home = () => {
  const dispatch = useDispatch();
  const { loading, product, productsCount } = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>{/* Scroll <CgMouse /> */}</button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {product.map((item) => {
          return <Product product={item} />;
        })}
      </div>
    </Fragment>
  );
};
export default Home;
