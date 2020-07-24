const express = require('express');
const exphbs = require('express-handlebars');
const homeRoute = require('./routes/home');
const CRUD = require('./routes/CRUD');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));  
app.set('view engine', 'handlebars');

app.use('/', homeRoute);
app.use('/CRUD', CRUD);

app.listen(3000, () => console.log('Listening on port 3000'));