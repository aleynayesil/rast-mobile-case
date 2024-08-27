const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database Connected.");
    }).catch((error) => {
        console.log(error);
    })
}

module.exports = db;