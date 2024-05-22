import './umaine.css'; // Import your CSS file hereimport React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer1">
        <center>
          <a href="#">
            <img src="fb-logo.jpg" alt="fb-logo" width="20px" height="20px" />
          </a>
          <a href="#">
            <img src="twitter-logo.jpg" alt="twitter" height="20px" width="20px" />
          </a>
          <a href="umaine.edu">
            <img src="universal.png" alt="maine" width="48px" height="65px" />
          </a>
          <a href="#">
            <img src="youtube-logo.jpg" alt="youtube" height="20px" width="20px" />
          </a>
          <a href="#">
            <img src="insta-logo.jpg" alt="insta" height="20px" width="20px" />
          </a>
        </center>
      </div>

      <div className="footer2">
        <center>
          <a href="#">Apply</a>
          <a href="#">Student Resources</a>
          <a href="#">Nondiscrimination notice</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Clery Safety and Security Report</a>
          <a href="#">COVID-19 health and safety guidance</a>
          <a href="#">Emergency</a>
          <br />
          <p>Universal Online University |</p>
          <p>Kenya, NA 04469 |</p>
          <p>+254710630882</p>
        </center>
      </div>
    </footer>
  );
}

export default Footer;
