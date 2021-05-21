const { User } = require('../models/user')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.get('/', async (req, res) => {
    if (!req.isAdmin) return res.status(403).send('Access denied')

    const userList = await User.find().select('-passwordHash')
    if (!userList) {
        res.status(500).json({ success: false })
    }
    res.send(userList)
})

router.get('/:id', async (req, res) => {
    if (!req.isAdmin) return res.status(403).send('Access denied')

    const user = await User.findById(req.params.id).select('-passwordHash')
    if (!user) {
        return res.status(500).json({ message: 'The user with the given ID was not found.' })
    }
    res.status(200).send(user)
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).send('The user not found!')
    }
    if (user && bcrypt.compareSync(req.body.password.toString(), user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin,
            },
            process.env.secret,
            { expiresIn: '1d' }
        )
        const userWihoutHash = Object.assign({}, user._doc)
        delete userWihoutHash.passwordHash
        return res.status(200).send({ user: userWihoutHash, token })
    } else {
        return res.status(400).send('Password is wrong')
    }
})

router.post('/register', async (req, res) => {
    if (!req.body.email) return res.status(400).json({ success: false, message: 'Email is required' })
    if (!req.body.name) return res.status(400).json({ success: false, message: 'Name is required' })
    if (!req.body.password) return res.status(400).json({ success: false, message: 'Password is required' })

    const registeredUser = await User.findOne({ email: req.body.email })
    if (registeredUser) return res.status(400).json({
        success: false,
        message: 'A user with this email address is already registered'
    })

    let user = new User({
        email: req.body.email,
        name: req.body.name,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
    })
    user = await user.save()

    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'Error when creating a user'
        })
    }
    res.json({
        success: true,
        message: ''
    })
})

router.get('/get/count', async (req, res) => {
    console.log('req.status', req.isAdmin);
    if (!req.isAdmin) return res.status(403).send('Access denied')

    const userCount = await User.countDocuments(count => count)
    if (!userCount) {
        return res.status(500).json({ success: false })
    }
    res.send({ userCount })
})

router.delete('/:id', async (req, res) => {
    if (!req.isAdmin) return res.status(403).send('Access denied')

    User.findByIdAndRemove(req.params.id)
        .then(user => {
            if (user) {
                return res.status(200).json({
                    success: true,
                    message: 'The user is deleted!'
                })
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'User not found!'
                })
            }
        })
        .catch(err => {
            return res.status(400).json({
                success: false,
                error: err
            })
        })
})


// development

router.post('/favourite', async (req, res) => {
    res.status(501).send('Under development')
})

router.delete('/favourite', async (req, res) => {
    res.status(501).send('Under development')
})

router.post('/cart', async (req, res) => {
    res.status(501).send('Under development')
})

router.delete('/cart', async (req, res) => {
    res.status(501).send('Under development')
})

module.exports = router