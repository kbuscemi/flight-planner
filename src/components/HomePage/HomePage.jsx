import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardTitle} from 'react-materialize'
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import './HomePage.css'

const HomePage = (props) => {
    const flightCard = props.flights.map((flight) => (
        <div className='cardContainer'>
            <Card m={4} className='cardDeck' key={flight._id} header={<CardTitle waves='light'/>}
            title="Upcoming Flight"
            reveal={<p>You have chosen to fly {flight.aircraft} (Tail-Number: {flight.tailNumber}) on {flight.date}. Total flight time is {flight.time}
                    with a cruise altitude of {flight.altitude}. Departure airport is {flight.departure}. Destination airport
                    is {flight.destination}. Your co-pilot is {flight.coPilot}. Day Takeoff: {flight.dayTakeoff}, Day Landing: {flight.dayLanding}, 
                    Night Takeoff: {flight.nightTakeoff}, Night Landing: {flight.nightLanding}.
                    </p>}>
            </Card>
        </div>
    ));

    return (
        <div>
            <SideNavBar handleLogout={props.handleLogout} user={props.user}/>
            <div>
                    <header className='pageHeader'> Flight Plans Under Review</header>
                {flightCard}
            </div>
        </div>
    
    );
}

export default HomePage;