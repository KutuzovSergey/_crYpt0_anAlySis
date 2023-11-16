import React, { useContext, FC } from "react";
import { Route, Routes, } from "react-router-dom";
import {privateRouters, publicRouters, } from "../router";
import {AppContext} from '../context/index';
import { RouterProviderProps } from "react-router-dom";

const AppRouter: FC = () => {
    const {isAuth} = useContext<any>(AppContext);
   
    return (
        isAuth
            ?
            <Routes>
                {privateRouters.map(route =>
                    <Route
                        key={route.name}
                        path={route.path} 
                        element={route.component} />
                    )}
            </Routes>
            :
            <Routes>
                {publicRouters.map(route =>
                    <Route
                        key={route.name}
                        path={route.path} 
                        element={route.component} />
                    )}
            </Routes>
    )
}

export default AppRouter;