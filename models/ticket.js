const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    // we want seats to be A1-F99 so we need a regular expression
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
        required: true,
    },
    price: {
        type: Number,
        // a minimum price of $0
        min: 0,
        required: true,
    },
    flight: {
        // connect it to the flights data base
        type: Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
    }
});

// compile and export the ticket
module.exports = mongoose.model('Ticket', ticketSchema);