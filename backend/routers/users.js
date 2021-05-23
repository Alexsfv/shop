const { User } = require('../models/user')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const ALLOWED_FILES = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

const avatarField = [{
    name: 'avatar',
    maxCount: 1
}]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let errorFile = new Error('Invalid file type')
        if (ALLOWED_FILES[file.mimetype]) {
            errorFile = null
        }
        cb(errorFile, 'public/uploads/avatars')
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-')
        const extension = ALLOWED_FILES[file.mimetype]
        cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
})

const optionStorage = multer({
    storage
})

router.get('/', async (req, res) => {
    if (!req.isAdmin) return res.status(403).send('Access denied')

    const userList = await User.find().select('-passwordHash')
    if (!userList) {
        res.status(500).json({ success: false })
    }
    res.send(userList)
})

router.get('/:id', async (req, res) => {
    console.log(111);
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

router.get('/auth/initial', async (req, res) => {
    const authToken = req.headers.authorization

    if (!authToken) return res.status(401)

    const token = authToken.split(' ')[1]
    const payload = jwt.verify(token, process.env.secret)
    const dateNow = Math.ceil(Date.now()/1000)

    if (dateNow > payload.exp) return res.status(401)

    const user = await User.findById(payload.userId).select()
    const userWihoutHash = Object.assign({}, user._doc)
    delete userWihoutHash.passwordHash

    return res.status(200).json(user)
})

router.post('/account/avatar', optionStorage.fields(avatarField), async (req, res) => {
    if (!req.files.avatar) return res.status(400).json('"avatar" is reqiured')
    const imageUrl = `/public/uploads/avatars/${req.files.avatar[0].filename}`
    await User.findByIdAndUpdate(req.userId, {image: imageUrl})
    res.status(200).json({path: imageUrl})
})

router.post('/account/info', async (req, res) => {
    console.log('BODY', req.body)
    const user = await User.findByIdAndUpdate(req.userId, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        city: req.body.city,
    }, {new: true})
    if (!user) res.status(500).text('Error when editing a user')
    const userWihoutHash = Object.assign({}, user._doc)
    delete userWihoutHash.passwordHash

    return res.status(200).json({ user })
})

router.get('/get/count', async (req, res) => {
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