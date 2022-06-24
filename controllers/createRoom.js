const {v4: uuidv4} = require("uuid");

module.exports = (req, res) => {
    const uid = uuidv4();
    res.redirect(`/${uid}`);
}
