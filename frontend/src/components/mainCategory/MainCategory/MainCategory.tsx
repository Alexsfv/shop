import React from 'react'
import ProductCard from '../../cards/ProductCard/ProductCard'
import CategoryLinks from '../CategoryLinks/CategoryLinks'
import './MainCategory.scss'

type MainCategoryProps = {
    categoryName: string
}

const MainCategory: React.FC<MainCategoryProps> = (props) => {
    const {
        categoryName,
    } = props

    return (
        <div className="main-category">
            <div className="container main-category__container">
                <CategoryLinks categoryName={categoryName}/>
                <div className="main-category__products">
                    {
                        new Array(8).fill('').map((c, i) => (
                            <ProductCard
                                key={i}
                                name="Women's tracksuit Q109"
                                price="35.00"
                                rate={3}
                                previewSrc="/static/img/men-preview2.jpg"
                                hoverSrc="/static/img/men-preview.jpg"
                            />
                        ))
                    }
                </div>
                <div className="main-category__controls">
                    <button className="main-category__more-btn btn btn-grey">
                        see all
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainCategory