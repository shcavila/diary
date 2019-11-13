var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entrySchema = new Schema({
    title:{
        type: String
    },
    body: {
        type: String
    },
    img:{
        type:Buffer,
        data:String
    }
});
module.exports = mongoose.model('Entry', entrySchema);