var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "project"
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/step', function (req, res) {

});

app.post('/step', function (req, res) {

});

app.get('/provider', function (req, res) {
	connection.query('SELECT p.name p_name, t.name t_name FROM provider p INNER JOIN type t ON t.id = p.out_id', function (error, results, fields) {
  		if (error) throw error;
  		
  		res.send(results);
	});
});

app.post('/provider', function (req, res) {

});







app.listen(8001, function () {
  console.log('FlockBot [' +8001 + '] running on port ');
});