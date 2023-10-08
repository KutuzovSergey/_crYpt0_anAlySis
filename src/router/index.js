import Home from "../pages/Home";
import Error from "../pages/Error";
import Currences from "../pages/Currences";
import CurrencePages from "../pages/CurrencePages";
import UserAccount from "../pages/UserAccount";


export const publicRouters = [
    {name: 'Home', path: '/', component: <Home/>, exact: true,},
    {name: 'Error', path: '*', component: <Error/>, exact: true,},
]

export const privateRouters = [
    {name: 'Home', path: '/', component: <Home/>, exact: true,},
    {name: 'Error', path: '*', component: <Error/>, exact: true,},
    {name: 'Currences', path: '/currences', component: <Currences/>, exact: true,},
    {name: 'UserAccount', path: '/user-account', component: <UserAccount/>, exact: true,},
    {name: 'CurrencePages', path: '/currences/:id', component: <CurrencePages/>, exact: true,},
]
