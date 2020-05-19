const mongoose = require('mongoose')

const PostCommentSchema = mongoose.Schema({
    work_effort_id: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    left_at: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Comments', PostCommentSchema)