import React from 'react';
import './umaine.css'; // Import your CSS file here
import Section1 from './section1';

function Section2() {
  return (
    <div>
      {/* Latest News */}
      <center>
        <h1 style={{ color: 'rgb(1, 1, 65)', fontSize: '45px', marginTop: '110px' }}>
          Latest news
        </h1>
      </center>

      <div className="section2_container">
        <div className="section2_container1">
          <img src="AI-lab-news.jpg" style={{ width: '250%', height: '530px' }} />
          <h3>NSF awards $6 million for UOU-led effort to establish new lab to study AI in advanced manufacturing</h3>
          <a style={{ color: 'rgb(25, 73, 112)', display: 'inline-block', textDecoration: 'none', marginTop: '19px' }} href="#">Learn more</a>
        </div>

        <div className="section2_container2">
          <img src="river.jpg" style={{ width: '100%', height: '530px' }} />
          <h3>Mount Desert Island tourism can use participatory planning to address climate change impacts, UMaine research show</h3>
          <a style={{ color: 'rgb(25, 73, 112)', display: 'inline-block', textDecoration: 'none', marginTop: '19px' }} href="#">Learn more</a>
          <br />
          <button style={{ padding: '13px 50px 13px 35px', margin: '50px 0px 0px 80px', backgroundColor: 'rgb(29, 76, 115)' }}>
            <a style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }} href="#">More news</a>
          </button>
        </div>

        <div className="section2_container3">
          <img src="coin.jpg" style={{ width: '100%', height: '530px' }} />
          <h3>Minimum wage increases positively impacts women’s health, negatively impact men’s health</h3>
          <a style={{ color: 'rgb(25, 73, 112)', display: 'inline-block', textDecoration: 'none', marginTop: '19px' }} href="#">Learn more</a>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section3_container">
        <div className="section3_container1">
          <h1 style={{ color: 'rgb(25, 73, 112)', margin: '60px 0px 0px 170px', fontSize: '28px' }}>NECHE evaluation visit</h1>
          <p style={{ color: 'black', margin: '10px 0px 0px 215px', fontSize: '20px' }}>Notice of public comment</p>
          <button style={{ padding: '13px 50px 13px 35px', margin: '20px 0px 0px 215px', backgroundColor: 'rgb(29, 76, 115)' }}>
            <a style={{ backgroundColor: 'rgb(29, 76, 115)', fontSize: '20px', color: 'white', textDecoration: 'none' }} href="#">Learn more</a>
          </button>
          <br />
          <h2 style={{ color: 'rgb(25, 73, 112)', margin: '60px 0px 0px 190px', fontSize: '28px' }}>NECHE self-study</h2>
          <button style={{ padding: '13px 50px 13px 35px', margin: '20px 0px 0px 215px', backgroundColor: 'rgb(29, 76, 115)' }}>
            <a style={{ fontSize: '20px', color: 'white', textDecoration: 'none' }} href="#">Learn more</a>
          </button>
        </div>
        <div className="section3_container2">
          <img src="NECHE-cover.jpg" alt="ek_ldka_do_ldki" />
        </div>
      </div>

      {/* Section 4 */}
      <div className="section4_container">
        <h1 style={{ color: 'white', margin: '80px 0px 0px 155px', fontSize: '45px', display: 'inline-block' }}>We are UOU</h1>
        <p style={{ color: 'white', margin: '10px 20px 0px 155px', fontSize: '20px', lineHeight: '30px' }}>
          In UOU We help students create success stories with world-class faculty members, internationally recognized research, first-rate facilities, and a friendly, safe atmosphere some of the best year-round recreation sites in the nation.
        </p>
        <button style={{ padding: '13px 50px 13px 35px', margin: '30px 0px 0px 150px', backgroundColor: 'white' }}>
          <a style={{ fontSize: '20px', color: 'rgb(25, 73, 112)', textDecoration: 'none' }} href="#">Learn more</a>
        </button>
        <br />
        <center><img src="two_girls.jpg" /></center>
      </div>

      {/* Section 5 */}
      <div className="section5_container">
        <center>
          <h1 style={{ color: 'white', margin: '150px 0px 0px 155px', fontSize: '45px', display: 'inline-block' }}>Get involved</h1>
          <p style={{ color: 'white', margin: '10px 20px 0px 155px', fontSize: '20px', lineHeight: '30px' }}>
            Find events online that inspire you, from arts, exhibits and lectures to athletics.
          </p>
          <button style={{ padding: '13px 50px 13px 35px', margin: '30px 0px 0px 150px', backgroundColor: 'white' }}>
            <a style={{ fontSize: '20px', color: 'rgb(25, 73, 112)', textDecoration: 'none' }} href="#">Find events</a>
          </button>
        </center>
      </div>
    </div>
  );
}

export default Section2;