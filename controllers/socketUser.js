module.exports = (socket) => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit("user-connected", userId);

        socket.on('disconnect', () => {
            console.log("User_diconnected " + userId);
            socket.to(roomId).broadcast.emit('user-disconnected', userId);
        })
    })
}

