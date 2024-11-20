const mongoose = require('mongoose');


  
    mongoose.connect("mongodb+srv://shivamgupta262002:shivamgupta262002@krafts.nsuw0zl.mongodb.net/?retryWrites=true&w=majority&appName=Krafts")
      
    

// user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true,
        unique: true
        },
    password: {
        type: String,
        required: true
        },
    date:{
        type:Date,
        default:Date.now
        }
});

const User = mongoose.model('User', userSchema);


module.exports = mongoose.model('User');