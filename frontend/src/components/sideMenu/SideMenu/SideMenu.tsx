import React, { useState } from 'react'
import FadeModal from '../../modals/FadeModal/FadeModal'
import CloseIcon from '@material-ui/icons/Close';
import './SideMenu.scss'
import { CSSTransition } from 'react-transition-group';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { sideMenuActions } from '../../../store/actions/sideMenuActions'

import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Cart from '../Cart/Cart';
import Favourites from '../Favourites/Favourites';
import Search from '../Search/Search';
import AuthorizeUser from '../AuthorizeUser/AuthorizeUser';
import Account from '../Account/Account';
import FlightIcon from '@material-ui/icons/Flight';
import Orders from '../Orders/Orders';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';
import { SideMenuState } from '../../../store/reducers/sideMenuReducer';

type SideMenuProps = {
    isShow: boolean
    timeout?: number
    unmountOnExit?: boolean
    onClose: () => void
}

const headers = ['account', 'search', 'favourite', 'shopping cart', 'orders']

const SideMenu: React.FC<SideMenuProps> = (props) => {
    const {
        isShow, onClose
    } = props

    const state = useSelector((state: RootState) => state.sideMenu) as SideMenuState
    const dispatch = useDispatch()

    const [isAuth, setAuth] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        dispatch(sideMenuActions.setIndex(newValue))
    }
    const handleChangeIndex = (index: number) => {
        dispatch(sideMenuActions.setIndex(index))
    }

    return (
        <>
            <FadeModal
                isShow={isShow}
                onClose={onClose}
            >
            </FadeModal>
            <CSSTransition
                in={isShow}
                timeout={300}
                classNames={{
                    enter: 'enter',
                    enterDone: 'enter',
                    exit: 'exit',
                    exitDone: 'exit',
                }}
                unmountOnExit
            >
                <div className="side-menu">
                    <div className="side-menu__body">

                        <div className="side-menu__header">
                            <p className="side-menu__header-text">{headers[state.currentIndex]}</p>
                            <button className="side-menu__close-btn btn btn-primary" onClick={onClose}>
                                <CloseIcon />
                            </button>
                        </div>

                        <div className="side-menu__content">
                            <SwipeableViews
                                axis={'x'}
                                index={state.currentIndex}
                                onChangeIndex={handleChangeIndex}
                            >
                                {
                                    isAuth
                                        ? <Account value={state.currentIndex} index={0}/>
                                        : <AuthorizeUser value={state.currentIndex} index={0}/>
                                }
                                <Search value={state.currentIndex} index={1}/>
                                <Favourites value={state.currentIndex} index={2}/>
                                <Cart value={state.currentIndex} index={3}/>
                                {
                                    isAuth &&
                                    <Orders value={state.currentIndex} index={4}/>
                                }
                            </SwipeableViews>
                        </div>

                        <div className="side-menu__footer">
                            <Tabs
                                value={state.currentIndex}
                                onChange={handleChange}
                                variant="fullWidth"
                                aria-label="icon tabs example"
                            >
                                <Tab icon={<PersonPinIcon />} aria-label="person"/>
                                <Tab icon={<SearchIcon />} aria-label="search"/>
                                <Tab icon={<FavoriteIcon />} aria-label="favorite"/>
                                <Tab icon={<ShoppingBasketIcon />} aria-label="cart"/>
                                {isAuth && <Tab icon={<FlightIcon />} aria-label="orders"/>}
                            </Tabs>
                        </div>

                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default SideMenu