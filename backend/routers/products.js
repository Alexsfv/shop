const {
    Product
} = require('../models/product')
const express = require('express')
const {
    Category
} = require('../models/category')
const router = express.Router()
const mongoose = require('mongoose')
const multer = require('multer')
const { clearImagesByRequest, clearMainImageProduct, clearGalleryProduct } = require('../helpers/clearProductImages')


const ALLOWED_FILES = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

const productImages = [{
        name: 'mainImage',
        maxCount: 1
    },
    {
        name: 'images',
        maxCount: 10
    },
]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let errorFile = new Error('Invalid file type')
        if (ALLOWED_FILES[file.mimetype]) {
            errorFile = null
        }
        cb(errorFile, 'public/uploads/products')
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

router.get(`/`, async (req, res) => {
    let filter = {}

    if (req.query.categories) {
        filter.category = req.query.categories.split(',')
    }
    const productList = await Product.find(filter).populate('category')
    if (!productList) {
        return res.status(500).json({
            success: false
        })
    }
    res.send(productList)
})

router.get(`/:id`, async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category')
    if (!product) {
        return res.status(500).json({
            success: false
        })
    }
    res.send(product)
})

router.post(`/`, optionStorage.fields(productImages), async (req, res) => {
    try {
        const category = await Category.findById(req.body.category)
        if (!category) return res.status(400).send('Invalid Category')
        if (!req.files.mainImage) return res.status(400).send('mainImage is requred')
        if (!req.files.images) return res.status(400).send('images is required')

        console.log('req.files.mainImage[0]', req.files.mainImage[0])
        console.log('req.files.images.length', req.files.images.length)

        const baseUrl = `${req.protocol}://${req.get('host')}/public/uploads/products/`

        const imagesUrls = req.files.images.map(imgFile => `${baseUrl}${imgFile.filename}`)
        const mainImageUrl = `${baseUrl}${req.files.mainImage[0].filename}`

        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            brand: req.body.brand,
            mainImage: mainImageUrl,
            images: imagesUrls,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
            countInStock: req.body.count,
        })

        product = await product.save()
        if (!product) {
            return res.status(500).send('The product cannot be created')
        }
        res.send(product)
    } catch (err) {
        setTimeout(() => {
            clearImagesByRequest(req)
        }, 3000)
        res.status(500).send(err.message)
    }
})

router.put('/:id', optionStorage.fields(productImages), async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product Id')
    }
    const category = await Category.findById(req.body.category)
    if (!category) return res.status(400).send('Invalid Category')

    const oldProduct = await Product.findById(req.params.id)

    const baseUrl = `${req.protocol}://${req.get('host')}/public/uploads/products/`
    const mainImage = req.files.mainImage ? req.files.mainImage[0] : null

    let mainImageUrl = ''
    let imagesUrls = []
    const oldImagesUrls = req.body.oldImages || []

    if (req.files.images) {
        imagesUrls = req.files.images.map(imgFile => `${baseUrl}${imgFile.filename}`)
        clearGalleryProduct(oldProduct)
    }
    if (mainImage) {
        clearMainImageProduct(oldProduct)
        mainImageUrl = `${baseUrl}${mainImage.filename}`
    }

    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id, {
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                brand: req.body.brand,
                mainImage: mainImage ? mainImageUrl : oldProduct.mainImage,
                images: [...oldImagesUrls, ...imagesUrls],
                size: req.body.size,
                color: req.body.color,
                price: req.body.price,
                countInStock: req.body.count,
            },
            { new: true }
        )

        if (!product)
            return res.status(400).send('The product cannot be created')
        res.status(200).send(product)
    } catch (err) {
        setTimeout(() => { clearImagesByRequest(req) }, 3000)
        res.status(500).send(err.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id)
        if (product) {
            clearGalleryProduct(product)
            clearMainImageProduct(product)
            return res.status(200).json({
                success: true,
                message: 'The product is deleted!'
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Product not found!'
            })
        }
    } catch(err) {
        console.log(err)
        res.status(400).json({
            success: false,
            error: err
        })
    }
})

module.exports = router