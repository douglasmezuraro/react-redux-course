const bodyParser = require('body-parser');
const express = require('express');
const cors = require('./cors');

const port = 3003;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors);

server.listen(port, () => console.log(`Backend is running on ${port}.`));

module.exports = server;
