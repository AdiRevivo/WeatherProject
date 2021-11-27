
const user=require('../Models/user')
const weather=require('../Models/weather')
const requst=require('../requst')


const createWeather=async(req,res)=>
{
    try {  
        Thisuser= await user.findById(req.params.id)
        data=await requst.requestApi(req.params.city);
        let dataW= JSON.parse(data)
        NewWeather=new weather
        ({ city:dataW.name,
            temp:dataW.main.temp,
            wind:dataW.wind.speed
        })
        NewWeather.user=Thisuser._id
        await NewWeather.save();
        userW= await user.findByIdAndUpdate(req.params.id
            ,{$push:{weathers:NewWeather._id}},{new:true})
            res.status(200).json({weather:NewWeather})
        } 
        catch (error) {
            res.status(400).json("error:  "+error)
        }}
        
        
        const deleteWeather=async(req,res) =>
        {
            try {
                ThisWeather=await weather.findById(req.params.id)                
                ThisUser= await user.findByIdAndUpdate(ThisWeather.user,
                    {$pull:{weathers:ThisWeather._id}})
                    DelWeather=await weather.findByIdAndDelete(ThisWeather)
                    res.status(200).json({user:ThisUser,DelWeather:DelWeather})
                } 
                catch (error) {
                    res.status(400).json("error:" + error)              
                }
            }
            
            
            const getWeather=async(req,res) =>
            {
                try {
                    Allweather=await weather.find();
                    res.status(200).json({Allweather:Allweather})
                } 
                catch (error) {
                    res.status(400).json("error:" + error)              
                }
            }
            
            const getWeathersByUserId=async(req,res) =>
            {
                try {
                    
                    WeathersByUser=await user.findById(req.params.id)
                    .populate({path:'weathers'})
                    res.status(200).json({WeathersByUser:WeathersByUser})
                } 
                catch (error) {
                    res.status(400).json("error:" + error)              
                }
            }
            
            
            module.exports={createWeather,getWeather,getWeathersByUserId,deleteWeather}