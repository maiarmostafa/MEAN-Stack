const Mongoose = require("mongoose");
const Student = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    },
    city: {
        type: String
    },
    password: {
        type: String
    },email:{
        type:String
    },profile_pic:{
        type:String
    }
});

const Student_db = Mongoose.model("Student", Student);
module.exports = Student_db;