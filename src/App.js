
import './App.css';
import Header from "./component/layout/Header/Header.js";

import {BrowserRouter as Router, Route} from "react-router-dom";
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Footer from './component/layout/Footer/Footer';
import Home from "./component/Home/Home.js";



function App() {
  useEffect(()=>{
    WebFont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  },[])
  
  return (
    <Router>
      <Header/>
      <Route exact path='/' Component={Home} />
      <Footer/>
    </Router>
   
  );
}

export default App;
