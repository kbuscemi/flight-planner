import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const HomePage = (props) => {
    return (
        <div>
            <div>
                <NavBar 
                    user={props.user}
                    handleLogout={props.handleLogout}
                />
            </div>
        </div>
    )
    
    

}

export default HomePage;