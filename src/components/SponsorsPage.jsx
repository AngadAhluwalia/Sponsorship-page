import React from 'react';
import './SponsorsPage.css';


const SponsorsPage = () => {
  return (
    <div className="sponsors-container">
      <div className="curtain-stage">
        <div className="curtain-top">
          <div className="curtain-scallops"></div>
        </div>
        
        <div className="stage-content">
          <h1 className="sponsors-title">Last Years Sponsors</h1>
          
          <div className="sponsors-grid">
            {/* Top row - 2 large cards */}
            <div className="sponsor-card large"></div>
            <div className="sponsor-card large"></div>
            
            {/* Second row - 4 regular cards */}
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            
            {/* Third row - 4 regular cards */}
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            
            {/* Bottom row - 4 regular cards */}
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
          </div>
          
          {/* Decorative Elements */}
          <img 
            src="./images/curtains.png" 
            alt="curtain" 
            className="curtain"
          />
          <img 
            src="./images/megaphonegirl.png" 
            alt="Girl with megaphone" 
            className="girl-megaphone"
          />
          
          <img 
            src="/images/geargirl.png" 
            alt="Girl with gears" 
            className="girl-gears"
          />
          <img 
            src="/images/bulbgirl.png" 
            alt="Girl with gears" 
            className="girl-bulb"
          />
          
          <img 
            src="/images/yellowballoon.png" 
            alt="Balloons" 
            className="balloons-left"
          />
          
          <img 
            src="/images/redballoon.png" 
            alt="Balloons" 
            className="balloons-right"
          />
          
          {/* Confetti elements */}
          {/* <div className="confetti confetti-1"></div>
          <div className="confetti confetti-2"></div>
          <div className="confetti confetti-3"></div>
          <div className="confetti confetti-4"></div> */}
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;