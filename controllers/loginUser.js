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
                res.write("<script charset='UTF-8'>alert('Fail to Login')</script>")
                res.write("<script>window.location='/auth/login'</script>");
            }
        } else {
            res.write("<script charset='UTF-8'>alert('Fail to Login')</script>")
            res.write("<script>window.location='/auth/login'</script>");
        }
    });
}