const User = require("../models/User");

module.exports = (req, res) => {
    req.session.destroy( () => {
        res.redirect('/');
    })
}