const mongoose = require('mongoose');

const CrudSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },   
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    date:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('crud', CrudSchema);