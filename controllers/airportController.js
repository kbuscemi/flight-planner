const Airport = require('./../models/airport')

function index(req, res) {
    Airport.find({})
    .then(airports => res.json(airports).status(200))
    .catch(err => console.log(err));
}

module.exports = {
    index
}