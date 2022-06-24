module.exports = (req, res) => {
    res.render('room', {roomId: req.params.room})
}
