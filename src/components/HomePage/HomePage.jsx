import React from 'react';
import {Card, CardTitle} from 'react-materialize'
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import './HomePage.css'

const HomePage = (props) => {
    const flightCard = props.flights.map((flight) => (
        <div className='cardContainer'>
            <Card m={4} className='cardDeck' key={flight._id} header={<CardTitle image='' waves='light'/>}
            title="Upcoming Flight"
            reveal={<p>You have selected to fly aircraft {flight.aircraft} on {flight.date}. Your co-pilot will be {flight.coPilot}. <br/> Total flight time is {flight.time} hrs
                     with a cruise altitude of {flight.altitude}. <br/> Tail-Number: {flight.tailNumber} <br/>Departure airport:&nbsp;{flight.departure} <br/> Destination airport: 
                    &nbsp;{flight.destination} <br/> Day Takeoff:&nbsp;{flight.dayTakeoff === false ? 'No' : 'Yes'} <br/> Day Landing:&nbsp;{flight.dayLanding === false ? 'No' : 'Yes'} 
                    <br/> Night Takeoff:&nbsp;{flight.nightTakeoff === false ? 'No' : 'Yes'} <br/> Night Landing:&nbsp;{flight.nightLanding === false ? 'No' : 'Yes'}
                    </p>}>
            </Card>
        </div>
    ));

    return (
        <div>
            <SideNavBar handleLogout={props.handleLogout} user={props.user}/>
                <div className='header'>
                    <header className='pageHeader'>Flights Under Review</header>
                </div>
            <div className='flightCardDiv'>
                {flightCard}
            </div>
        </div>
    
    );
}

export default HomePage;