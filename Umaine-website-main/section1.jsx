import React from 'react';
import './umaine.css'; // Import your CSS file here

function Section1() {
  return (
    <div>
      {/* Section 1 */}
      <div className="section1">
        {/* Section 1 part 1 */}
        <div className="section1_1">
          <h1 style={{ display: 'inline-block', letterSpacing: '4px' }}>We are Universal</h1>
          <br />
          <h3 style={{ display: 'inline-block', letterSpacing: '4px', textShadow: '2px 2px 10px black' }}>The future is Now</h3>
          <br />
          <button><a style={{ color: 'white', textDecoration: 'none' }} href="#">Join Us</a></button>
        </div>

        {/* Section 1 part 2 */}
        <div className="section1_2">
          <div id="button1">
            <button style={{ padding: '13px 40px 13px 35px', backgroundColor: 'white' }}>
              <h2>Apply now</h2>
            </button>
          </div>

          <div id="button2">
            <button style={{ padding: '13px 40px 13px 35px', backgroundColor: 'white' }}>
              <h2>Unlimited <br />Resources</h2>
            </button>
          </div>

          <div id="button3">
            <button style={{ padding: '13px 40px 13px 35px', backgroundColor: 'white' }}>
              <h2>Visit platform</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
