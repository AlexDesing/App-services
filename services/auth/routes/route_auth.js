// authRouter.js

const express = require('express');
const authController = require('../controllers/controller_auth');

const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

// Definir otras rutas según tus necesidades

module.exports = authRouter;
