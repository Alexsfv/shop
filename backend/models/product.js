const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    brand: {
        type: String,
        default: ''
    },
    rating: {
        type: Number,
        default: 0
    },
    mainImage: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    size: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
})

productSchema.virtual('id').get(function() {
    return this._id.toHexString()
})

productSchema.set('toJSON', {
    virtuals: true,
})

exports.Product = mongoose.model('Product', productSchema)