// Title: Uptime Monitoring Application
// Decription: A RESTFul Api to monitor up or down time of user defined links
// Author: Imtiajul Islam
// Date: 02/10/2023

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// config
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleRequest);

    server.listen(app.config.port, () => {
        console.log(`Server started on port ${app.config.port}`);
    });
};

// handle Request Response
app.handleRequest = handleReqRes;

// start the server
app.createServer();
