var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application.vnd.api+json'}));

app.listen(8080);
console.log('App listening on port 8080');

app.get('/api/members', function(req, res){
    console.log('in get');
    var connection = mysql.createConnection({
        host: 'localhost',
        database: 'myBB',
        user: 'admin',
        password:'admin'
    });
    var users;
    connection.connect();

    connection.query('SELECT uid, username FROM mybb_users', function(err, rows, fields){
        if(err) throw err;
        users = rows;
        console.log('Users: ', users);
        console.log('The result: ', rows[0].username);
        res.json(users);
    });

});