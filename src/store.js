

import { createStore, combineReducers } from "redux";
import { todos } from "./todos/reducers";

const reducers = {
    todos,
};

const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(rootReducer, persistedState);

const store = configureStore();

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
