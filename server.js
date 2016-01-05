var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var userRouter = express.Router();
var favsRouter = express.Router();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.use('api/users', userRouter);
app.use('api/favs', favsRouter);

//Handle any route
//app.get('*')

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '..');

//connect to db
mongoose.connect('mongodb://localhost/flickrViewer');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('flickrViewer db opened');
});