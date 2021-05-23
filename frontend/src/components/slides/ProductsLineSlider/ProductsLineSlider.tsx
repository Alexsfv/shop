import React, { useMemo } from 'react'
import './ProductsLineSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../cards/ProductCard/ProductCard';
import { getRandomIds } from '../../../utils/random';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

type ProductsLineSliderProps = {
    title: string
}

const ProductsLineSlider: React.FC<ProductsLineSliderProps> = (props) => {
    const {
        title
    } = props

    const [nextId, prevId] = useMemo(() => getRandomIds(2, 'slide-btn-'), [])

    return (
        <div className="products-line">
            <div className="products-line__top">
                <p className="products-line__title">{title}</p>
                <div className="products-line__controls">
                    <button className="products-line__prev-slide btn" id={prevId}>
                        <NavigateBeforeIcon />
                    </button>
                    <button className="products-line__next-slide btn" id={nextId}>
                        <NavigateNextIcon />
                    </button>
                </div>
            </div>
            <div className="products-line__body">
                <Swiper
                    navigation={{
                        nextEl: `#${nextId}`,
                        prevEl: `#${prevId}`,
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 31,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        0: {
                            slidesPerView: 1,
                            centeredSlides: true
                        },
                    }}
                >
                    {
                        new Array(12).fill('').map((c, i) => (
                            <SwiperSlide className="products-line__slide-item">
                                <ProductCard
                                    key={i}
                                    name="Women's tracksuit Q109"
                                    price="35.00"
                                    rate={3}
                                    previewSrc="/static/img/men-preview2.jpg"
                                    hoverSrc="/static/img/men-preview.jpg"
                                    wrapClasses={['products-line-card']}
                                    liked={i % 2 === 0}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ProductsLineSlider