import React from 'react';
import './SponsorsPage.css';

import rbcImg from '../../sponsors/RBC.png';
import standoutImg from '../../sponsors/StandOut-Stickers-Logo.png';
import incogniImg from '../../sponsors/incogni.png';
import nordpassImg from '../../sponsors/nordpass.png';
import voiceflowImg from '../../sponsors/Voiceflow.svg';
import sailyImg from '../../sponsors/saily-logo-black (2).png';
import levelupImg from '../../sponsors/Levelup Logo (Square, Transparent).png';
import codecraftersImg from '../../sponsors/CodeCrafters.io.png';
import cseImg from '../../sponsors/CSE.jpg';
import doraImg from '../../sponsors/dora logo- black.png';
import environicsImg from '../../sponsors/EnvironicsAnalytics.png';
import interviewCakeImg from '../../sponsors/Interview cake.png';
import kpmImg from '../../sponsors/KPM.png';
import msftReactorImg from '../../sponsors/MSFT_Reactor.png';
import nordvpnImg from '../../sponsors/NordVPN_Logo_RGB_Primary_Blue_Black-01.svg';
import notionImg from '../../sponsors/Notion.png';
// import ubisoftImg from '../../sponsors/Ubisoft.eps'; // Commented out because .eps is not supported as a JS import
import waspImg from '../../sponsors/wasp.png';
import xyzImg from '../../sponsors/xyz-logo-color.svg';
import zebraImg from '../../sponsors/ZEBRA.png';

const SponsorsPage = () => {
  return (
    <div className="sponsors-container">
      <div className="curtain-stage">
        <div className="curtain-top">
          <div className="curtain-scallops"></div>
        </div>
        
        <div className="stage-content">
          <div style={{ height: '20vh' }}></div>
          <div></div>
          <h1 className="sponsors-title">Last Years Sponsors</h1>
          
          <div className="sponsors-grid">
            {/* Top row - 2 large cards */}
            <div>
            <div className="sponsor-card xlarge"></div>
            </div>
            <div>
            <div className="sponsor-card qlarge"><img src={rbcImg} alt='Rbc img'/></div>
            </div>
            
            {/* Second row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              
            <div className="sponsor-card large"></div>
            <div className="sponsor-card large"></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card large"></div>
            <div className="sponsor-card large"></div>
            </div>
            
            {/* Third row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"><img src={standoutImg} alt='standout stickers'/></div>
            <div className="sponsor-card"><img src={incogniImg} alt='incogni png'/></div>
            <div className="sponsor-card"><img src={nordpassImg} alt='nordpass'/></div>
            <div className="sponsor-card"><img src={voiceflowImg} alt='voiceflow' /></div>
            </div>
            
            {/* Bottom row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"><img src={sailyImg} alt='saily' /></div>
            <div className="sponsor-card"><img src={levelupImg} alt='levelup' /> </div>
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
            src="./images/megaphonegirl.svg" 
            alt="Girl with megaphone" 
            className="girl-megaphone"
          />
          
          <img 
            src="/images/geargirl.svg" 
            alt="Girl with gears" 
            className="girl-gears"
          />
          <img 
            src="/images/bulbgirl.svg" 
            alt="Girl with gears" 
            className="girl-bulb"
          />
          
          <img 
            src="/images/yellowballoon.svg" 
            alt="Balloons" 
            className="balloons-left"
          />
          
          <img 
            src="/images/redballoon.svg" 
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