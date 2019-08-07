const express = require('express');
const http = require('http');
const fs = require('fs')
const morgan = require('morgan');


const app = express();
app.use(express.json());

var file = fs.readFileSync('./dev-data/data/tours-simple.json', () =>{
    console.log('file read');
    
});
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({message: 'success', data:{tours:  JSON.parse(file)}});
});

app.post('/api/v1/tours', (req, res) => {
    console.log(req.body);
    res.status(200).json();

})

app.listen( 3000, () => {
    console.log('listening onn port 3000');
})