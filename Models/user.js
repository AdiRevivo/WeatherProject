const mongoose=require('mongoose')
const UserSchma=mongoose.Schema({
    
    name:{
        type:String,
        require:true
    },
    password:
    {
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true, 
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,ref:'admin'
    },
    weathers:
    [
        {
            type:mongoose.Schema.Types.ObjectId,ref:'weather'
        } ] 
    })
    module.exports=mongoose.model("user",UserSchma)