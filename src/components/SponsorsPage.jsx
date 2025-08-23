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
          <div style={{ height: '10vh' }}></div>
          <div></div>
          <h1 className="sponsors-title">Last Years Sponsors</h1>
          
          <div className="sponsors-grid">
            {/* Top row - 2 large cards */}
            <div>
            <div className="sponsor-card xlarge"></div>
            </div>
            <div>
            <div className="sponsor-card large"></div>
            </div>
            
            {/* Second row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            </div>
            
            {/* Third row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            </div>
            
            {/* Bottom row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            </div>
             {/* <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div> */}
          </div>
          
          {/* Decorative Elements */}
          <img 
            src="./images/curtains 2 (1).png" 
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
            src="/images/yellowballoons.png" 
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