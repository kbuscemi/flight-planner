import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import SideNav from './../SideNav/SideNav'

const HomePage = (props) => {
    return (
        <div>
            <div>
                <NavBar
                user={props.user}
                />
                <SideNav />
            </div>

            <h3>Flights Submitted for Review</h3>
        </div>
    )
    
    

}

export default HomePage;