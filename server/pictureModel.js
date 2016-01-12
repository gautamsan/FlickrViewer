var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictureSchema = new Schema({
  //id: Number,
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

/*var congressPersonSchema = new Schema({
  name: String,
  id: String,
  state: String,
  district: String,
  website: String,
  party: String,
  nextElection: Number,
  facebook: String,
  twitter: String,
  totalVotes: Number,
  missedVotes: Number,
  missedVotesPerc: Number,
  votesWithParty: Number,
  chamber: String,
  seniority: Number
});

var CongressPerson = mongoose.model('CongressPerson', congressPersonSchema);
module.exports = CongressPerson;*/
