var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.use(express.static('public'));

// register page
app.get('/', function(req, res) {
  res.render('pages/register');
});

app.listen(3000);
console.log('Server is listening on port 3000');