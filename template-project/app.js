// import core & TP modules
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');

// import custom route module
const userRoutes = require('./routes/routes');

// set env variable
dotenv.config({ path: './config/config.env' });

// PORT var
const PORT = process.env.PORT || 3000;

// app and config the engine to pug
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

// apply body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// delivering static files, in the css
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes.routes);

// now listen in on the port
app.listen(PORT);
