const admin=require('../Models/admin')
//const user = require('../Models/user')
const users=require('../Models/user')
const weather=require('../Models/weather')

getAllUser=async(req,res) =>
{
    try {
        AllUser=await users.find()
        res.status(200).json({AllUser:AllUser})
    } 
    catch (error) {
        res.status(400).json("error:  "+error)
    }
}

const createAdmin=async(req,res)=>
{
    try {
        NewAdmin=await new admin(req.body)
        await NewAdmin.save()
        res.status(200).json({NewAdmin:NewAdmin})
    } 
    catch (error) {
        res.status(400).json("error:  "+error)
    }
}

const loginAdmin=async(req,res) =>
{
    try {
        login=await admin.findById(req.params.id)
        const token=jwt.sign({name:admin.name,password:admin.password}
            ,process.env.SECRET)
            res.status(200).json({loginUser:login,token:token})
        } 
        catch (error) {
            res.status(400).json("error:  "+error)
        }
    }
    
    updateAdmin=async(req,res) =>
    {
        try {
            adminUpdate=await 
            admin.findOneAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json({adminUpdate:adminUpdate})
        } 
        catch (error) {
            res.status(400).json({error:error})              
        }
    }
    
    const GetAdmin=async(req,res) =>
    {
        try {
            getAdmin=await admin.find()
            res.status(200).json({Admin:getAdmin})
        } 
        catch (error) {
            res.status(400).json("error"+error)              
        }
    }
    
    
    const deleteUser=async(req,res) =>
    {
        try {
            await  weather.deleteMany({'user':req.params.id})
            DelUser= await users.findByIdAndDelete(req.params.id)
            res.status(200).json({deleteUser:DelUser})
        } 
        catch (error) {
            res.status(400).json("error:" + error)              
        }
    }
    
    module.exports={createAdmin,loginAdmin,updateAdmin,GetAdmin,getAllUser,deleteUser}