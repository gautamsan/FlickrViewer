var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var Picture = require('./server/pictureModel');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/favs', function(req, res){
  Picture.find({userName: "santosh"}, function(err, picture) {
    if(err) throw err;
    res.send(picture);
  });
});

//Handle post
app.post('/api/postFav', function(req, res, next) {
  var picture = Picture({
    userName: req.body.username,
    url: req.body.picUrl,
    desc: req.body.title
  });
  picture.save(function(err) {
    if(err) throw err;
    res.send("saved");
  })
});

//Handle delete
app.put('/api/delFav', function(req, res) {
  Picture.findOne({_id: req.body.url}, function(err, item) {
    if(err) throw err;
    item.remove(function(err) {
      //No error removed
      if(err) {
        throw err;
      }
    });
    console.log('picture deleted');
    res.send();
  })
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '..');

//connect to db
mongoose.connect('mongodb://localhost/congressionalStalker');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('flickrViewer db opened');
});