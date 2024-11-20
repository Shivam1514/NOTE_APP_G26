const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://shivamgupta262002:shivamgupta262002@krafts.nsuw0zl.mongodb.net/?retryWrites=true&w=majority&appName=Krafts")

//Schema 

let noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    isImportant:Boolean,
    content:String,
    uploadedBy:String,
    date:{
        type:Date,
        default:Date.now
    }
})

//Model

mongoose.model('Notes',noteSchema)

module.exports = mongoose.model('Notes');