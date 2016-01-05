var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var Picture = require('./server/pictureModel');

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
app.get('*', function(req, res){
  console.log(req.body);
  res.sendFile('client/index.html');
});

//Handle post
app.post('/api/postFav', function(req, res, next) {
  var picture = Picture({
    id: req.body.id,
    username: req.body.username,
    url: req.body.picUrl
  });
  picture.save(function(err) {
    if(err) throw err;
    console.log('Picture saved to favs');
    res.send("saved");
  })
});

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