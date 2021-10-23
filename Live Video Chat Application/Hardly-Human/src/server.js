const path = require("path");
const http = require("http");
const SocketIO = require("socket.io");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname + "/views"));
app.use("/public", express.static(path.join(__dirname + "/public")));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
	socket.on("join_room", (roomName) => {
		socket.join(roomName);
		socket.to(roomName).emit("welcome");
	});
	socket.on("offer", (offer, roomName) => {
		socket.to(roomName).emit("offer", offer);
	});
	socket.on("answer", (answer, roomName) => {
		socket.to(roomName).emit("answer", answer);
	});
	socket.on("ice", (ice, roomName) => {
		socket.to(roomName).emit("ice", ice);
	});
});

httpServer.listen(PORT, () => console.log(`Listening on Port : ${PORT}`));
