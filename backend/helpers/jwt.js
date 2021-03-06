const expressJwt = require('express-jwt')

function authJwt() {
    const secret = process.env.secret
    const api = process.env.API_URL

    return expressJwt({
        secret,
        algorithms: ['HS256'],
    }).unless({
        path: [
            { url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS']},
            { url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS']},
            { url: /\/public\/upload(.*)/, methods: ['GET', 'OPTIONS']},
            `${api}/users/login`,
            `${api}/auth/check-auth`,
            `${api}/users/register`,
        ]
    })
}

module.exports = authJwt