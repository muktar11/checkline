import './umaine.css'; // Import your CSS file hereimport React from 'react';
import fblogo from './fblogo.jpg';
import twitterlogo from './twitterlogo.jpg';
import youtubelogo from './youtubelogo.jpg';
import instalogo from './instalogo.jpg';
import universal from './universal.png'
function Footer() {
  return (
    <footer>
      <div className="footer1">
        <center>
          <a href="#">
            <img src={fblogo} alt="fb-logo" width="20px" height="20px" />
          </a>
          <a href="#">
            <img src={twitterlogo} alt="twitter" height="20px" width="20px" />
          </a>
          <a href="umaine.edu">
            <img src={universal} alt="maine" width="48px" height="65px" />
          </a>
          <a href="#">
            <img src={youtubelogo} alt="youtube" height="20px" width="20px" />
          </a>
          <a href="#">
            <img src={instalogo} alt="insta" height="20px" width="20px" />
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
