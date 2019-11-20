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
       type:String
    },
    createdAt:{
        type: Date,
        default: new Date(),
        required: true
    },
    editedAt:{
        type: Date,
        required: false
    }

});
module.exports = mongoose.model('Entry', entrySchema);