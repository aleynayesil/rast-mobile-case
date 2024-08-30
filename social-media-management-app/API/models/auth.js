const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: new Date()
    }
},{
    versionKey: false
})

module.exports = mongoose.model('Auth', AuthSchema);