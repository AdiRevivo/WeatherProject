const user=require('../Models/user')
const admin=require('../Models/admin')
const nodemailer = require('nodemailer');
const mail=require('../sendMail')
const dotenv=require('dotenv')
dotenv.config()
const jwt=require('jsonwebtoken')

const createUser=async(req,res)=>
{
    try {
        NewUser=new user(req.body)
        mail.send(req.body.name,req.body.email)
        myAdmin=await admin.findOne()
        NewUser.admin=myAdmin._id
        await NewUser.save()
        
        myAdmin.users.push(NewUser._id)
        await myAdmin.save()
        res.status(200).json({newUser:NewUser,admin:myAdmin})
    } 
    catch (error) {
        res.status(400).json("error:  "+error)
    }
}

getUserById =async(req,res) =>
{
    try {
        userById=await user.findById(req.params.id)
        res.status(200).json({usersById:userById})
    } 
    catch (error) {
        res.status(400).json({error:error})              
    }
}

getAllUser=async(req,res) =>
{
    try {
        AllUser=await user.find()
        res.status(200).json({AllUser:AllUser})
    } 
    catch (error) {
        res.status(400).json("error:  "+error)
    }
}
updateUser=async(req,res) =>
{
    try {
        userUpdate=await 
        user.findOneAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({userUpdate:userUpdate})
    } 
    catch (error) {
        res.status(400).json("error:  "+error)
    }
}

const loginUser=async(req,res) =>
{
    try {
        login=await user.findById(req.params.id)
        const token=jwt.sign({name:user.name,password:user.password}
            ,process.env.SECRET)
            res.status(200).json({loginUser:login,token:token})
        } 
        catch (error) {
            res.status(400).json("error:  "+error)
        }
    }
    
    
    
    module.exports={createUser,getUserById,updateUser,loginUser}