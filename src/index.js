require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./route/router')
const adminRoutes = require('./route/admin/router')

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fdrjaov.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("Database Connected")
}).catch(err=>{
    console.log(err)
})

app.use(express.json())
app.use('/api', userRoutes)
app.use('/api',adminRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}/`)
})