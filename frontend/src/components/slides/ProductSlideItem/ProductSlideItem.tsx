import React from 'react'
import './ProductSlideItem.scss'

type ProductSlideItemProps = {
    imgSrc: string
}

const ProductSlideItem: React.FC<ProductSlideItemProps> = (props) => {
    const {
        imgSrc
    } = props

    return (
        <div className="product-slide">
            <div className="product-slide__img">
                <img src={imgSrc} alt="slide" />
            </div>
        </div>
    )
}

export default ProductSlideItem