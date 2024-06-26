const User=require('../models/userModel');
const jwt=require('jsonwebtoken');

exports.loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                status:"failure",
                code:400,
                message:"Please provide email and password",
                data:[]
            });
        }
        const user=process.env.ADMIN_EMAIL;
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        if(process.env.ADMIN_PASSWORD!==password){
            return res.status(400).json({message:"Invalid password"});
        }
        const token=jwt.sign({email:email},process.env.JWT_SECRET);
                
        res.status(200).json({message:"User logged in successfully",code:200,token:token});
    }catch(error){
        res.status(400).json({message:error.message});
    }
}