import './App.css';
import Price from './Price.js'
import Map from './Map';
import About from './About';
import Footer from './Footer';
import Order from './order/Order';
import Specialists from './Specialists/Specialists';
import React, { useState } from 'react';
import FirstBlock from './FirstBlock';
import HeaderBar from './HeaderBar';
import MobileMenu from './MobileMenu';
import Offer from './Offer';


function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <div className="App">
      <MobileMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <div className="first-block_leaves">
        <div className="main-container">
          <HeaderBar setActiveMenu={setActiveMenu} activeMenu={activeMenu}/>
          <FirstBlock/>
        </div>
      </div>
      <div className="main-container">
          <About></About>
      </div>
      <div className="offer-background">
        <div className="main-container">
          <Offer></Offer>
        </div>
      </div>
      <div className="main-container">
        <div className="specialists-container-box">
          <Specialists/>    
        </div>
      </div>
      <div className="offer-background">
        <div className="main-container">
          <Price></Price>
        </div>
      </div>
      <div className="offer-leaves">
        <div className="main-container order-padding">
          <Order></Order>
        </div>
      </div>
      <div className="main-container">
        <Map></Map>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
