import React from 'react'
import './CategoryPreview.scss'

type CategoryPreviewProps = {
    text: string
    imgSrc: string
    title?: string
    alt?: string
    classes?: string[]
    imgClasses?: string[]
}

const CategoryPreview: React.FC<CategoryPreviewProps> = (props) => {
    const {
        text, imgSrc, classes,
        alt, imgClasses, title,
    } = props

    let wrapClasses = ['category-preview']

    if (classes) wrapClasses = [...wrapClasses, ...classes]

    return (
        <div className={wrapClasses.join(' ')}>
            <div className="category-preview__img">
                <img src={imgSrc} alt={alt || text} className={imgClasses?.join(' ')} />
            </div>
            <div className="category-preview__text">
                {
                    title &&
                    <p className="category-preview__title-text">
                        {title}
                    </p>
                }
                <p className="category-preview__main-text">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default CategoryPreview