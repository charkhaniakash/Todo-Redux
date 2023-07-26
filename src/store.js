

import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos } from "./todos/reducers";
import thunk from 'redux-thunk'


const reducers = {
    todos,
};


const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
);

const store = configureStore();

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
