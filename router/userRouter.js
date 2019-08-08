const express = require('express');
const userController = require('../controller/userController');


const userRouter = express.Router();

userRouter
    .route('/')
    .get(userController.getUser)
    .post(userController.createUser);

module.exports = userRouter;