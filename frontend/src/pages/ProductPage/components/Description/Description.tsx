import React from 'react'
import './Description.scss'

type DescriptionProps = {
    text: string
}

const Description: React.FC<DescriptionProps> = React.memo(({text}) => {

    return (
        <div className="product__description">
            <p className="product__description-title">
                description
            </p>
            <p className="product__description-text">
                { text }
            </p>
        </div>
    )
})

export default Description