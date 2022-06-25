const User = require('../models/User');
module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if (error || !user) {
            req.session.preUrl = req.originalUrl
            req.session.save(() => {
                res.write("<script charset='UTF-8'>alert('Login First To Use Service')</script>")
                res.write("<script>window.location='/auth/login'</script>");
            })
            return
        }
        next()
    })
}