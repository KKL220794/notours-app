const app = require('./app')
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})

// console.log(process.env); 
// console.log(app.get('env'));



const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
    
}) 