import React from 'react'
import MainSlideItem from '../MainSlideItem/MainSlideItem'
import './MainSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

type MainSliderProps = {}

const MainSlider: React.FC<MainSliderProps> = () => {

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop
            autoplay
        >
            <SwiperSlide className="main-slide-item">
                <MainSlideItem
                    title="banner"
                    description="yout title text"
                    imgSrc="/static/img/women-preview.jpg"
                    alt="women-image"
                />
            </SwiperSlide>
            <SwiperSlide className="main-slide-item">
                <MainSlideItem
                    title="banner"
                    description="yout title text"
                    imgSrc="/static/img/men-preview2.jpg"
                    alt="men-image"
                />
            </SwiperSlide>
            <SwiperSlide className="main-slide-item">
                <MainSlideItem
                    title="banner"
                    description="yout title text"
                    imgSrc="/static/img/home-preview.jpg"
                    alt="home-image"
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default MainSlider