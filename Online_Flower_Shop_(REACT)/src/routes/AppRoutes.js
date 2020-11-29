import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Cart from "../pages/Cart";
import Favourites from '../pages/Favourites';
import Body from "../components/Body";

const AppRoutes = ( ) => {
        return (
            <>
                <Switch>
                <Route  path='/favourites' component={Favourites}/>
                <Route  path='/cart' component={Cart}/>
                <Route  path='/' component={Body}/>
                </Switch>
            </>
        );

};

export default AppRoutes;