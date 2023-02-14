const express=require('express')
const mongoose=require('mongoose')
const app=express()
const route=require('./route')
app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://yashwantr_14:Yashu_1410@cluster0.uic9809.mongodb.net/BonusProject4', {useNewUrlParser:true})
.then(()=>{
    console.log('MongoDB is connected')
})
.catch((error)=>{
    console.log({error:error})
})

app.use('/',route)

app.listen(3002,()=>{
    console.log('Express port is running on '+ 3002)
})