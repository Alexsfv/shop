import React from 'react'
import './ProductCard.scss'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';


type ProductCardProps = {
    name: string
    price: string | number
    rate: number
    previewSrc: string
    hoverSrc: string
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const {
        name, price, rate,
        previewSrc, hoverSrc
    } = props

    return (
        <div className="product-card">
            <div className="product-card__img-container">
                <img src={previewSrc} alt="product-image" className="product-card__main-img" />
                <img src={hoverSrc} alt="product-image" className="product-card__hover-img" />
                <FavoriteIcon className="product-card__like"/>
            </div>
            <p className="product-card__title">{name}</p>
            <div className="product-card__summary">
                <p className="product-card__price">$ {price}</p>
                <div className="product-card__rate">
                    <Rating name="disabled" size="small" value={rate} disabled/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard