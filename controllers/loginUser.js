const User = require("../models/User");

module.exports = (req, res) => {
    const {username, password} = req.body;
    User.findOne({username: username}, (error, user) => {
        if (user) {
            if (password === user.password) {
                req.session.userId = user._id
                if(req.session.preUrl){
                    return res.redirect(req.session.preUrl);
                }
                return res.redirect('/');

            } else {
                res.redirect('/auth/login');
            }
        } else {
            res.redirect('/auth/login');
        }
    });
}