import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainLayout } from './components/shared';
import { Home, About, Contact, Products } from './components/organisms';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact push from="/" to="/home" />
            <Route path="/home" >
                <MainLayout>
                    <Home />
                </MainLayout>
            </Route>
            <Route path="/about" >
                <MainLayout>
                    <About />
                </MainLayout>
            </Route>
            <Route path="/products" >
                <MainLayout>
                    <Products />
                </MainLayout>
            </Route>
            <Route path="/contact" >
                <MainLayout>
                    <Contact />
                </MainLayout>
            </Route>
        </Switch>
    );
};

export default Routes;
