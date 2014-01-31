var mongoose    = require('mongoose');

module.exports = mongoose.model('Race', {
  name  :   String,
  location  : String,
  type  : String,
  date  : Date
});
