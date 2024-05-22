import React from 'react';
import './umaine.css'; // Import your CSS file here
import universal from './universal.png';

function Navbar() {
  

  return (
  
      <div className="navbar">
        <div className="nav1">
          <img src={universal} alt="Universal Logo" />
        </div>
        
        <div className="nav2">
          <ul>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Online Classes</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        
        <div className="nav3">
          <center><a href="/sign-in">Register</a></center>
        </div>

        {/* Menu Button */}
    
      </div>
    
  );
}

export default Navbar;