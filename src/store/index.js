import { applyMiddleware, combineReducers, createStore } from "redux";
import { userData } from "./userData"
import { allCoinListReducer } from "./allCoinListReducer";
import { userCoinListReducer } from "./userCoinListReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    allCoinList: allCoinListReducer,
    userCoinList: userCoinListReducer,
    userData: userData,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));