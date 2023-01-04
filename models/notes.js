const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema  = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }, 
}, {timestamps: true});

const Notes = mongoose.model('Notes', noteSchema);
module.exports = Notes;