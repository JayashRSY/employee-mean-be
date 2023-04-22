const mongoose = require('mongoose')

// mongoose.connect("mongodb+srv://JohnRakon:909090@cluster0.wv3mcb2.mongodb.net/employeeDB")
//     .then(console.log("MongoDB Connected"))
//     .catch(err => console.log(err))

mongoose.connect("mongodb://localhost:27017/emp-db")
    .then(console.log("MongoDB Connected"))
    .catch(err => console.log(err))

module.exports = mongoose
