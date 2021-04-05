import React from 'react'
import './Footer.scss'
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WatchLaterIcon from '@material-ui/icons/WatchLater';


type FooterProps = {

}

const Footer: React.FC<FooterProps> = (props) => {

    return (
        <div className="footer">
            <div className="container">
                <div className="footer__body">
                    <div className="footer__links-block">
                        <p className="footer__links-title">categories</p>
                        <ul className="footer__links-list">
                            <li className="footer__link">Men</li>
                            <li className="footer__link">Women</li>
                            <li className="footer__link">Accessories</li>
                            <li className="footer__link">Home</li>
                        </ul>
                    </div>
                    <div className="footer__links-block">
                        <p className="footer__links-title">information</p>
                        <ul className="footer__links-list">
                            <li className="footer__link">About Us</li>
                            <li className="footer__link">Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer__links-block">
                        <p className="footer__links-title">useful links</p>
                        <ul className="footer__links-list">
                            <li className="footer__link">Terms & Conditions</li>
                            <li className="footer__link">Return & Exchanges</li>
                            <li className="footer__link">Shipping & Delivery</li>
                            <li className="footer__link">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer__links-block">
                        <p className="footer__links-title">contact us</p>
                        <ul className="footer__links-list">
                            <li>
                                <a className="footer__link" href="tel:+380501234567">
                                    <PhoneIcon className="footer__link-icon" />
                                    <span>+38 (050) 12 34 567</span>
                                </a>
                            </li>
                            <li>
                                <a className="footer__link" href="https://yandex.ru/maps/-/CCUUVAV23C" target="_blank" rel="noreferrer">
                                    <LocationOnIcon className="footer__link-icon" />
                                    <span>Russia, Moscow, Lenina 1</span>
                                </a>
                            </li>
                            <li className="footer__link">
                                <WatchLaterIcon className="footer__link-icon" />
                                <span>All week 24/7</span>
                            </li>
                            <li>
                                <a className="footer__link" href="mailto:misto-feedback@gmail.com">
                                    <LocationOnIcon className="footer__link-icon" />
                                    <span>misto-feedback@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__info">
                <div className="container footer__info-container">
                    <p className="footer__info-copyright">Copyright 2032 all right reserved</p>
                    <div className="footer__info-payments">
                        <img src="/static/img/payments-grey.png" alt="payments"/>
                    </div>
                    <div className="footer__info-developer">
                        <span>Development by </span>
                        <a
                            href="https://github.com/Alexsfv"
                            className="footer__info-developer-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Alexsfv
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer