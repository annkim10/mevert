const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const ReviewSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    activity: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Review = mongoose.model('review', ReviewSchema)
module.exports = Review