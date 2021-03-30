const jwt = require('jsonwebtoken')

const jwtPayloadToRequest = function(req, res, next) {
    let adminStatus = false
    let userId = ''
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        const payload = jwt.verify(token, process.env.secret)
        adminStatus = payload.isAdmin
        userId = payload.userId
    }
    req.isAdmin = adminStatus
    req.userId = userId
    next()
}

module.exports = jwtPayloadToRequest