import {combineReducers} from "redux";

import pizzasReducer from "./pizzas";
import filtersReducer from "./filters";
import cartReducer from "./cart";

export const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer,
    cart: cartReducer
})