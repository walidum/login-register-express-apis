const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00.yuwd0.mongodb.net:27017,cluster0-shard-00-01.yuwd0.mongodb.net:27017,cluster0-shard-00-02.yuwd0.mongodb.net:27017/mohamed?ssl=true&replicaSet=atlas-yiojks-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true},
    (err) => {
        if (!err) {
            console.log('Successfully Established Connection with MongoDB')
        } else {
            console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
        }
    });
module.exports = mongoose
