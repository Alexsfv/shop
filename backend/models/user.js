const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: '/public/uploads/avatars/defaultAvatar.jpg'
    },
    name: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        default: []
    }],
    favourite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: []
    }],
    isAdmin: {
        type: Boolean,
        default: false
    },
})

userSchema.virtual('id').get(function() {
    return this._id.toHexString()
})

userSchema.set('toJSON', {
    virtuals: true,
})

exports.User = mongoose.model('User', userSchema)
exports.userSchema = userSchema