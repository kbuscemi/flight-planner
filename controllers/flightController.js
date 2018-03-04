const Flight = require('../models/flight');
const User = require('../models/user')

function allFlights(req, res) {
    Flight.find({})
        .then(flights => res.json(flights).status(200))
        .catch(err => console.log(err));

}

function createFlight(req, res) {
    let flightPlan = new Flight;
    // flightPlan.users.push(req.body.id)
    flightPlan.id = req.body.id
    flightPlan.date = req.body.date
    flightPlan.aircraft = req.body.aircraft
    flightPlan.tailNumber = req.body.tailNumber
    flightPlan.coPilot = req.body.coPilot
    flightPlan.departure = req.body.departure
    flightPlan.destination = req.body.destination
    flightPlan.altitude = parseInt(req.body.altitude)
    flightPlan.time = parseFloat(req.body.time)
    flightPlan.dayTakeoff = req.body.dayTakeoff
    flightPlan.dayLanding = req.body.dayLanding
    flightPlan.nightTakeoff = req.body.nightTakeoff
    flightPlan.nightLanding = req.body.nightLanding


    flightPlan.save((err) => {
        if (err) console.log(err)
        console.log(flightPlan)
        res.json('this worked').status(200);
    })

}

function showFlight(req, res) { 
    Flight.findOne({})
        .then(function(flight) {
            flights.user.push(req.body.id)
            console.log('yes')
            flight.save(function(err) {
                res.json(flight)
            })
        })
    }

module.exports = {
    allFlights,
    createFlight,
    showFlight
}

