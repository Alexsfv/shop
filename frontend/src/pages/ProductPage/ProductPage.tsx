import React from 'react'
import ProductSlider from '../../components/slides/ProductSlider/ProductSlider'
import './ProductPage.scss'

type ProductPageProps = {

}

const ProductPage: React.FC<ProductPageProps> = (props) => {

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

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage