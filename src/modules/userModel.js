const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    surename : String,
    gender: String,
    email: { type: String, unique: true, required: true },
    password: String
});

const user = mongoose.model('User',userSchema);
module.exports = user;