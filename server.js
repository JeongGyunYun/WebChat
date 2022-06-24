const express = require("express");
const app = new express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const mongoose = require('mongoose');
const expressSession = require('express-session')

const io = require("socket.io")(server, {
  cors: {
    origin: '*'
  }
});

const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
    debug: true,
});

app.use("/peerjs", peerServer);

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({ extends: true}))
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.set("view engine", "ejs");

server.listen(process.env.PORT || 3030);

io.on('connection', (socket) => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit("user-connected", userId);
    })
})




const newUserController = require('./controllers/newUser');
const storeUserController = require("./controllers/storeUser");
const loginUserController = require("./controllers/loginUser")
const loginController = require("./controllers/login");
const homeController = require("./controllers/home");
const roomController = require("./controllers/room")
const enterRoomController = require("./controllers/createRoom");
const logoutController = require("./controllers/logout");
const authMiddle = require("./middleware/authMiddle")

app.get("/auth/register", newUserController)
app.get("/auth/login", loginController);
app.get("/chat/start", enterRoomController)
app.get("/:room", authMiddle, roomController)
app.post("/users/login", loginUserController);
app.post("/users/register", storeUserController)

app.get("/", homeController);
app.get('/auth/logout', logoutController);


mongoose.connect('mongodb+srv://abcdogs:kTRXBna7tyakkqLB@cluster0.4nunwry.mongodb.net/test', {
    useNewUrlParser: true
})