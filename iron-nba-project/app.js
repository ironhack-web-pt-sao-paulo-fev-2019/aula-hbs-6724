const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (require, response, next) => {
    response.render('index');
});

app.get('/players', (require, response, next) => {
    response.render('players');
});

app.get('/teams', (require, response, next) => {
    let data = {
        layout: false
    }
    response.render('teams');
});

app.listen(3000);