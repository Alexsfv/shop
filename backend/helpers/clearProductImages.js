const fs = require('fs')

const getFileName = (fileUrl) => {
    return fileUrl.split('/public/uploads/products/')[1]
}

function clearImagesByRequest(req) {
    if (Array.isArray(req.files.mainImage)) {
        fs.unlink(
            `public/uploads/products/${req.files.mainImage[0].filename}`,
            (err) => { if (err) console.log(err) }
        )
    }
    if (Array.isArray(req.files.images)) {
        req.files.images
            .forEach(img => fs.unlink(
                    `public/uploads/products/${img.filename}`,
                    (err) => { if (err) console.log(err) }
                )
            )
    }
}

function clearMainImageProduct(product) {
    if (product.mainImage) {
        fs.unlink(
            `public/uploads/products/${getFileName(product.mainImage)}`,
            (err) => { if (err) console.log(err) }
        )
    }
}

function clearGalleryProduct(product) {
    if (product.images.length) {
        product.images.forEach(fileUrl => {
            fs.unlink(
                `public/uploads/products/${getFileName(fileUrl)}`,
                (err) => { if (err) console.log(err) }
            )
        })
    }
}

exports.clearImagesByRequest = clearImagesByRequest
exports.clearMainImageProduct = clearMainImageProduct
exports.clearGalleryProduct = clearGalleryProduct