require('dotenv').config();

const express = require('express');

const serverConfig = require('./middleware/ConfigAPI.js')

const server = express();
serverConfig(server);

server.get('/', (req, res) => {res.status(200).json({api: 'Server is up and running :)'})});

module.exports = server;

