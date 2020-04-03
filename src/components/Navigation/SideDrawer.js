import React from 'react';
import { NavLink } from 'react-router-dom';
import TimelineIcon from '@material-ui/icons/Timeline';
import ExploreIcon from '@material-ui/icons/Explore';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ACD_logo from '../../assets/images/logo512.png';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <div>
                <img alt='' className='logo' src={ACD_logo} />
            </div>
            <ul>
                <NavLink onClick={props.sidedrawerClickHandler} to='/Map' activeClassName='current' ><li><ExploreIcon className='Nav_icons' />Map</li></NavLink>
                <NavLink onClick={props.sidedrawerClickHandler} to='/Timeline' activeClassName='current' ><li><TimelineIcon className='Nav_icons' />Timeline</li></NavLink>
                <NavLink onClick={props.sidedrawerClickHandler} to='/About' activeClassName='current' ><li><SupervisorAccountIcon className='Nav_icons' />About</li></NavLink>
            </ul>
        </nav>
    );
};

export default sideDrawer;