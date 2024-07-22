const express = require('express');
const mongoose = require("mongoose");
const {Router} = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000
const {authroute} = require("./routes/auth")

app.use("/Register",authroute);

app.listen(PORT,()=>{
    console.log(`server is runing on this ${PORT}`);
})


