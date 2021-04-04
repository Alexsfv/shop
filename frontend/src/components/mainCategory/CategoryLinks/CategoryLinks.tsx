import React from 'react'
import './CategoryLinks.scss'

type CategoryLinksProps = {
    categoryName: string
}

const CategoryLinks: React.FC<CategoryLinksProps> = (props) => {
    const {
        categoryName,
    } = props


    return (
        <div className="category-links__nav">
            <p className="category-links__nav-text">{ categoryName }</p>
            <ul className="category-links__nav-links">
                <li className="active">new arrivials</li>
                <li>specials</li>
                <li>bestsellers</li>
                <li>most viewed</li>
                <li>feautered products</li>
            </ul>
        </div>
    )
}

export default CategoryLinks