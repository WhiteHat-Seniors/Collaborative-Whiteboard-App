const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors  = require('cors');
const authRoute = require('./routes/auth');

const app = express();


//DB CONNECTIONS
mongoose.connect('mongodb://localhost:27017/canvas',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED");
})

//MIDDLEWARES.....
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());


//My Route
app.use('/api',authRoute)

const port = 8000;

app.listen(port,()=>{
    console.log(`app is running at ${port} `);
})