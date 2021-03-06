import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import MainPage from "../components/MainPage/MainPage";
import SingleProduct from "../containers/SingleProduct";
import Auth from "../containers/Auth";
import UserPage from '../containers/UserPage';
import ManageProducts from '../containers/ManageProducts';
import NotFound from '../components/Errors/NotFound';
import ServerError from '../components/Errors/ServerError';
import UnauthorizedPage from '../containers/UnauthorizedPage';

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
        <Route path="/sign-in" render={ () => (<Auth activeTab={"signin"} />) }/>
        <Route path="/sign-up" render={ () => (<Auth activeTab={"signup"} />) }/>
        <Route path="/unauthorized-page" component={UnauthorizedPage} />        
        <Route path="/not-found" component={NotFound} />
        <Route path="/server-error" component={ServerError} />
        <PrivateRoute path="/manage-products" render={() => (<ManageProducts />)}/>
        <PrivateRoute path="/products/:productId" render={({ match }) => (<SingleProduct productId={Number(match.params.productId)} />)} />
        <PrivateRoute path="/userdetails/:userId" render={({ match }) => (<UserPage userId={match.params.userId} />)} />
    </Switch>
)

export default routes;
