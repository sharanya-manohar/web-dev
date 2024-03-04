import React from 'react';
import './navbar.css';
const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
        <a href="#" className="navbar-heading">Rastro</a>
      <a href="#" className="navbar-item">Overview</a>
      <a href="#" className="navbar-item">Restaurant</a>
      <a href="#" className="navbar-item">Menus</a>
      <a href="#" className="navbar-item">Offers</a>
      <a href="#" className="navbar-item">Reservation</a>
      <a href="#" className="navbar-item">Setting</a>
      <a href="#" className="navbar-item">Logout</a>
    </div>
  );
};

export default VerticalNavbar;