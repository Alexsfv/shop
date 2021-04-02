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

import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Cart from '../Cart/Cart';
import Favourites from '../Favourites/Favourites';
import TabPanel from '../../ui/TabPanel/TabPanel';

type SideMenuProps = {
    isShow: boolean
    timeout?: number
    unmountOnExit?: boolean
    onClose: () => void
}

const headers = ['search', 'favourite', 'shopping cart', 'user']

const SideMenu: React.FC<SideMenuProps> = (props) => {
    const {
        isShow, onClose,
    } = props

    const [value, setValue] = useState<number>(0)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

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
                            <p className="side-menu__header-text">{headers[value]}</p>
                            <button className="side-menu__close-btn btn btn-primary" onClick={onClose}>
                                <CloseIcon />
                            </button>
                        </div>

                        <div className="side-menu__content">
                            <SwipeableViews
                                axis={'x'}
                                // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir="rtl">
                                    Item Two
                                </TabPanel>
                                
                                <Favourites value={value} index={1}/>
                                <Cart value={value} index={2}/>
                            </SwipeableViews>
                        </div>

                        <div className="side-menu__footer">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                aria-label="icon tabs example"
                            >
                                <Tab icon={<SearchIcon />} aria-label="search" />
                                <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                                <Tab icon={<ShoppingBasketIcon />} aria-label="cart" />
                                <Tab icon={<PersonPinIcon />} aria-label="person" />
                            </Tabs>
                        </div>

                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default SideMenu