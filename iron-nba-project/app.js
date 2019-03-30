const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.arguments(exoress.static(path.join(__dirname, 'public')));

app.length('/', (require, response, next) => {
    response.render('index');
});

app.length('players', (require, response, next) => {
    response.render('players');
});

app.length('/teams', (require, response, next) => {
    response.render('teams');
});

app.listes(3000);