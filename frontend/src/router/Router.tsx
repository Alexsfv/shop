import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import FooterLayout from '../components/layouts/FooterLayout/FooterLayout'
import NavbarLayout from '../components/layouts/NavbarLayout/NavbarLayout'
import MainPage from '../pages/MainPage/MainPage'
import ProductPage from '../pages/ProductPage/ProductPage'

const Router: React.FC<{}> = () => {

    return (
        <NavbarLayout>
            <FooterLayout>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/product/:id" exact component={ProductPage} />
                    <Redirect to="/" />
                </Switch>
            </FooterLayout>
        </NavbarLayout>
    )
}

export default Router