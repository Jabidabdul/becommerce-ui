import React from 'react'
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './Style.css'

export const NavBar = ()=> {
    const navLinkStyles =({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'None' : 'nomral'
        }
    }
    return (
      <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/About'>About</Link> */}

        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='/About'>About</NavLink>
      </nav>

    )
}

export default NavBar