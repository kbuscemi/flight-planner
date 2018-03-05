const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


/* ~~~ Helper Functions ~~~ */
function createJWT(user) {
    return jwt.sign(
        {user}, // data payload
        SECRET,
        {expiresIn: '24h'}
    );
}

function signup(req, res) {
    var user = new User(req.body);
    user.save()
        .then(user => {
            res.json({token: createJWT(user)});
        })
        // user data invalid  (probably a duplicate email)
        .catch(err => re.status(400).json(err));
}

function login(req, res) {
    User.findOne({email: req.body.email}).exec().then(user => {
        if (!user) return res.status(401).json({err: 'bad credentials'});
        user.comparePassword(req.body.pw, (err, isMatch) => {
            if (isMatch) {
                var token = createJWT(user);
                res.json({token});
            } else {
                return res.status(401).json({err: 'bad credentials'});
            }
        });
    }).catch(err => res.status(401).json(err));
}

function getFlights(req, res) {
    User.findById(req.user._id)
    .populate('flights').exec()
    .then(function(user) {
        res.json(user.flights);
    });
}


module.exports = {
    signup,
    login,
    getFlights
};
