import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Button} from 'react-materialize'
import './NavBar.css';
import SideNav from './../SideNav/SideNav'


const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <div className='welcome'>
                <span>Welcome, {props.user.firstName}</span>
            </div>
        </div>
        :
        <div>
            <Link to='/login' className='navLinkOne'>Log In</Link>
            <Link to='/signup' className='navLinkTwo'>Sign Up</Link>
        </div>
    
    return (
        <Navbar href='/homepage' brand='Flight Tracker' right fixed>
            {nav}
        </Navbar>
    );
};

export default NavBar;
