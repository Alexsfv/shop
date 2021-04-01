
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import './NavbarLayout.scss'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import SideMenu from '../../SideMenu/SideMenu';

type NavbarLayoutProps = {}

const fake = ['About Us', 'Women', 'Men', 'Beauty', 'Accessories', 'Contact']

const headerHeight = 31
const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {

    const [topOffset, setTopOffset] = useState<number>(headerHeight)
    const [showModal, setShowModal] = useState<boolean>(false)
    const headerRef = useRef<HTMLElement>(null)

    const handleMenu = () => {
        setShowModal(!showModal)
    }

    useEffect(() => {
        const handleScroll = (e: Event) => {
            if (headerRef) {
                let untillTop = headerRef.current?.getBoundingClientRect().bottom || 0
                if (untillTop < 0) untillTop = 0
                setTopOffset(untillTop)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    return (
        <>
            <Header ref={headerRef} />
            <nav className="navbar" style={{ top: topOffset }}>
                <div className="container navbar__container">
                    <p className="navbar__logo">MiSto</p>

                    <ul className="navbar__categories">
                        {
                            fake.map(c => (
                                <li key={Math.random()} className="navbar__category-item">
                                    <Link to="/" className="navbar__category-link btn-primary">
                                        {c}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="navbar__controls">
                        <button className="navbar__control btn-primary" onClick={handleMenu}>
                            <SearchIcon />
                        </button>
                        <button className="navbar__control btn-primary" onClick={handleMenu}>
                            <AccountCircleOutlinedIcon />
                        </button>
                        <button className="navbar__control btn-primary" onClick={handleMenu}>
                            <LocalMallOutlinedIcon />
                        </button>
                        <button className="navbar__control navbar__control_menu btn-primary" onClick={handleMenu}>
                            <MenuOpenIcon className="navbar__menu-icon" />
                        </button>
                    </div>

                </div>
            </nav>
            <section className="page-container">
                {children}
            </section>
            <SideMenu
                isShow={showModal}
                onClose={handleMenu}
            >
            </SideMenu>
        </>
    )
}

export default NavbarLayout