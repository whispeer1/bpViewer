var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/step', function (req, res) {

});

app.post('/step', function (req, res) {

});

app.get('/provider', function (req, res) {

});

app.post('/provider', function (req, res) {

});







app.listen(8001, function () {
  console.log('FlockBot [' +8001 + '] running on port ');
});