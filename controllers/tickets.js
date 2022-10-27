const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};

function newTicket(req, res) {
    res.render(`tickets/new`, {
        title: 'New Ticket',
        flightId: req.params.id,
    });
}

function create(req, res) {
    const ticket = req.body;
    ticket.flight = req.params.id;
    Ticket.create(ticket, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    })
}
