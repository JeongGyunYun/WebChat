const User = require('../models/User.js');
const path = require('path');

module.exports = (req, res) => {
    console.log(req.body)
    User.create(req.body,  (error, user) => {
        if(error){
            console.log("Error")
            res.write("<script charset='UTF-8'>alert('Fail to Register')</script>")
            res.write("<script>window.location='/auth/register'</script>");
            return
        }
        res.redirect("/");
    })
}
