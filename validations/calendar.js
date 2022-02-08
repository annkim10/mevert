const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateCalendarInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';

    if (!Validator.isLength(data.title, { min: 2, max: 10 })) {
        errors.title = 'Event Title must be between 2 and 10 characters';
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
