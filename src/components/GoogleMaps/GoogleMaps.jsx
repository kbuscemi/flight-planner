import React from 'react'
import {Link} from 'react-router-dom'

const Maps = () => {
    return (
        <div>
        <div>
            <Link to="/homepage">Back</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="planner">Flight Planner</Link>
        </div>
            <h6>A Map (eventually)</h6>
        </div>
    )
}

export default Maps;