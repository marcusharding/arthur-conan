import React from 'react';
 
const LandingPage = () => {
    return (
      <div className="header">
        <h1 className="header-text">Arthur Conan-Doyle</h1>
        <p className="header-text">A location based App</p>
        <div className="home-buttons__container">
          <div className="btn btn--primary" href="">Map</div>
          <div className="btn btn--secondary" href="">Timeline</div>
        </div>
      </div>
    );
}
 
export default LandingPage;