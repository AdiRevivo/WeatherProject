const express=require('express')
const app=express();
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const router=require('./routes/api')
const jwt = require('jsonwebtoken')

const connectionParams={
    newUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}
mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>
console.log("db connected!!")
).catch(console.error())

app.listen(5000,()=>
{
    console.log("listening");
})


app.use('/',function(req,res,next)
{
    console.log("bla");
    if(!req.path.startsWith('/loginUser') && req.path!=='/createUser'
    && req.path!=='/loginAdmin' && req.path!=='/createAdmin'){
        try {
            jwt.verify(req.headers['authorization'],process.env.SECRET)
            next()
        } catch (error) {
            console.log(error);
            res.send('not login')
        }
    }
    else
    next()
})
app.use(bodyParser.json());

app.use('/',router);
