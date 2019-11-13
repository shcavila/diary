var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entrySchema = new Schema({
    title:{
        type: String
    },
    body: {
        type: String
    },
    image:{
        type:Buffer
    }
});
module.exports = mongoose.model('Entry', entrySchema);