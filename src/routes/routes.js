import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import MainPage from "../componets/MainPage/MainPage";
import SingleProduct from "../containers/SingleProduct";
import SignPage from "../componets/SignPage/SignPage";
import UserPage from '../componets/UserPage/UserPage';
import NewProduct from '../containers/NewProduct';
import NotFound from '../componets/Errors/NotFound';
import ServerError from '../componets/Errors/ServerError';
import UnauthorizedPage from '../componets/UnauthorizedPage/UnauthorizedPage';

import { store } from '../store/store';

const PrivateRoute = ({ render: Component, ...rest }) => {
    let isLogin =  store.getState().userReducer.isLogin;
    let path = rest.location.pathname;
    return <Route {...rest} render={(props) => (
        isLogin === true
            ? <Component  {...props} />
            : <Redirect to={{
                pathname: "/unauthorized-page",
                state: {
                    path
                }
            }} />
    )} />
}

const routes = () => (
    <Switch>
        <Route exact path="/"component={MainPage} />
        <Route path="/sign-in" render={ () => (<SignPage activeTab={"signin"} />) }/>
        <Route path="/sign-up" render={ () => (<SignPage activeTab={"signup"} />) }/>
        <Route path="/unauthorized-page" component={UnauthorizedPage} />        
        <Route path="/not-found" component={NotFound} />
        <Route path="/server-error" component={ServerError} />
        <PrivateRoute path="/new-product" render={() => (<NewProduct />)}/>
        <PrivateRoute path="/products/:productId" render={({ match }) => (<SingleProduct productId={Number(match.params.productId)} />)} />
        <PrivateRoute path="/userdetails/:userId" render={({ match }) => (<UserPage userId={match.params.userId} />)} />
    </Switch>
)

export default routes;