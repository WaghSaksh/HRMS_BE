const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')


mongoose.connect('mongodb://127.0.0.1:27017/HRMS')
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))

const app=express()
app.use(express.json())
app.use(cors())

const AdminRouter=require('./routes/AdminRoutes')
app.use('/hrms',AdminRouter)

const HeadRouter=require("./routes/HeadRoutes")
app.use("/hrmshead",HeadRouter)

const UserRouter=require('./routes/UserRoutes')
app.use('/hrmsuser',UserRouter)

app.listen(5000,()=>{
    console.log('server is listening on port 5000');
});
