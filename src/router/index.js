import Home from "../pages/Home";
import Error from "../pages/Error";
import Currences from "../pages/Currences";
import CurrencePeges from "../pages/CurrentcePeges";

export const routers = [
    {name: 'Home', path: '/', component: <Home/>, exact: true,},
    {name: 'Error', path: '*', component: <Error/>, exact: true,},
    {name: 'Currences', path: '/currences', component: <Currences/>, exact: true,},
    {name: 'CurrencePeges', path: '/currences/:id', component: <CurrencePeges/>, exact: true,},
]
