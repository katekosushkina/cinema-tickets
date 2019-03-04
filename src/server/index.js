/* eslint-disable no-alert, no-console */
const compression = require('compression');
const express = require('express');

const session = require('express-session');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const host = 'localhost';
const path = require('path');
const fs = require('fs');

const port = '3000';
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack.config.js');

const app = express();

const compiler = webpack(webpackConfig);

app.use(middleware(compiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    errors: true,
    reasons: false,
    warnings: true,

    assets: false,
    chunks: false,
    hash: false,
    timings: false,
    version: false,
  },
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('src/client/'));
app.use(compression());

app.use(cookieParser());

app.get('/getFilmsAndCinema', (req, res) => {
  res.sendFile(path.normalize(`${__dirname}/JsonData/filmsAndCinema.json`));
});

app.post('/login', (req, res) => {
  if (!fs.existsSync(`${__dirname}/JsonData/logins.json`)) {
    try {
      fs.writeFileSync(`${__dirname}/JsonData/logins.json`, '');
      return ('Такого пользователя не существует!')
    } catch (e) {
      console.log("Cannot write file ", e);
    }
  }
  else {
    const {
      email,
      password
    } = req.body;
    const personsRegistred = JSON.parse(fs.readFileSync(`${__dirname}/JsonData/logins.json`, 'utf8'));
    let flag = 0;
    personsRegistred.map(person => {
      if (person.email === email) {
        flag = 1;
        if (person.password === password) {
          res.send(JSON.stringify(person));
        }
        else {
          res.send({
            'message': 'Неправильный пароль'
          });
        }
      }
    });
    if (flag === 0) {
      res.send({'message': 'Такого пользователя не существует!'})
    }
  }
});

app.get('/**', (req, res) => {
  res.sendFile(path.normalize(`${__dirname}/../client/index.html`));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  }
  console.log(`The server is running at http://${host}:${port}/`); // eslint-disable-line no-console
});
