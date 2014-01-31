var mongoose    = require('mongoose');

module.exports = mongoose.model('Race', {
  name  :   String,
  type  : String,
  date  : Date
});
