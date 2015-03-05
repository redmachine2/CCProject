var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

app.listen(80);

app.get('/members', function(req, res){
    
});