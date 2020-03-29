import React from 'react';
import { NavLink } from 'react-router-dom';
import SideDrawerButton from './SideDrawerButton'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <div>
                <SideDrawerButton click={props.sidedrawerClickHandler} />
            </div>
            <ul>
            <NavLink onClick={props.sidedrawerClickHandler} to='/Map'><li>Map</li></NavLink>
                <NavLink onClick={props.sidedrawerClickHandler} to='/Timeline'><li>Timeline</li></NavLink>
            </ul>
        </nav>
    );
};

export default sideDrawer;