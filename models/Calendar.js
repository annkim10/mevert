const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CalendarSchema = new Schema({
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

module.exports = Calendar = mongoose.model('Calendar', CalendarSchema);