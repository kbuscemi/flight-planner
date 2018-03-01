import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <div>
            <div>
                <Link to="/homepage">Back</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="planner">Flight Planner</Link>
            </div>
            <h3>History Page</h3>
        </div>
    )
}

export default History;