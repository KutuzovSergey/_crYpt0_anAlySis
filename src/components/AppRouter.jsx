import React from "react";
import { Route, Routes, } from "react-router-dom";
import {routers} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {routers.map(route =>
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