const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    console.log(token)
    const user = jwt.verify(token, process.env.OAUTH_TOKEN)
    req.user = user
    next()
}