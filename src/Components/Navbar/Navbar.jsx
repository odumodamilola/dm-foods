import Reat, {useState} from 'react';
import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
function Navbar() {
  
    const [menu,setMenu] = useState("menu");

  return (
  
    <div className="navbar">
        <img src={assets.logo} alt="logo" className="logo" />
         {/* <a href='/' className='logo'>Dm-foods</a> */}
        <ul className="nav-menu">
          <li onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>
            <a href="#">Home</a>
          </li>
          <li onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>
            <a href="#">Menu</a>
          </li>
          <li onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>
            <a href="#">mobile-app</a>
          </li>
          <li onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}>
            <a href="#">Contact</a>
          </li>
        </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="search-icon"
        />
        <div className="navbar-search-icon">
          <img
            src={assets.basket_icon}
            alt="basket_icon"
          />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>

 
  );
}

export default Navbar;
