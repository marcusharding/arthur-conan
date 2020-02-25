import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerButton from './DrawerButton';

const Nav = props => (
    <header className='toolbar'>
        <nav className='toolbar_nav'>
            <div className='nav-drawer-button'>
                <DrawerButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbar_nav-items'>
                <ul>
                    <li><NavLink to='/'>Homepage</NavLink></li>
                    <li><NavLink to='/Map'>Map</NavLink></li>
                    <li><NavLink to='/Timeline'>Timeline</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Nav;