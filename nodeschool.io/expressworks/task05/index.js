const express = require('express');
const path = require('path');

const port = process.argv[2] || 3000;

const app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.use(require('stylus').middleware(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render('index');
});

app.listen(port);
