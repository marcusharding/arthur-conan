import React from 'react';
import { NavLink } from 'react-router-dom';
 
const LandingPage = () => {
    return (
      <div className="header">
        <h1 className="header-text--primary">Arthur Conan-Doyle</h1>
        <p className="header-text--secondary">The best way to navigate the life of Arthur Conan-Doyle, lets get started</p>
        <div className="home-buttons__container">
          <NavLink className="btn btn--primary" to="/Map">Map</NavLink>
          <NavLink className="btn btn--secondary" to="/Timeline">Timeline</NavLink>
        </div>
      </div>
    );
}
 
export default LandingPage;