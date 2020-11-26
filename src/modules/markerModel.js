const mongoose = require('mongoose');

const markerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    title : String,
    street: String,
    houseNumber: String,
    postcode: String,
});

const marker = mongoose.model('Marker',markerSchema);
module.exports = marker;