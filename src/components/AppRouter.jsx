import React, { useContext } from "react";
import { Route, Routes, } from "react-router-dom";
import {privateRouters, publicRouters, } from "../router";
import {AppContext} from '../context/index';

const AppRouter = () => {
    const {isAuth} = useContext(AppContext);
   
    return (
        isAuth
            ?
            <Routes>
                {privateRouters.map(route =>
                    <Route
                        key={route.name}
                        exact={route.exact}
                        path={route.path} 
                        element={route.component} />
                    )}
            </Routes>
            :
            <Routes>
                {publicRouters.map(route =>
                    <Route
                        key={route.name}
                        exact={route.exact}
                        path={route.path} 
                        element={route.component} />
                    )}
            </Routes>
    )
}

export default AppRouter;