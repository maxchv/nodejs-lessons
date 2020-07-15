const express = require('express');
const path = require('path');

const app = express();
const port = process.argv[2];
const static_path = process.argv[3] || path.join(__dirname, 'public');

app.use(express.static(static_path));

app.listen(port);
