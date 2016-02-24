var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictureSchema = new Schema({
  userName: {type: String, required: true},
  url: {type: String, required: true, unique: true},
  desc: {type: String, required: false}
});

var Picture = mongoose.model('Picture', pictureSchema);
module.exports = Picture;

var userSchema = new Schema({
  userId: {type: String, required: true, unique: true},
  userName: {type: String, required: true},
  password: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);
module.exports = User;
