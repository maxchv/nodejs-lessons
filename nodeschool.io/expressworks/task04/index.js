const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

const port = process.argv[2] || 3000;

app.use(bodyparser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get("/form", (req, res) => {
    res.render('index');
});

app.post('/form', (req, res) => {
    console.log(req.body);
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(port);

