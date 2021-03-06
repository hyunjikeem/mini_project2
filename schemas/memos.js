const mongoose = require('mongoose')
const { Schema } = mongoose
const memoSchema = new Schema({
    memo_id: {
        type: String,
        required: true
    },
    note_id: {
        type: Number,
        required: true
    },
    memo_content: {
        type: String,
        required: true
    },
    memo_title: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
})

module.exports = mongoose.model('Memo', memoSchema)