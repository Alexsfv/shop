const express = require('express')
const { User } = require('../models/user')
const router = express.Router()

router.post('/', async (req, res) => {
    // body
    // { productId: '******' }
    if (!req.userId) return res.status(403).send('Token has not userId')
    try {
        const oldUser = await User.findById(req.userId)

        const user = await User.findByIdAndUpdate(
            req.userId,
            {
                favourite: [...oldUser.favourite, req.body.productId]
            },
            { new: true }
        )

        if (!user)
            return res.status(500).send('The favourite cannot be created')
        res.status(200).send(user.favourite)
    } catch(err) {
        res.status(400).send(`Create favourite error: ${err.message}`)
    }
})



module.exports = router