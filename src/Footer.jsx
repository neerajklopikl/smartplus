// src/Footer.js

import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import SmartplusLogo from './smartplus_logo_blue.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <img
          src={SmartplusLogo} // Use the imported logo here
          alt="Smartplus Logo"
          className="navbar-logo"
        />
        <p className="footer-tagline">Smart Buy, better lives</p>
      </div>

      <div className="footer-main">
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press kit</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Article</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>DISCOVER</h4>
          <ul>
            <li><a href="#">Buy used product</a></li>
            <li><a href="#">Sell used product</a></li>
            <li><a href="#">New Products</a></li>
            <li><a href="#">Limited Warranty</a></li>
            <li><a href="#">Check & pay our products</a></li>
            <li><a href="#">Check product details</a></li>
            <li><a href="#">Explore all Range Product</a></li>
            <li><a href="#">Digital Paymnent</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>HELP & SUPPORT</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Become a partner</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Terms & conditions</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>SOCIAL LINKS</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
          <div className="app-stores">
            <a href="#"><img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-appstore-icon-png-image-purepng-transparent-4.png" alt="App Store" /></a>
            <a href="#"><img src="https://e7.pngegg.com/pngimages/530/733/png-clipart-goggle-playstore-icon-google-play-computer-icons-android-play-button-angle-rectangle-thumbnail.png" alt="Google Play" /></a>
          </div>
          <h4>WE ARE GLOBAL</h4>
          <div className="global-links">
            <span>🇦🇺 Australia</span>
            <span>🇦🇪 UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;