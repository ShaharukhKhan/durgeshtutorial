const mongoose = require('mongoose');
const Detail = require("./models/detail")

async function connectToMongoDB(url) {
    return mongoose.connect(url);
    
}

module.exports = {
    connectToMongoDB,
}