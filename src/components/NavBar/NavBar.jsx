import React from 'react';
import {Link} from 'react-router-dom';
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
                <Link to='/history' className='NavBar-link'>History</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/planner' className='NavBar-link'>Flight Planner</Link>
            </div>
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>Log In</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'> SIGN UP</Link>
        </div>
    
    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;