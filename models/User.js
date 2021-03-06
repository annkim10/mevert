const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: {
    type: String, 
    required: true
  },
  lastName: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  quiz: {
    type: Array
  },
  activities: {
    type: Array
  },
  reviews: {
    type: Array
  },
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);