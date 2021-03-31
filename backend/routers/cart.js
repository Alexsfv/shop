const express = require('express')
const { OrderItem } = require('../models/order-item')
const router = express.Router()
const mongoose = require('mongoose')
const { User } = require('../models/user')

router.get('/', async (req, res) => {
    try {
        if (!req.userId) return res.status(403).send('Token has not userId')
        const cart = await User
            .findById(req.userId)
            .populate({
                path: 'cart',
                populate: {
                    path: 'product',
                    populate: { path: 'category' }
                }
            })
            .select('cart')

        if (!cart) return res.status(500).send('The cart not found')
        res.status(200).send(cart)
    } catch(err) {
        res.status(400).send(`Get cart error: ${err.message}`)
    }
})

router.post('/', async (req, res) => {
    // body
    // { productId: '******', quantity: 123 }
    try {
        if (!req.userId) return res.status(403).send('Token has not userId')
        if (!mongoose.isValidObjectId(req.body.productId))
            return res.status(400).send('Invalid ProductId')

        let orderItem = new OrderItem({
            product: req.body.productId,
            quantity: req.body.quantity
        })

        const user = await User.findById(req.userId)
        if (!user) return res.status(500).send('The user not found')

        orderItem = await orderItem.save()
        if (!orderItem)
            return res.status(500).send('The orderItem cannot be created')

        await user.updateOne({
            cart: [...user.cart, orderItem]
        })

        res.status(200).send(orderItem)
    } catch(err) {
        res.status(400).send(`Create orderItem error: ${err.message}`)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        if (!req.userId) return res.status(403).send('Token has not userId')
        if (!mongoose.isValidObjectId(req.params.id))
            return res.status(400).send('Invalid orderItem id')

        const user = await User.findById(req.userId)
        if (!user) return res.status(500).send('The user not found')

        const filteredItems = user.cart.filter(item => item.toString() !== req.params.id)

        const newCart = await User
            .findByIdAndUpdate(
                req.userId,
                {
                    cart: filteredItems
                },
                { new: true }
            )
            .select('cart')

        if (!newCart) return res.status(500).send('The cart cannot be updated')
        res.status(200).send(newCart)
    } catch(err) {
        console.log(err);
        res.status(400).send(`Delete orderItem error: ${err.message}`)
    }
})

module.exports = router