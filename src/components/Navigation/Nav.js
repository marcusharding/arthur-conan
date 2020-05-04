import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerButton from './DrawerButton';
import ACD_logo from '../../assets/images/logo512.png';

const Nav = props => (
    <header className={`${props.sideDrawerOpen === false ? 'block' : 'hidden'} toolbar`} >
        <nav className='toolbar_nav'>
            <div className="hidden lg:flex items-center">
                <img alt='' className='logo' src={ACD_logo} />
                <p className="text-white text-xl pl-4 w-2/3 md:w-1/2 lg:w-full">The life of Arthur Conan Doyle</p>
            </div>
            <div className='nav-drawer-button'>
                <DrawerButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbar_nav-items'>
                <ul>
                    <li className="text-xl"><NavLink to='/Map'>Map</NavLink></li>
                    <li className="text-xl"><NavLink to='/Timeline'>Timeline</NavLink></li>
                    <li className="text-xl"><NavLink to='/About'>About</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Nav;