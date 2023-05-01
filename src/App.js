import "./App.css";
import Header from "./component/layout/Header/Header.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  exact path="/" Component={Home} />
          <Route path="/product/:id" Component={ProductDetails} />
          <Route path="/products" Component={Products} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
