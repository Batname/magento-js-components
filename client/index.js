
const koa = require('koa');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
var session = require('koa-generic-session');

// app init
const app = koa();

// trust proxy
app.proxy = true;

// sessions
app.keys = ['your-session-secret'];
app.use(session());

// db init
const defaultConfig = require('./config/default');
mongoose.connect(defaultConfig.mongoose.uri);

// middlewares
const middlewares = fs.readdirSync(path.join(__dirname, '/app/middlewares')).sort();
middlewares.forEach((middleware) => {
  app.use(require('./app/middlewares/' + middleware));
});

// routers
const router = require('./config/routers');
app.use(router.routes());

// Not found
app.use(function* (){
  this.status = 404;
  this.body = 'Page not FOUND';
});


if(!module.parent){
  app.listen(3000);
  console.log('server listening on port 3000');
}