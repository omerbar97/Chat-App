const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this is the Message schema
const Message = new Schema({
    id: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        nullable: true
    },
});

module.exports = mongoose.model('Message', Message);
