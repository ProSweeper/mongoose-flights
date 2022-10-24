const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
// add an event listener to see if our connection is good
db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
