const User = require('../models/User');
module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if (error || !user) {
            req.session.preUrl = req.originalUrl
            return res.redirect('/auth/login');
        }
        next()
    })
}