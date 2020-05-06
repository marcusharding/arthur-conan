import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerButton from './DrawerButton';
import ACD_logo from '../../assets/images/logo512.png';

const Nav = props => (
    <header className={`${props.sideDrawerOpen === false ? 'block' : 'hidden'} toolbar`} >
        <nav className='toolbar_nav'>
            <div className='nav-drawer-button'>
                <DrawerButton click={props.drawerClickHandler} />
            </div>
            <div className="flex justify-end lg:items-center">
                <NavLink to='/Map'>
                    <img alt='' className='w-6 lg:w-12 ml-auto' src={ACD_logo} />
                </NavLink>
                <p className="hidden lg:block text-white lg:text-xl pl-4 w-2/3 md:w-1/2 lg:w-full">The life of Arthur Conan Doyle</p>
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