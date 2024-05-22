import React from 'react';
import './umaine.css'; // Import your CSS file here

function Header() {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="header_container1">
          {/* Add content for header_container1 if needed */}
        </div>

        <div className="header_container2">
          <ul>
            <li><a href="#">Apply to UOU</a></li>
            <li><a href="#">A-Z</a></li>
            <li><a href="#">Calendar</a></li>
            <li><a href="#">Give</a></li>
            <li><a href="#">Map</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Careers</a></li> {/* Corrected typo */}
            <li><a href="#">myUMaine</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
