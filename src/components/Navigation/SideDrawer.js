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
        <nav className={`${drawerClasses} flex flex-col justify-between p-4`}>
            <div className="flex flex-col text-center items-center">
                <img alt='' className='logo pb-4' src={ACD_logo} />
                <p className="text-white text-lg w-2/3">The life of Arthur Conan Doyle</p>
            </div>
            <ul>
                <li>
                    <NavLink onClick={props.sidedrawerClickHandler} to='/Map' activeClassName='current'>
                        <div className="sideDrawer-icon__container"><ExploreIcon className='Nav_icons' />Map</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={props.sidedrawerClickHandler} to='/Timeline' activeClassName='current'>
                        <div className="sideDrawer-icon__container"><TimelineIcon className='Nav_icons' />Timeline</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={props.sidedrawerClickHandler} to='/About' activeClassName='current'>
                        <div className="sideDrawer-icon__container"><SupervisorAccountIcon className='Nav_icons' />About</div>
                    </NavLink>
                </li>
            </ul>
            <p className='copyRight'>© Conan Doyle Collection. All Rights Reserved</p>
        </nav>
    );
};

export default sideDrawer;