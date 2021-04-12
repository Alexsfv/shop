import React from 'react'
import './Review.scss'
import Rating from '@material-ui/lab/Rating'
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';


type ReviewType = {
    userName: string
    date: string
    rate: number
    text: string
}

type ReviewProps = {
    reviews: ReviewType[]
}

const Review: React.FC<ReviewProps> = (props) => {
    const {
        reviews
    } = props

    return (
        <div className="product__review">
            <p className="product__review-title">Reviews</p>
            <div className="product__review-header">
                <div className="product__review-rate">
                    <Rating name="disabled" size="small" value={4} disabled/>
                    <p className="product__review-count">
                        2 Reviews
                    </p>
                </div>
                <button className="product__review-new-btn btn">
                    <TextsmsOutlinedIcon className="product__review-new-icon"/>
                    Write a review
                </button>
            </div>

            {
                reviews.map(r => (
                    <div className="product__review-item">
                        <div className="product__review-item-top">
                            <p className="product__review-item-name">{ r.userName }</p>
                            <p className="product__review-item-date">{ r.date }</p>
                            <Rating name="rate" size="small" value={ r.rate } disabled className="product__review-item-rate"/>
                        </div>
                        <div className="product__review-item-body">
                            <p className="product__review-item-description">
                                { r.text }
                            </p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Review