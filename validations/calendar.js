
const Validator = require('validator');

module.exports = function checkDateValidation(data) {
    let errors = {};

    if ((data.start) > (data.end) || (data.end) < (data.start)) {
      // set date error validation true 
      
    } else {
      // null or false date error validation 
    }
  
}