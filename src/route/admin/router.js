const express = require('express')
const router = express.Router()
const signup = require('../../controller/admin/signup')
const signin = require('../../controller/admin/signin')

router.post('/admin/signin', signin)

router.post('/admin/signup',signup)

// router.post('/profile',auth,(req,res)=>{
//     res.status(200).json(
//         {
//             user: 'profile'
//         }
//     )
// })

module.exports = router