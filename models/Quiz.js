const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  q1: {
    type: Number, 
    required: true
  },
  q2: {
    type: Number, 
    required: true
  },
  q3: {
    type: Number, 
    required: true
  },
  q4: {
    type: Number, 
    required: true
  },
  q5: {
    type: Number, 
    required: true
  },
  q6: {
    type: Number, 
    required: true
  },
  q7: {
    type: Number, 
    required: true
  },
  q8: {
    type: Number, 
    required: true
  },
  q9: {
    type: Number, 
    required: true
  },
  q10: {
    type: Number, 
    required: true
  }
}, {
  timestamps: true
})

module.exports = Quiz = mongoose.model('Quiz', QuizSchema);