import React from 'react'
import './Summary.scss'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

type SummaryProps = {
    price: number
    isFavourite: boolean
}

const Summary: React.FC<SummaryProps> = (props) => {
    const {
        isFavourite, price
    } = props

    const getFavouriteClasses = () => {
        const classes = ['product__wish-btn', 'btn']
        if (isFavourite) classes.push('active')
        return classes.join(' ')
    }

    return (
        <div className="product__summary">
            <p className="product__price">$ {price}</p>
            <button className="product__add-cart-btn btn btn-black">add to cart</button>
            <button className={getFavouriteClasses()}>
                <FavoriteBorderIcon />
            </button>
        </div>
    )
}

export default Summary