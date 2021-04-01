import React, { useState } from 'react'
import FadeModal from '../modals/FadeModal/FadeModal'
import CloseIcon from '@material-ui/icons/Close';
import './SideMenu.scss'
import { CSSTransition } from 'react-transition-group';


import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';


type SideMenuProps = {
    isShow: boolean
    timeout?: number
    unmountOnExit?: boolean
    onClose: () => void
}

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
                            <p className="side-menu__header-text">Search</p>
                            <button className="side-menu__close-btn btn-primary" onClick={onClose}>
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
                                    Item One
                                </TabPanel>
                                <TabPanel value={value} index={1} dir="rtl">
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2} dir="rtl">
                                    Item Three
                                </TabPanel>
                            </SwipeableViews>



                        </div>

                        <div className="side-menu__footer">
                            <AppBar position="static">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons="off"
                                    aria-label="scrollable prevent tabs example"
                                >
                                    <Tab icon={<PhoneIcon />} aria-label="phone" {...a11yProps(0)} />
                                    <Tab icon={<FavoriteIcon />} aria-label="favorite" {...a11yProps(1)} />
                                    <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(2)} />
                                    {/* <Tab icon={<HelpIcon />} aria-label="help" {...a11yProps(3)} />
                                    <Tab icon={<ShoppingBasket />} aria-label="shopping" {...a11yProps(4)} />
                                    <Tab icon={<ThumbDown />} aria-label="up" {...a11yProps(5)} />
                                    <Tab icon={<ThumbUp />} aria-label="down" {...a11yProps(6)} /> */}
                                </Tabs>
                            </AppBar>
                        </div>

                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
    dir: any
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}


export default SideMenu