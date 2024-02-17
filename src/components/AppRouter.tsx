import React, { FC } from "react";
import { Route, Routes, } from "react-router-dom";
import {privateRouters, publicRouters, } from "../router";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const AppRouter: FC = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.generalApp.isAuth);
   
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