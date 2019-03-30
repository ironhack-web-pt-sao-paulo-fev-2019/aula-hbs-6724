const express = require('express');
const hbs = require('hbs');

const app = express();
const path = require('path');

app.set('view engine', 'hbs');
// eslint-disable-next-line no-path-concat
app.set('views', `${__dirname}/views`);
app.use(express.static(path.join(__dirname, 'public')));

// eslint-disable-next-line no-path-concat
hbs.registerPartials(`${__dirname}/views/partials`);

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/players', (req, res, next) => {
  res.render('players');
});

app.get('/teams', (req, res, next) => {
  const data = {
    layout: false,
  };
  res.render('teams', data);
});

app.listen(3000);