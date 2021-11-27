const mongoose=require('mongoose')
const AdminSchma=mongoose.Schema({
    
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
    
    users:
    [
        {
            type:mongoose.Schema.Types.ObjectId,ref:'user'
        } 
    ]
})
module.exports=mongoose.model("admin",AdminSchma)