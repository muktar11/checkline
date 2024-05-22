import React from 'react';
import './umaine.css'; // Import your CSS file here

function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">

        <div className="nav1">
          <img src="universal.png" width="50" height="50" alt="Universal Logo" />
        </div>

        <div className="nav2">
          <ul>
            <li>
              <a href="#">Admissions</a>
              <div className="dropdown-content">
                <p>Admissions</p>
                <ul>
                  <li><a href="#">Apply</a></li>
                  <li><a href="#">Undergraduate</a></li>
                  <li><a href="#">Transfer</a></li>
                  <li><a href="#">Graduate</a></li>
                  <li><a href="#">International</a></li>
                  <li><a href="#">Accepted Students</a></li>
                  <li><a href="#">Lifelong Learning</a></li>
                  <li><a href="#">Veterans</a></li>
                  <li><a href="#">Machias Admissions</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Online Classes</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className="nav3">
          <center><a href="#">Quicklinks</a></center>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
