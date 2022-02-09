const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateReviewInput(data) {
    let errors = {}

    data.title = validText(data.title) ? data.title : "";
    data.body = validText(data.body) ? data.body : "";

    if (Validator.isEmpty(data.title)) {
        errors.title = "Review header is required"
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = "Review body is required"
    }


    if (!Validator.isInt(data.ratings, {min: 1, max: 5})) {
        errors.ratings = "Review Rating is required"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}