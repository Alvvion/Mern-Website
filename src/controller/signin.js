const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res)=>{
    User.findOne({ email: req.body.email }).exec((error, user)=>{
        if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id: user._id},process.env.OAUTH_TOKEN,{expiresIn: "1h"})
                const {firstName, lastName, email, role, fullName } = user
                res.status(200).json({
                    token,
                    user: {
                        firstName,
                        lastName,
                        email,
                        role,
                        fullName
                    }
                }) 
            }
            else{
                return res.status(401).json({
                    message: "Invalid Password or Email"
                })
            }
        }
    })
}