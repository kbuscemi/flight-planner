import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import SideNav from './../SideNav/SideNav'
import {Card, CardTitle} from 'react-materialize'

const HomePage = (props) => {
    const flightCard = props.flights.map((flight) => (
        <Card key={flight._id} header={<CardTitle waves='light'/>}
        title="My Flight"
        reveal={<p>You have chosen to fly {flight.aircraft} (Tail-Number: {flight.tailNumber}) on {flight.date}. Total flight time is {flight.time}
                with a cruise altitude of {flight.altitude}. Departure airport is {flight.departure}. Destination airport
                is {flight.destination}. Your co-pilot is {flight.coPilot}. Day Takeoff: {flight.dayTakeoff}, Day Landing: {flight.dayLanding}, 
                Night Takeoff: {flight.nightTakeoff}, Night Landing: {flight.nightLanding}.
                </p>}>
        </Card>
    ));

    return (
        <div>
            {flightCard}
        </div>
    );
}

export default HomePage;