const User = require('../models/User.js');
const path = require('path');

module.exports = (req, res) => {
    console.log(req.body)
    User.create(req.body,  (error, user) => {
        if(error){
            console.log("Error")
            return res.redirect("/users/register");
        }
        res.redirect("/");
    })
}
