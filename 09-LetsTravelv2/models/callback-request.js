let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let callbackSchema = new Schema({
    id: String,
    phoneNumber: String,
    date: Date
});

let CallbackRequest = mongoose.model('CallbackRequest', callbackSchema, 'callback-requests');

module.exports = { CallbackRequest }