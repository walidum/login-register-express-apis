const mongoose = require('mongoose')
const bycrypt = require('bcryptjs')
const SALT_WORK_FACTOR = 10;


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
},{timestamps: true})

shema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bycrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bycrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});
module.exports = mongoose.model('User', shema)
