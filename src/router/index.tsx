import Home from "../pages/Home";
import Error from "../pages/Error";
import Currences from "../pages/Currences";
import CurrencePages from "../pages/CurrencePages";
import UserAccount from "../pages/UserAccount";
import EditProfile from "../pages/EditProfile";
import { PublicRoutersType } from "../type/typesRouter";

export const publicRouters: PublicRoutersType = [
    { name: 'Home', path: '/_crYpt0_anAlySis', component: <Home/>},
    {name: 'Error', path: '*', component: <Error/>},
]

export const privateRouters: PublicRoutersType = [
    { name: 'Home', path: '/_crYpt0_anAlySis', component: <Home/>},
    {name: 'Error', path: '*', component: <Error/>},
    {name: 'Currences', path: '/currences', component: <Currences/>},
    {name: 'EditProfile', path: '/editProfile', component: <EditProfile/>},
    {name: 'UserAccount', path: '/user-account', component: <UserAccount/>},
    {name: 'CurrencePages', path: '/currences/:id', component: <CurrencePages/>},
]
