
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import './NavbarLayout.scss'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

type NavbarLayoutProps = {}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {

    return (
        <>
            <Header />
            <nav className="navbar">
                <div className="container navbar__container">
                    <p className="navbar__logo">MiSto</p>

                    <ul className="navbar__categories">
                        {
                            new Array(8).fill('').map(c => (
                                <li key={Math.random()} className="navbar__category-item">
                                    <Link to="/" className="navbar__category-link">
                                        About us
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="navbar__controls">
                        <button className="navbar__control">
                            <SearchIcon/>
                        </button>
                        <button className="navbar__control">
                            <AccountCircleOutlinedIcon/>
                        </button>
                        <button className="navbar__control">
                            <LocalMallOutlinedIcon/>
                        </button>
                    </div>

                </div>
            </nav>
            { children}
        </>
    )
}

export default NavbarLayout