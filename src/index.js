require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./route/user')

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fdrjaov.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("Database Connected")
}).catch(err=>{
    console.log(err)
})

app.use(express.json())
app.use('/api', userRoutes)

app.get('/',(req,res)=>{
    res.status(200)
    res.send("<h1>Hello World</h1>")
})

app.post('/data', (req,res)=>{
    res.status(200).json({
        message: req.body
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}/`)
})