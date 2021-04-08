import React, { useState } from 'react'
import RadioGroup from '../../components/formComponents/RadioGroup/RadioGroup'
import ProductSlider from '../../components/slides/ProductSlider/ProductSlider'
import './ProductPage.scss'
import Summary from './components/Summary/Summary'
import Benefits from './components/Benefits/Benefits'
import Payments from './components/Payments/Payments'
import Description from './components/Description/Description'
import Parameters from './components/Parameters/Parameters'


type ProductPageProps = {}


const colorInputs = [
    {
        value: 'white',
        inputImgSrc: '/static/img/test-colors/white.jpg',
        inputImgAlt: 'blue-color',
    },
    {
        value: 'pink',
        inputImgSrc: '/static/img/test-colors/pink.jpg',
        inputImgAlt: 'blue-color',
    },
    {
        value: 'black',
        inputImgSrc: '/static/img/test-colors/black.jpg',
        inputImgAlt: 'blue-color',
    },
    {
        value: 'yellow',
        inputImgSrc: '/static/img/test-colors/yellow.jpg',
        inputImgAlt: 'blue-color',
    },
]

const SizeInputs = [
    {
        value: 'xs',
        inputText: 'xs'
    },
    {
        value: 's',
        inputText: 's'
    },
    {
        value: 'm',
        inputText: 'm'
    },
    {
        value: 'l',
        inputText: 'l'
    },
]

const descr = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat ipsam voluptates reiciendis suscipit? Iusto ducimus aspernatur harum ea, quod cum minus facilis, illo quas, obcaecati esse! Aut, fugit nisi."

const additional = [
    {
        name: 'color',
        value: 'White, Pink, Black, Yellow',
    },
    {
        name: 'size',
        value: 'XS, S, M, L'
    },
    {
        name: 'material',
        value: '100% Poluster',
    }
]

const ProductPage: React.FC<ProductPageProps> = (props) => {

    const [color, setColor] = useState<string>(colorInputs[0].value)
    const [size, setSize] = useState<string>(SizeInputs[0].value)

    const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSize(e.target.value)
    }

    return (
        <>
            <div className="product-head">
                <div className="container">
                    <p className="product-head__name">Women's tracksuit Q109</p>
                </div>
            </div>

            <div className="product">
                <div className="container">
                    <div className="product__body">
                        <div className="product__images-block">
                            <ProductSlider />
                        </div>
                        <div className="product__info-block">

                            <form className="product__params">
                                <RadioGroup
                                    title="color"
                                    inputs={colorInputs}
                                    value={color}
                                    nameGroup="product-color"
                                    inputWrapperClasses={['product-radio-block']}
                                    onChange={handleChangeColor}
                                />
                                <RadioGroup
                                    title="size"
                                    inputs={SizeInputs}
                                    value={size}
                                    nameGroup="product-size"
                                    onChange={handleChangeSize}
                                />
                            </form>

                            <Summary
                                isFavourite={false}
                                price={5210.99}
                            />
                            <Benefits />
                            <Payments />
                            {/* <div className="product__devider"></div> */}
                            <Description text={descr}/>
                            <Parameters
                                value={additional}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage