const mongoose = require('mongoose');

// shortcut variable for the schema
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNO: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        // we want the default date to be a year from the day they book
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
});
//export our model
// make sure this is on the bottom i guess or the app breaks
module.exports = mongoose.model('Flight', flightSchema);