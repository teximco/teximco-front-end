import React from "react";
import { useState } from 'react'

const Navbar = () => {
  const [sticky , setSticky] = useState(false)

  global.onscroll = ()=>{
    scrollY > 20 ? setSticky(true) : setSticky(false);
  }
  
  return (
    <div className="navbar"  style={{ background : sticky ? "black" : "white"  , paddingTop : sticky ? '40px' : '70px'}}>
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <img  src="https://i.ibb.co/SxWy7DG/menu.png" alt="" />
        </label>
        <div className="content">
          <div className="logo">
            <a href="#">
              <img
                src="/Teximco.png"
                alt=""

              />
              <span>
              <h1 className="text-white text-4xl inline" style={{ color : sticky ? "white" : "black" }}>TEXIMCO (BD) LTD</h1>
              <p  className="text-white text-xs" style={{ color : sticky ? "white" : "black" }}>Apparel Manufacturer, Expoert, Buying & Sourcing Company</p>
              </span>
            </a>
         
          </div>
          <ul className="links" style={{ background : sticky ? "black" : "white" }} >
            <li>
              <a href="#" style={{color  : sticky ? "white" : "black"}}>Home</a>
            </li>
            <li>
              <a href="#"  style={{color  : sticky ? "white" : "black"}}>About</a>
            </li>
            <li>
              <a href="#" className="desktop-link"  style={{color  : sticky ? "white" : "black"}}>
                Products
              </a>
              <input type="checkbox" id="show-features" />
              <label htmlFor="show-features"  style={{color  : sticky ? "white" : "black"}}>Features</label>
              <ul>
                <li>
                  <a href="#">Knitwear</a>
                </li>
                <li>
                  <a href="#">Jeanswear</a>
                </li>
                <li>
                  <a href="#">Outerwear</a>
                </li>
                <li>
                  <a href="#">Sweater</a>
                </li>
              </ul>
            </li>
           
            <li>
              <a href="#"  style={{color  : sticky ? "white" : "black"}}>Contact</a>
            </li>
          </ul>
        </div>
  
      </nav>
    </div>
  );
};

export default Navbar;
