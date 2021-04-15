const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    regno: {type:Number, required:true},
    name: {type:String, required:true},
    gender: {type:String, required:true}
    
});

module.exports = mongoose.model('Student', StudentSchema);