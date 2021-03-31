const express = require('express')
const { User } = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {
    if (!req.userId) return res.status(403).send('Token has not userId')

    try {
        const favourite = await User
            .findById(req.userId)
            .populate(
                {
                    path: 'favourite',
                    select: '-dateCreated',
                    populate: {
                        path: 'category',
                    }
                }
            )
            .select('favourite')

        if (!favourite)
            return res.status(404).send('The user not found')
        res.status(200).send(favourite)
    } catch(err) {
        res.status(500).send(`Get favourite error: ${err.message}`)
    }
})

router.post('/', async (req, res) => {
    // body
    // { productId: '******' }
    try {
        if (!req.userId) return res.status(403).send('Token has not userId')

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

router.delete('/:productId', async (req, res) => {
    try {
        if (!req.userId) return res.status(403).send('Token has not userId')

        const oldUser = await User.findById(req.userId)
        const filteredFavourite = oldUser.favourite.filter(f => f.toString() !== req.params.productId)
        const user = await User.findByIdAndUpdate(
            req.userId,
            {
                favourite: [...filteredFavourite]
            },
            { new: true }
        )

        if (!user)
            return res.status(500).send('The favourite cannot be updated')
        res.status(200).send(user.favourite)
    } catch(err) {
        res.status(500).send(`Delete favourite error: ${err.message}`)
    }
})

module.exports = router