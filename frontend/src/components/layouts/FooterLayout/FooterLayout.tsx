import React from 'react'
import Footer from '../Footer/Footer'
import SubscribeLine from '../SubscribeLine/SubscribeLine'

const FooterLayout: React.FC<{}> = ({ children }) => {

    return (
        <>
            { children }
            <SubscribeLine/>
            <Footer/>
        </>
    )
}

export default FooterLayout