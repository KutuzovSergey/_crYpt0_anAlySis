import { applyMiddleware, combineReducers, createStore } from "redux";
import { userData } from "./userDataReducer"
import { allCoinListReducer } from "./allCoinListReducer";
import { userCoinListReducer } from "./userCoinListReducer";
import { userDataReducer } from "./userDataReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    allCoinList: allCoinListReducer,
    userCoinList: userCoinListReducer,
    userData: userDataReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));