var express   = require('express');
var mongoose  = require('mongoose');
var connect   = require('connect');

var database  = require('./config/database');

var app       = express();

mongoose.connect(database.url);

app.configure( function() {
  app.set('port', process.env.PORT || 8080);
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger('dev'));
  app.use(connect.urlencoded())
  app.use(connect.json())
  app.use(express.methodOverride());
});

require('./app/controllers/todoController.js')(app);

app.listen(app.get('port'));
console.log('App listening on port ' + app.get('port'));
