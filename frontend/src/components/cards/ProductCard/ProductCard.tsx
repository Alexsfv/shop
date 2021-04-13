import React from 'react'
import './ProductCard.scss'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';


type ProductCardProps = {
    name: string
    price: string | number
    rate: number
    previewSrc: string
    hoverSrc: string
    classes?: string[]
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const {
        name, price, rate,
        previewSrc, hoverSrc, classes,
    } = props

    const handleLike = (e: React.MouseEvent) => {
        e.preventDefault()
    }

    let cardClasses = ['product-card']

    if (classes) cardClasses = [...cardClasses, ...classes]

    return (
        <div className={cardClasses.join(' ')}>
            <Link className="product-card__img-container" to="/product/1">
                <img src={previewSrc} alt="product" className="product-card__main-img" />
                <img src={hoverSrc} alt="product" className="product-card__hover-img" />
                <FavoriteIcon className="product-card__like" onClick={handleLike}/>
            </Link>
            <Link
                to="/product/1"
                className="product-card__title"
            >
                {name}
            </Link>
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