import React from 'react';
import './umaine.css'; // Import your CSS file here

function Section3() {
  return (
    <div>
      {/* Section 6 */}
      <div className="section6_container">
        <center>
          <h1 style={{ color: 'rgb(25, 73, 112)', fontSize: '28px' }}>UOU Machias</h1>
          <p style={{ color: 'black', display: 'inline-block', margin: '20px 50px 0px 50px', fontSize: '19px' }}>The University
                of Universal's campus in Machias is the state’s coastal university, where the land and sea,
                communities and natural ecosystems provide the context for a unique learning and living experience.</p>
          <br />
          <button style={{ padding: '13px 50px 13px 35px', margin: '50px 0px 0px 0px', backgroundColor: 'rgb(25, 73, 112)' }}>
            <a style={{ fontSize: '20px', color: 'white', textDecoration: 'none' }} href="#">Learn More</a>
          </button>
          <br />
          <img src="bhalu.jpg" alt="bhalu" />
        </center>
      </div>
      <br />

      {/* Section 7 */}
      <div className="section7_container">
        <h1 style={{ color: 'white', fontSize: '45px', display: 'inline-block', margin: '30px 20px 0px 155px' }}>We are R1 top-tier research university</h1>
        <p style={{ color: 'white', display: 'inline-block', margin: '20px 150px 0px 155px', fontSize: '22px' }}>The UOU advances learning and discovery through 
            excellence and innovation in its academic and research
            programs while addressing the complex challenges and opportunities of the 21st century through
            research-based knowledge. Faculty, staff, and
            students conduct research in every county in Maine, across the nation, and on all continents and in oceans
            worldwide.</p>
        <button style={{ padding: '12px 50px 12px 35px', margin: '50px 0px 0px 155px', backgroundColor: 'white' }}>
          <a style={{ fontSize: '18px', color: 'rgb(25, 73, 112)', textDecoration: 'none' }} href="#">Learn more</a>
        </button>
        <br /><br /><br />
        <center>
          <img src="seaman.jpg" alt="under_sea" />
        </center>
      </div>
      <br /><br /><br />

      {/* Section 8 */}
      <div className="section8_container">
        <center>
          <h1 style={{ color: 'rgb(25, 73, 112)', fontSize: '65px', marginTop: '10px' }}>150+</h1>
          <p style={{ color: 'rgb(25, 73, 112)', fontSize: '25px', margin: '0px 0px 0px 0px' }}>courses
                and labs</p>
          <h1 style={{ color: 'rgb(25, 73, 112)', fontSize: '65px', margin: '20px 20px 0px 0px' }}>$179.3M</h1>
          <p style={{ color: 'rgb(25, 73, 112)', fontSize: '25px', margin: '10px 20px 0px 0px' }}>in R&D expenditures for FY21</p>
        </center>
      </div>

      {/* Section 9 */}
      <div className="section9_container">
        <div className="section9_container1">
          <div className="section9_container1_part1">
            <center><img style={{ height: '70px', width: '90px', marginTop: '90px' }} src="mark.png" alt="logo" /></center>
            <br />
            <p style={{ margin: '0px 20px 0px 60px', fontSize: '16px', fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}>
              We have a resilient community here, where people can lean on each other, and that helps us go
                    further than what we could accomplish alone.
            </p>
            <br />
            <i>
              <h5 style={{ marginLeft: '60px', fontSize: '14px', fontFamily: 'cursive' }}>Dominique DiSpirito, Class of
                        2022 Valedictorian</h5>
            </i>
            <button style={{ padding: '12px 50px 12px 35px', margin: '40px 0px 0px 110px', backgroundColor: 'rgb(25, 73, 112)' }}>
              <a style={{ fontSize: '18px', color: 'white', textDecoration: 'none' }} href="#">Meet dominique</a>
            </button>
          </div>
          <div className="section9_container1_part2">
            <img src="mam.jpg" style={{ height: '380px', width: '85%' }} alt="mam" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
