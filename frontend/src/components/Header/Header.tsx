import React from 'react'
import './Header.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WatchLaterIcon from '@material-ui/icons/WatchLater';


const Header: React.FC<{}> = () => {
    return (
        <header className="header">
            <div className="container header__container">

                <div className="header__contacts">
                    <a className="header__contact-item" href="tel:+380501234567">
                        <PhoneIcon className="header__contact-icon"/>
                        <span className="header__contact-text">
                            +38 (050) 12 34 567
                        </span>
                    </a>
                    <a className="header__contact-item" href="https://yandex.ru/maps/-/CCUUVAV23C" target="_blank" rel="noreferrer">
                        <LocationOnIcon className="header__contact-icon"/>
                        <span className="header__contact-text">
                            Russia, Moscow, Lenina 1
                        </span>
                    </a>
                    <div className="header__contact-item">
                        <WatchLaterIcon className="header__contact-icon"/>
                        <span className="header__contact-text">
                            All week 24/7
                        </span>
                    </div>
                </div>

                <div className="header__socials">
                    <a className="header__social-item" href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FacebookIcon className="header__social-icon"/>
                    </a>
                    <a className="header__social-item" href="https://twitter.com" target="_blank" rel="noreferrer">
                        <TwitterIcon className="header__social-icon"/>
                    </a>
                    <a className="header__social-item" href="https://instagram.com" target="_blank" rel="noreferrer">
                        <InstagramIcon className="header__social-icon"/>
                    </a>
                </div>

            </div>
        </header>
    )
}

export default Header