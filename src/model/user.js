const mongoose = require('mongoose')
const shema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    category: {
        type: String,
    }

})

module.exports = mongoose.model('User', shema)
