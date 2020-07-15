const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'views'));
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel-core/register')({
    ignore: false
});

app.use('/', (req, res) => {
    res.render('index', '');
});

app.listen(app.get('port'), () => {
    console.log('Express server is up on port 3000');
});