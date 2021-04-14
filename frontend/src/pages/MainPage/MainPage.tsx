import React from 'react'
import './MainPage.scss'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import SwipreCore, { Navigation, Autoplay } from 'swiper'
import Benefit from '../../components/cards/Benefit/Benefit';
import CategoryPreview from '../../components/cards/CategoryPreview/CategoryPreview';
import MainCategory from '../../components/mainCategory/MainCategory/MainCategory';
import MainSlider from '../../components/slides/MainSlider/MainSlider';

type MainPageProps = {}

SwipreCore.use([Navigation, Autoplay])

const MainPage: React.FC<MainPageProps> = () => {

    return (
        <>
            <div className="main-slide">
                <div className="container">
                    <div className="main-slide__body">
                        <div className="main-slide__slider">
                            <MainSlider/>
                        </div>
                        <div className="main-slide__categories">
                            <div className="main-slide__small-categories">
                                <CategoryPreview
                                    text="Women"
                                    imgSrc="/static/img/women-preview.jpg"
                                    alt="women"
                                    href="/catalog/women"
                                    classes={['small', 'right-offset']}
                                    imgClasses={['hover-blur']}
                                />
                                <CategoryPreview
                                    text="Men"
                                    imgSrc="/static/img/men-preview3.jpg"
                                    alt="men"
                                    href="/catalog/men"
                                    classes={['small']}
                                    imgClasses={['hover-blur']}
                                />
                            </div>
                            <CategoryPreview
                                text="Accessories"
                                imgSrc="/static/img/accessories-preview.jpg"
                                alt="accessories"
                                href="/catalog/accessories"
                                imgClasses={['img-center', 'hover-blur']}
                            />
                        </div>
                    </div>
                    <div className="main-slide__benefit">
                        <Benefit
                            title="free shipping"
                            description="On all UA order or order above $100"
                            Icon={LocalShippingOutlinedIcon}
                        />
                        <Benefit
                            title="30 days return"
                            description="Simply return it within 30 days for an exchange"
                            Icon={UpdateOutlinedIcon}
                        />
                        <Benefit
                            title="support 24/7"
                            description="Contact us 24 hours a day. 7 days a week"
                            Icon={ContactSupportOutlinedIcon}
                        />
                    </div>
                    <div className="main-slide__devider"></div>
                </div>
            </div>

            <MainCategory categoryName="women's"/>

            <MainCategory categoryName="men's"/>

            <div className="sales">
                <div className="container sales__container">
                    <div className="sales__body">
                        <CategoryPreview
                            title="new season"
                            text="last products"
                            imgSrc="/static/img/last-products.png"
                            alt="last-products"
                            classes={['right-offset']}
                            imgClasses={['img-cover', 'hover-blur']}
                        />
                        <CategoryPreview
                            title="sale"
                            text="get up to 50% off"
                            imgSrc="/static/img/sales.png"
                            alt="last-products"
                            imgClasses={['img-center', 'img-cover', 'hover-blur']}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage