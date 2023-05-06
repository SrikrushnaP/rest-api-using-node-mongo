const express = require("express");
const http = require("http");

const app = express();
const port = 3200;

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

app.get('/', function (req, res) {
    res.send("Hello from server");
});

app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.listen(port, function () {
    console.log("Server is running on localhost:", port);
})