const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

const requireCredits = require("../middlewares/requireCredits");
const requireLogin = require("../middlewares/requireLogin");

const requireCredits = requireCredits
module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res)=>   {
        const {title, body, subject, recipients} = req.body;

        //Prepare a new survey
        const survey = new Survey({
            _user: req._user.id,
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            dateSent: Date.now()
        });
    });
}