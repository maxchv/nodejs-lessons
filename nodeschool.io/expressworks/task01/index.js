const express = require('express');
const app = express();

const port = process.argv[2];

app.get('/home', (request, response) => {
    response.end("Hello World!");
});

app.listen(port);