const mongourl = process.env.MONGO_URL
mongoose.connect(mongourl)
.then(()=>{
    console.log("Database is connected");
})

const userSchema = new mongoose.Schema(
    username = String,
    password = String
);

const USER = mongooses.model("USER",userSchema);

exports.module = {
USER,
}