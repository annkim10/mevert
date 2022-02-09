const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EventSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String, 
        required: true
    },
    start: {
        type: Date, 
        required: true
    },
    end: {
        type: Date,
        required: true
    }
  
    }, {
    timestamps: true
})

module.exports = Event = mongoose.model('Event', EventSchema);