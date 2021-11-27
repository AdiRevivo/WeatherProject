const mongoose=require('mongoose')
const WeatherSchma=mongoose.Schema({
    
    Date:{
        type:Date,
        require:true
    },
    city:
    {
        type:String,
        require:true,
    },
    temp:{
        type:Number,
        require:true, 
    },
    wind:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:'user'
    } 
})
module.exports=mongoose.model("weather",WeatherSchma)