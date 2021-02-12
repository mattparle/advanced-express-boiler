const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8000;

//log request
app.use(morgan('tiny'));
//pass req's to body-parser
app.use(bodyparser.urlencoded({extended: true}));
//set view template engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));


//load static files
app.use('/css', express.static(path.resolve(__dirname, "static/css")))
app.use('/img', express.static(path.resolve(__dirname, "static/img")))
app.use('/js', express.static(path.resolve(__dirname, "static/js")))

//load routers
app.use('/', require('./server/routes/router'));









app.listen(PORT, () => {
    console.log("Server is running on port:3000");
});
