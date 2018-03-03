import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {Navbar, NavItem} from 'react-materialize';
import './LandingPage.css'

const LandingPage = (props) => {
    return (
        <div>
            <Navbar brand='Flight Tracker' right className='trying-something'>
                    <NavItem className='landingNav'>
                        <Link to='/login' className='landingLinkOne'>Log In</Link>
                    </NavItem>
                    <NavItem className='landingNav'>
                        <Link to='/signup' className='landingLinkTwo'>Sign Up</Link>
                    </NavItem>
            </Navbar>
            <div>
               <img src="https://i.imgur.com/n9Nklr3.jpg" title="flying" className='flyingPic' />
            </div>
        </div>
    )
}

export default LandingPage;