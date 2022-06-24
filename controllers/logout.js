const User = require("../models/User");

module.exports = (req, res) => {

    User.findByIdAndUpdate(req.session.userId, {
        roomId: null
    }, (error, result) => {
        console.log(error, result)
    })

    req.session.destroy( () => {
        res.redirect('/');
    })
}