import { NavLink } from 'react-router-dom';
import React from 'react';

function Navbar(){
    return (
        <nav>
          <ul>
            <li><NavLink to='/'>Tile Slide</NavLink></li>
            {/* <li ><NavLink to='/slide'>Login</NavLink></li> */}
            <li ><NavLink to='/2048'>2048</NavLink></li>
          </ul>
        </nav>
    )
}

export default Navbar;