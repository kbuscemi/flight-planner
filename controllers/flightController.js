const Flight = require('./../models/Flight');

function allFlights(req, res) {
    Flight.find({})
        .then(flights => res.json(flights).status(200))
        .catch(err => console.log(err));

}

// function createFlight(req, res) {
//     let flightPlan = new Flight;
//         flightPlan.id = req.body.id
//         flightPlan.flights.push(req.body.id)
//         flightPlan.save((err) => {
//         if (err) console.log(err);
//         console.log(flightPlan)
//         res.json('this worked').status(200);
//     })

function createFlight(req, res) {
    let flightPlan = new Flight;

    // flightPlan.date = req.body.date
    flightPlan.coPilot = req.body.coPilot
    flightPlan.departure = req.body.departure
    flightPlan.distance = parseInt(req.body.distance)
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


module.exports = {
    allFlights,
    createFlight
}

