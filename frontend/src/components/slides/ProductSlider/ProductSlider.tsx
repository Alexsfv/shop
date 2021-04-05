import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, Controller } from 'swiper';
import './ProductSlider.scss'
import 'swiper/swiper.scss';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ProductSlideItem from '../ProductSlideItem/ProductSlideItem';

type ProductSliderProps = {}

SwiperCore.use([Navigation, Thumbs, Controller])

const ProductSlider: React.FC<ProductSliderProps> = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

    return (
        <div className="product-slider">
            <div className="product-slider__thumbs">
                <div className="product-slider__thumbs-navigate">
                    <button className="product-slider__thumbs-prev" id="product-thumb-prev">
                        <KeyboardArrowUpIcon />
                    </button>
                    <button className="product-slider__thumbs-next" id="product-thumb-next">
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={0}
                    navigation={{
                        prevEl: "#product-thumb-prev",
                        nextEl: "#product-thumb-next",
                    }}
                    breakpoints={{
                        576: {
                            direction: "vertical",
                            slidesPerView: 4,
                            scrollbar: true,
                        },
                        0: {
                            direction: "horizontal",
                            slidesPerView: 3,
                            scrollbar: false,
                        },
                    }}
                    watchSlidesVisibility
                    watchSlidesProgress
                >
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/last-products.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="product-slider__main-slider">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    className="product-slider"
                    navigation
                    loop={true}
                    breakpoints={{
                        576: {
                            autoHeight: false
                        },
                        0: {
                            autoHeight: true
                        },
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/last-products.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideItem imgSrc="/static/img/men-preview.jpg"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ProductSlider