import React from 'react';
import './CurtainComponent.css';

const CurtainComponent = ({ children }) => {
  return (
    <div className="curtain-stage">
      <div className="curtain-top">
        <div className="curtain-scallops"></div>
      </div>
      <div className="stage-content">
        {children}
      </div>
    </div>
  );
};

export default CurtainComponent;