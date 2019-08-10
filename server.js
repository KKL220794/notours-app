const app = require('./app')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'})

// CONNECT TO MONGODB DATABASE
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
}).then(() => {
    console.log('connected to database');
    
});

// DEFINE SCHEMA FOR THE DATABASE
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating :{
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
});

// CREATING MODEL OUT OF SCHEMA
const Tour = mongoose.model('Tour', tourSchema );

const data = new Tour({
    name: 'the  trip',
    rating: 4.5,
    price: 525
});

data.save().then((doc) => console.log(doc)).catch(err => console.log(err));


// CONFIGURE AND LISTEN TO SERVER
const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
    
}) 