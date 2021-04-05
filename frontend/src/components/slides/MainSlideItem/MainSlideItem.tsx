import React from 'react'
import './MainSlideItem.scss'
import 'swiper/swiper-bundle.min.css'

type MainSlideItemProps = {
    title: string
    description: string
    imgSrc: string
    alt?: string
}

const MainSlideItem: React.FC<MainSlideItemProps> = (props) => {
    const {
        title, description, imgSrc,
        alt,
    } = props

    return (
        <>
            <div className="main-slide-item__img">
                <img src={imgSrc} alt={alt || 'bg-image'} />
            </div>
            <div className="main-slide-item__text">
                <p className="main-slide-item__title">{ title }</p>
                <p className="main-slide-item__description">{ description }</p>
            </div>
        </>

    )
}

export default MainSlideItem