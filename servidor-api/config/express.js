/* Código simplório, apenas para fornecer o serviço para a aplicação */

const express = require('express');

const routes = require('../app/routes');

const app = express();

app.use(express.json());
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

module.exports = app;
