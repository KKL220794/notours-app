const express = require('express');
const toursController = require('../controller/toursController');


const tourRouter = express.Router();

tourRouter
    .route('/')
    .get(toursController.getAllTours)
    .post(toursController.createTour);

tourRouter
    .route('/:id')
    .get(toursController.getTour)
    .patch(toursController.updateTour)
    .delete(toursController.deleteTour);


module.exports = tourRouter;