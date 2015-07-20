'use strict';

var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var app = express();

var add = require('./add');


/* Configuration */

app.set('view engine', 'html');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


/* Routes */

app.use('/static', express.static('static'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/hello/:name', function(req, res) {
    var name = req.params.name;
    res.render('hello', { name: name });
});

app.post('/hello', bodyParser.urlencoded({ extended: true }), function(req, res) {
    var name = req.body.name;
    res.render('hello', { name: name });
});

app.get('/error', function(req, res) {
    /*eslint-disable */    
    throw new Error('An error occured');
    res.send('This message never comes.');
    /*eslint-enable */
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

app.get('/json', function(req, res) {
    res.send({
        id: 1234,
        name: 'An Object',
        description: 'This is an object'
    });
});

/*eslint-disable no-unused-vars*/
app.use(function(req, res, next) {
    res.status(404).render('404');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
/*eslint-enable no-unused-vars*/

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Example app listening at http://127.0.0.1:%s/', port);
});
