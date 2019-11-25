import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Map">Map</NavLink>
          <NavLink to="/Timeline">Timeline</NavLink>
       </div>
    );
}
 
export default Navigation;