var mongoose    = require('mongoose'),
    race        = require('./race');

module.exports = mongoose.model('Track', {
    name  : String,
    type  : String,
    length: Number,
    races : [{
        type: mongoose.Schema.ObjectId,
        ref : 'Race'
    }]
});
