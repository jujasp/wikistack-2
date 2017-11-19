var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var models = require('./models');
var nunjucks = require('nunjucks');
var Sequelize = require('Sequelize');
var routes = require('./routes');
app.use(morgan('dev'));
var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

var wikiRouter = require('./routes/wiki');
var usersRouter = require('./routes/user');

app.use(express.static(__dirname + '/public'));
app.use('/', routes);
app.use('/wiki', wikiRouter);
app.use('/users', usersRouter);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


models.db.sync({force: true})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3002, function () {
        console.log('Server is listening on port 3002!');
    });
})
.catch(console.error);