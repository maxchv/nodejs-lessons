const express = require('express');
const path = require('path');

const app = express();
const port = process.argv[2] || 3000;
const template = process.argv[3] || path.join(__dirname, 'templates');

app.set('views', template);
app.set('view engine', 'pug');

app.get('/home', (req, resp) => {
    resp.render('index', { date: new Date().toDateString() });
});

app.listen(port);
