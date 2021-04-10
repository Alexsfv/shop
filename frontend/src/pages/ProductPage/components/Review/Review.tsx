import React from 'react'
import './Review.scss'
import Rating from '@material-ui/lab/Rating'
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';

type ReviewProps = {}

const Review: React.FC<ReviewProps> = (props) => {
    const {

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
        </div>
    )
}

export default Review