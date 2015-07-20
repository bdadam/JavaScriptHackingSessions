'use strict';

var express = require('express');
var app = express();

var add = require('./add');

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/add', function(req, res) {
    var a = Number(req.query.a);
    var b = Number(req.query.b);

    if (!isNaN(a) && !isNaN(b)) {
        res.send('The result is: ' + add(a, b));
    } else {
        res.send('Parameter missing: "a" and "b" are required. Try it like this: /add?a=1&b=2');
    }
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
