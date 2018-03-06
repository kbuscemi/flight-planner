import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './LandingPage.css'

const LandingPage = (props) => {
    return (
        <div>
            <Navbar href='/' brand='Flight Tracker' right>
                <NavItem href='/login' className='landingLinkOne'>Log In</NavItem>
                <NavItem href='/signup' className='landingLinkTwo'>Sign Up</NavItem>
            </Navbar>
            <div>
               <img src="https://i.imgur.com/n9Nklr3.jpg" alt='flying' title="flying" className='flyingPic' />
            </div>
        </div>
    )
}

export default LandingPage;