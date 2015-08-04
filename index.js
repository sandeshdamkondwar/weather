var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.set('views', __dirname + '');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cokkieName;
  if (cookie === undefined)
  {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie have created successfully');
  }
  else
  {
    // yes, cookie was already present
    console.log('cookie exists', cookie);
  }
  next(); // <-- important!
});

app.get('/flipkart/coupons', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log("Cookies: ", req.cookies);
});

app.get('/flipkart', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/amazon', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

