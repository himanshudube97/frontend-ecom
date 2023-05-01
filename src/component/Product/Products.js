import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loaders/Loader";
import ProductCard from "../Home/ProductCard";
import "./Products.css";

function Products(props) {
  const dispatch = useDispatch();

  const { loading, error, product, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(product, "hhh");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <h2 className="productsHeading">Products</h2>
        <div className="products">
          {product?.map((val) => {
            return <ProductCard key={product._id} product={val} />;
          })}
          </div>
        </>
      )}
    </>
  );
}

export default Products;
