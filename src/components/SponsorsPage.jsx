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
import ubisoftImg from '../../sponsors/Ubisoft.svg'; // Commented out because .eps is not supported as a JS import
import waspImg from '../../sponsors/wasp.png';
import xyzImg from '../../sponsors/xyz-logo-color.svg';
import zebraImg from '../../sponsors/ZEBRA.png';
import bestImg from '../../sponsors/BEST.png';
import bramptonInnovationImg from '../../sponsors/Brampton_Innovation.png';
import fgfImg from '../../sponsors/fgf.png';
import icpImg from '../../sponsors/quantum.png';
import pandgImg from '../../sponsors/P&G.png';
import ranfoodsImg from '../../sponsors/ranfoods.png';
import tdImg from '../../sponsors/TD.png';
import yorkRegionImg from '../../sponsors/YorkRegion.png';
import experienceVenturesImg from '../../sponsors/ExperienceVentures.png';
import githubLogoImg from '../../sponsors/github-logo.png';
import icpPngImg from '../../sponsors/icp.png';
import siraPrintImg from '../../sponsors/SiraPrint.png';
import vueschoolImg from '../../sponsors/vueschool.png';
import yspaceImg from '../../sponsors/Yspace.png';

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
              <div className="sponsor-card xlarge"><a href="#"><img src={tdImg} alt='Rbc img'/></a></div>
            </div>
            <div>
            <div className="sponsor-card qlarge"><a href="#"><img src={rbcImg} alt='Rbc img'/></a></div>
            </div>
            
            {/* Second row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              
            <div className="sponsor-card large"><a href="#"><img src={environicsImg} alt='levelup' /></a></div>
            <div className="sponsor-card large"><a href="#"><img src={cseImg} alt='levelup' /></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card large"><a href="#"><img src={kpmImg} alt='kpm'/></a></div>
            <div className="sponsor-card large"><a href="#"><img src={ubisoftImg} alt='ubisoft img'/></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card large"><a href="#"><img src={yorkRegionImg} alt='standout stickers'/></a></div>
            <div className="sponsor-card large"><a href="#"><img src={pandgImg} alt='standout stickers'/></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card large"><a href="#"><img src={yspaceImg} alt='standout stickers'/></a></div>
            <div className="sponsor-card large"><a href="#"><img src={experienceVenturesImg} alt='standout stickers'/></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card large"><a href="#"><img src={icpImg} alt='standout stickers'/></a></div>
            <div className="sponsor-card large"><a href="#"><img src={icpPngImg} alt='standout stickers'/></a></div>
            </div>
            
            
            {/* Third row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"><a href="#"><img src={standoutImg} alt='standout stickers'/></a></div>
            <div className="sponsor-card"><a href="#"><img src={incogniImg} alt='incogni png'/></a></div>
            <div className="sponsor-card"><a href="#"><img src={nordpassImg} alt='nordpass'/></a></div>
            <div className="sponsor-card"><a href="#"><img src={voiceflowImg} alt='voiceflow' /></a></div>
            </div>
            
            {/* Bottom row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"><a href="#"><img src={sailyImg} alt='saily' /></a></div>
            <div className="sponsor-card"><a href="#"><img src={levelupImg} alt='levelup' /> </a></div>
            <div className="sponsor-card"><a href="#"><img src={xyzImg} alt='levelup' /></a></div>
            <div className="sponsor-card"><a href="#"><img src={waspImg} alt='levelup' /></a></div>
            </div>
             {/* <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div>
            <div className="sponsor-card"></div> */}
             <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"><a href="#"><img src={nordvpnImg} alt='saily' /></a></div>
            <div className="sponsor-card"><a href="#"><img src={notionImg} alt='levelup' /> </a></div>
            <div className="sponsor-card"><a href="#"><img src={zebraImg} alt='levelup' /></a></div>
            <div className="sponsor-card"><a href="#"><img src={codecraftersImg} alt='levelup' /></a></div>
            </div>
             <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"><a href="#"><img src={msftReactorImg} alt='saily' /></a></div>
            <div className="sponsor-card"><a href="#"><img src={doraImg} alt='levelup' /> </a></div>
            <div className="sponsor-card"><a href="#"><img src={interviewCakeImg} alt='interview cake' /></a></div>
            <div className="sponsor-card"><a href="#"><img src={incogniImg} alt='levelup' /></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"><a href="#"><img src={bramptonInnovationImg} alt='Rbc img'/></a></div>
            <div className="sponsor-card"> <a href="#"><img src={ranfoodsImg} alt='Rbc img'/></a></div>
            <div className="sponsor-card"><a href="#"><img src={fgfImg} alt='Rbc img'/></a></div>
            <div className="sponsor-card"><a href="#"><img src={bestImg} alt='Rbc img'/></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="sponsor-card"><a href="https://github.com/"><img src={githubLogoImg} alt='Rbc img'/></a></div>
            <div className="sponsor-card"> <a href="#"><img src={vueschoolImg} alt='Rbc img'/></a></div>
            {/* <div className="sponsor-card"><img src={fgfImg} alt='Rbc img'/></div>
            <div className="sponsor-card"><img src={bestImg} alt='Rbc img'/></div> */}
            </div>
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