const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)

var db = mongoose.connection;

db.once('open', () => {
    console.log(`connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})