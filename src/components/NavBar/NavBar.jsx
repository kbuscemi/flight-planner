import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <div>
                <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
            </div>
            <div>
                <span className='NavBar-welcome'>Welcome, {props.user.firstName}</span>
            </div>
            <div>
                <Link to='/history' className='NavBar-link'>Flight History</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/planner' className='NavBar-link'>Flight Planner</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/map' className='NavBar-link'>Google Maps</Link>
            </div>
        </div>
        :
        <div>
            <Link to='/login' className='navLinkOne'>Log In</Link>
            <Link to='/signup' className='navLinkTwo'>Sign Up</Link>
        </div>
    
    return (
        <Navbar brand='Flight Tracker' right fixed className='trying-something'>
            {nav}
        </Navbar>
    );
};

export default NavBar;
