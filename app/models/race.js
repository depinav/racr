var mongoose    = require('mongoose');

module.exports = mongoose.model('Race', {
  name  :   String,
  location  : String,
  track   : String,
  type  : String,
  date  : Date
});
