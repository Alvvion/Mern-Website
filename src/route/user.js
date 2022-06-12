const express = require('express')
const router = express.Router()
const signup = require('../controller/signup')
const signin = require('../controller/signin')
const auth = require('../controller/auth')

router.post('/signin', signin)

router.post('/signup',signup)

router.post('/profile',auth,(req,res)=>{
    res.status(200).json(
        {
            user: 'profile'
        }
    )
})

module.exports = router