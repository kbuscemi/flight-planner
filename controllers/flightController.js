const Flight = require('./../models/Flight');

function allFlights(req, res) {
    Flight.find({})
        .then(flights => res.json(flights).status(200))
        .catch(err => console.log(err));

}

function createFlight(req, res) {
    let flightPlan = new Flight;
        flightPlan.id = req.body.id
        flightPlan.flights.push(req.body.id)
        newPlan.save((err) => {
        if (err) console.log(err);
        console.log(flightPlan)
        res.json('this worked').status(200);
    })

}


module.exports = {
    allFlights,
    createFlight
}

