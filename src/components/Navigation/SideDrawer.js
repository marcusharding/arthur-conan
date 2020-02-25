import React from 'react';
import { NavLink } from 'react-router-dom';
import SideDrawerButton from './SideDrawerButton'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (<nav className={drawerClasses}>
        <div>
            <SideDrawerButton click={props.sidedrawerClickHandler} />
        </div>
        <ul>
            <li><NavLink to='/'>Homepage</NavLink></li>
            <li><NavLink to='/Map'>Map</NavLink></li>
            <li><NavLink to='/Timeline'>Timeline</NavLink></li>
        </ul>
    </nav>);

};

export default sideDrawer;