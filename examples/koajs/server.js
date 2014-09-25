'use strict';

var koa = require('koa'),
  app = koa();

// Setup the RabbitMQ RPC publisher
// This will use one TCP connection for the application to share, many channels can be created and used
//require('./rpc-publisher');

app.use(function *(next){
  this.body = 'Hello World';
  yield next;
});

app.listen(3000);
