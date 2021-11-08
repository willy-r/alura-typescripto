/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = (app) => app.get('/dados', api.dados);
