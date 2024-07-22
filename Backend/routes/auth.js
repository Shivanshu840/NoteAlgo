const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {USER} = require("../Db/db");
const key = process.env.KEY;


router.post("/Login",async(req,res)=>{
    const {username,password} = req.body;

    const user = await USER.find({
        useremail,
        password
    })

    if(!user){
        res.status(400).json({msg:"user does not exist"});
        return;
    }else{
        const token = jwt.sign({username},key);
        res.status(200).json({token});
    }

})

router.post("/signup",async(req,res)=>{
    const {username,useremail,password,contact} = req.body;
     const user = await SIGNUP.findOne({
        useremail,
     })

     if(user){
        res.status(200).json({msg:"user already exists"})
     }

    await USER.create({
        username:username,
        useremail:useremail,
        password:password,
        contact:contact,
    })

    res.status(200).json({msg:"user signup successfully"});
})



