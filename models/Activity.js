const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const ActivitySchema = new Schema ({
    title: {
        type: String,
        required: true 
    },

    availability: {
        type: Number,
        required: true 
    },

    type: {
        type: String,
        required: true 
    },

    price: {
        type: Number,
        required: true  
    },
    
    accessibility: {
        type: String,
        required: true 
    },

    link: {
        type: Object,
        required: true 
    },
    reviews: {
        type: Array,
        default: []
    },
    category: {
        type: String,
        required: true 
    },
    map_data: {
        type: Array,
        required: true
    }
})

const Activity = mongoose.model('activity', ActivitySchema)
module.exports = Activity