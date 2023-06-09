import React from 'react';
import "./Header.css"
import logo from "../../images/Logo.svg"

const Header = () => {
     return (
          <nav className='header-container'>
              <img src={logo} alt="" />
          <div className='nav-item'>
               <a href="/order">Order</a>
               <a href="/orderreview">Order Review</a>
               <a href="/manageinventory">Manage Inventory</a>
               <a href="/login">Login</a>
          </div>
          </nav>
     );
};

export default Header;