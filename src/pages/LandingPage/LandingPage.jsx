import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const LandingPage = (props) => {
    return (
        <div>
            <div>
                <h1>Flight Planner</h1>
            </div>
            <div>
                <Link to='/login' className='NavBar-link'>Log In</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/signup' className='NavBar-link'> SIGN UP</Link>
            </div>
        </div>
        
    
    )
    
    

}

export default LandingPage;