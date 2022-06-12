const User = require('../../models/user')

module.exports = (req, res) => {
    User.findOne({ email: req.body.email }).exec((error, user) => {
        if (user) return res.status(400).json({
            message: "Admin Already Exist"
        });

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body

        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString(),
            role: 'admin'
        })

        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({
                    message: error
                })
            }
            if (data) {
                return res.status(201).json({
                    message: "Admin Created Successfully"
                })
            }
        })

    })
}