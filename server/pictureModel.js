var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictureSchema = new Schema({
  id: Number,
  username: {type: String, required: true, unique: true},
  url: {type: String, required: true, unique: true}
});

var Picture = mongoose.model('Picture', pictureSchema);
module.exports = Picture;