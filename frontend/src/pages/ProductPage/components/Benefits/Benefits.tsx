import React from 'react'
import './Benefits.scss'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';

type BenefitsProps = {}

const Benefits: React.FC<BenefitsProps> = React.memo(() => {
    return (
        <ul className="product__benefits">
            <li className="product__benefit-item">
                <div className="product__benefit-icon">
                    <LocalShippingOutlinedIcon />
                </div>
                <p className="product__benefit-text">
                    Shipping & Delivery
                </p>
            </li>
            <li className="product__benefit-item">
                <div className="product__benefit-icon">
                    <UpdateOutlinedIcon />
                </div>
                <p className="product__benefit-text">
                    Returns & Exchanges
                </p>
            </li>
            <li className="product__benefit-item">
                <div className="product__benefit-icon">
                    <ContactSupportOutlinedIcon />
                </div>
                <p className="product__benefit-text">
                    Ask & Questions
                </p>
            </li>
        </ul>
    )
})

export default Benefits