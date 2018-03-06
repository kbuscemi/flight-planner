const Flight = require('../models/flight');
const User = require('../models/user')

function allFlights(req, res) {
    Flight.find({})
        .then(flights => res.json(flights).status(200))
        .catch(err => console.log(err));

}

function createFlight(req, res) {
    
    let flightPlan = new Flight(req.body);

    flightPlan.save((err) => {
      User.findById(req.user._id)
      .then(user => {
          user.flights.push(flightPlan._id);
          user.save().then(() => {
              user.populate('flights', function() {
                  res.json(user.flights);
              });
          });
      });
    });
}

module.exports = {
    allFlights,
    createFlight,
}

