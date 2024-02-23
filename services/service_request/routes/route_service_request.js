// authRouter.js

const express = require('express');
const authController = require('../controllers/controller_auth');

const serviceRequest = express.Router();

serviceRequest.post('/register', authController.register);
serviceRequest.post('/login', authController.login);

// Definir otras rutas según tus necesidades

module.exports = serviceRequestRouter;
