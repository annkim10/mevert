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
        required: true 
    },
    category: {
        type: String,
        required: true 
    }
})

const Activity = mongoose.model('activity', ActivitySchema)
module.exports = Activity