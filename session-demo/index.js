const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const homeRouter = require('./routers/home');

const app = express();
const server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({
    store: new RedisStore({
        host: '192.168.99.100',
        port: 6379
    }),
    resave: false,
    saveUninitialized: false,
    secret: 'my secret key'
}));

app.use('/', homeRouter);

server.listen(3000);
