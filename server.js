// packages
require('dotenv').config();
const express = require('express');

// utils
const mongoose = require('./utils/mongoose.js');

// middlewares
const serverConfig = require('./middleware/ConfigAPI.js');

// routes
const userRoutes = require('./API/users/routes.js')


const server = express();
serverConfig(server);
mongoose()


server.use('/', userRoutes)
server.get('/', (req, res) => {res.status(200).json({api: 'Server is up and running :)'})});


module.exports = server;

