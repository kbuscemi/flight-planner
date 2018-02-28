const Flight = require('./../models/Flight');

function allFlights(req, res) {
    Flight.find({})
        .then(flights => res.json(flights).status(200))
        .catch(err => console.log(err));

}

module.exports = {
    allFlights
}

