const http = require('http');

const app = require('./config/express');

http.createServer(app).listen(8080, () => {
  console.log('Servidor escutando na porta: ' + http.address().port);
});
