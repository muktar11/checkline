import './umaine.css'; // Import your CSS file hereimport React from 'react';
import ship from './ship.jpg';
import mountain from './mountain.jpg';
import hand from './hand.jpg';

function Section4() {
  return (
    <div>
      {/* Section10 */}
      <div className="section10_container">
        <center>
          <h1 style={{ color: 'rgb(25, 73, 112)', fontSize: '40px', marginTop: '125px' }}>Explore what UOU has to offer</h1>
        </center>
        <div className="section10_container1">
          <div className="section10_container1_part1">
            <button style={{ padding: '17px 132px 17px 120px', margin: '13px 0px 0px 70px' }}>
              <a href="#">Colleges</a>
            </button>
            <button style={{ padding: '17px 98px 17px 101px', margin: '13px 0px 0px 20px' }}>
              <a href="#">Graduate School</a>
            </button>
            <button style={{ padding: '17px 120px 17px 125px', margin: '13px 0px 0px 20px' }}>
              <a href="#">Athletics</a>
            </button>
          </div>
          <div className="section10_container1_part2">
            <button style={{ padding: '17px 135px 17px 130px', margin: '13px 0px 0px 70px' }}>
              <a href="#">Majors</a>
            </button>
            <button style={{ padding: '17px 110px 17px 120px', margin: '13px 0px 0px 20px' }}>
              <a href="#">Scholarships</a>
            </button>
            <button style={{ padding: '17px 61px 17px 85px', margin: '13px 0px 0px 20px' }}>
              <a href="#">Student Involvement</a>
            </button>
          </div>
        </div>
      </div>

      {/* Section11 */}
      <div className="section11_container">
        <center>
          <h1 style={{ color: 'rgb(25, 73, 112)', fontSize: '25px', fontFamily: 'cursive' }}>Global impact</h1>
          <p style={{ color: 'black', fontSize: '18px', marginTop: '13px' }}>Fulfilling the land grant teaching, research and public service mission, border to border</p>
          <button style={{ padding: '12px 50px 12px 35px', margin: '40px 0px 0px 0px', backgroundColor: 'rgb(25, 73, 112)' }}>
            <a style={{ fontSize: '17px', color: 'white', textDecoration: 'none' }} href="#">Learn more</a>
          </button>
        </center>
        <center>
          <img src={ship} alt="ship" />
        </center>
      </div>

      {/* Section12 */}
      <div className="section12_container">
        <div className="section12_container_part1">
          <center>
            <h1 style={{ color: 'rgb(25, 73, 112)', marginTop: '60px', fontSize: '38px' }}>UMS TRANSFORMS</h1>
            <p style={{ color: 'black', fontSize: '17px', margin: '13px 20px 0px 20px' }}>The Harold Alfond Foundation is bringing people together to bring transformative change to the Universal Online University System and shape Africa’s new century</p>
            <button style={{ padding: '12px 50px 12px 35px', margin: '15px 0px 0px 10px', backgroundColor: 'rgb(25, 73, 112)' }}>
              <a style={{ fontSize: '17px', color: 'white', textDecoration: 'none' }} href="#">Learn More</a>
            </button>
          </center>
        </div>
      </div>

      {/* Section13 */}
      <div className="section13_container">
        <center>
          <div className="section13_container_part1">
            <div className="section13_container_part1_child1">
              <h1 style={{ color: 'rgb(25, 73, 112)', display: 'inline-block', margin: '60px 0px 30px 0px', fontSize: '40px' }}>UOU highlights</h1> <br />
              <img src={mountain}  alt="mountain" />
            </div>
            <div className="section13_container_part1_child2">
              <h2 style={{ color: 'rgb(25, 73, 112)', fontSize: '25px', padding: '80px 0px 0px 0px' }}>Climate Change Institute</h2>
              <p style={{ color: 'black', fontSize: '16px', margin: '15px 20px 0px 20px' }}>Celebrating 50 years of excellence, learning and discovery through research</p>
              <button style={{ padding: '12px 50px 12px 35px', margin: '15px 0px 0px 10px', backgroundColor: 'rgb(25, 73, 112)' }}>
                <a style={{ fontSize: '17px', color: 'white', textDecoration: 'none' }} href="#">Learn more</a>
              </button>
            </div>
            <div className="section13_container_part1_child3">
              <img src={hand} alt="hand" />
            </div>
            <div className="section13_container_part1_child4">
              <h2 style={{ color: 'rgb(25, 73, 112)', fontSize: '25px', padding: '80px 0px 0px 0px' }}>Council on Diversity, Equity, and Inclusion</h2>
              <p style={{ color: 'black', fontSize: '16px', margin: '13px 20px 0px 20px' }}>Advising leadership on institutional efforts and actions to ensure inclusive excellence</p>
              <button style={{ padding: '12px 50px 12px 35px', margin: '15px 0px 0px 10px', backgroundColor: 'rgb(25, 73, 112)' }}>
                <a style={{ fontSize: '17px', color: 'white', textDecoration: 'none' }} href="#">Learn more</a>
              </button>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Section4;
