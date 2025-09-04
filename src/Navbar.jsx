import React, { useState } from 'react';
import './Navbar.css';
import { useCart } from './CartContext'; // Import useCart hook

import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping, FaDownload } from "react-icons/fa6";
import { TbBuildingStore } from "react-icons/tb";
import SmartplusLogo from './smartplus_logo_blue.png';
import { IoIosMore, IoIosNotifications, IoIosTrendingUp } from "react-icons/io";
import { BiSupport } from "react-icons/bi";


const Navbar = () => {
  const [isMenuPinned, setMenuPinned] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { cartItems, totalItems, totalPrice } = useCart(); // Get cart state

  const handleClick = () => {
    setMenuPinned(prev => !prev);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const isDropdownVisible = isHovering || isMenuPinned;

  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <img
          src={SmartplusLogo}
          alt="Smartplus Logo"
          className="navbar-logo"
        />
        <a href="#" className="navbar-explore">
          Explore <span className="plus-text">Plus</span>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
            alt="Plus"
            className="plus-icon"
          />
        </a>
      </div>

      <div className="navbar-search">
        <IoSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="search-input"
        />
      </div>

      <div className="navbar-right">
        <a href="#" className="nav-link login-link">
          <CgProfile className="nav-icon" />
          Login
        </a>
        
        {/* Updated Cart Link with Item Count and Hover Summary */}
        <div className="nav-link cart-link-container">
          <FaCartShopping className="nav-icon" />
          Cart
          {totalItems > 0 && <span className="cart-item-count">{totalItems}</span>}
          
          {/* Cart Hover Summary */}
          <div className="cart-hover-summary">
            {cartItems.length > 0 ? (
              <>
                <div className="cart-summary-header">Your Cart ({totalItems} items)</div>
                <div className="cart-summary-items">
                  {cartItems.map(item => (
                    <div className="cart-summary-item" key={item.id}>
                      <img src={item.image} alt={item.name.substring(0,10)} className="cart-summary-image"/>
                      <div className="cart-summary-details">
                        <p>{item.name.substring(0, 20)}...</p>
                        <p>Qty: {item.quantity}</p>
                      </div>
                      <p className="cart-summary-price">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <div className="cart-summary-footer">
                  <span>Subtotal:</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
              </>
            ) : (
              <p className="empty-cart-message">Your cart is empty.</p>
            )}
          </div>
        </div>

        <a href="#" className="nav-link">
          <TbBuildingStore className="nav-icon" />
          Become a Seller
        </a>
        
        <div 
          className="more-menu-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <IoIosMore 
            className="nav-icon more-icon"
            onClick={handleClick}
          />

          {isDropdownVisible && (
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                <IoIosNotifications className="dropdown-icon" />
                Notification Preferences
              </a>
              <a href="#" className="dropdown-item">
                <BiSupport className="dropdown-icon" />
                24x7 Customer Care
              </a>
              <a href="#" className="dropdown-item">
                <IoIosTrendingUp className="dropdown-icon" />
                Advertise
              </a>
              <a href="#" className="dropdown-item">
                <FaDownload className="dropdown-icon" />
                Download App
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;