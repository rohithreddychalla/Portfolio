const mongoose = require('mongoose');
const {Schema}  = mongoose



const msgSchema = new Schema({
    email: String,
    subject: String,
    message: String
})

module.exports = mongoose.model('Msg',msgSchema)

