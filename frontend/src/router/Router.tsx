import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import FooterLayout from '../components/layouts/FooterLayout/FooterLayout'
import NavbarLayout from '../components/layouts/NavbarLayout/NavbarLayout'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import MainPage from '../pages/MainPage/MainPage'
import ProductPage from '../pages/ProductPage/ProductPage'

const Router: React.FC<{}> = () => {

    return (
        <NavbarLayout>
            <FooterLayout>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/product/:id" exact component={ProductPage} />
                    <Route path="/catalog/:categoryName" exact component={CatalogPage} />
                    <Redirect to="/" />
                </Switch>
            </FooterLayout>
        </NavbarLayout>
    )
}

export default Router