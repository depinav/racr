var mongoose = require('mongoose')
    track     = require('./track');

module.exports = mongoose.model('Race', {
  name  :   String,
  type  : String,
  date  : Date,
  track : {
      type : mongoose.Schema.ObjectId,
      ref  : 'Track'
  }
});
