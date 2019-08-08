const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const tourRouting = require('./router/toursRouter')

const app = express();
app.use(morgan('dev'));
app.use(express.json()); // to use middleware

app.use('/api/v1/notours', tourRouting);

module.exports = app;