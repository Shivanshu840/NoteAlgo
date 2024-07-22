const mongoose = require("mongoose");
const mongourl = process.env.MONGO_URL;
mongoose.connect(mongourl)
.then(()=>{
    console.log("Database is connected");
})


const signupSchema = new mongoose.Schema({
    username : String,
    useremail: String,
    password: String,
    contact: Number,

})


const USER = mongoose.model("USER",signupSchema);

exports.module = {
USER,

}