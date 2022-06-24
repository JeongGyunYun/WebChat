module.exports = (req, res) => {
    console.log(req.session)
    if(req.session.userId) {
        res.render("LoggedHome");
    }
    else {
        res.render("home");
    }
}