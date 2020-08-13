import {combineReducers} from "redux";

import pizzasReducer from "./pizzas";
import filtersReducer from "./filters";

export const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer
})