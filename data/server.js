// include needed libs
var express = require('express');
var compress = require('compression');

// declare web server
var app = express();
var port = 80

// setup app parameters
app.use(compress());
app.use('/', express.static(__dirname + '/html'));


// catch 404 page not found error
app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/html/404.html');
});


//launch webserver
app.listen(port);

console.log('Server is running on port ' + port);
