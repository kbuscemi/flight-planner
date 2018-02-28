const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    licenses: String,
    flights: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}],
    dob: Number,
    gender: String,

}, {
    timestamps: true
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        //remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function(next) {
    //this will be set to the current document
    var user = this;
    if (!user.isModified('password')) return next();
    //password has bee nchanged - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        //override the user provided password with the hash
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);